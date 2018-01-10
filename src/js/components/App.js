import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getForecast, getWeather} from "../redux/action_creaters";
import SearchCity from "./SearchCity";
import CityWeather from "./CityWeather";
import CityWeatherTable from "./CityWeatherTable";
import CityForecast from "./CityForecast";
import LoaderBall from "./LoaderBall";
import CityDailyForecast from "./CityDailyForecast";

class App extends React.Component {

    constructor(props) {
        super(props);

        /*Получить текущие погодные условия*/
        this.props.getWeather(null);

        /*Получить прогноз на 5 дней*/
        this.props.getForecast(null);

        /*The function, that will be called when search city form will be submitted*/
        this.submitFunc = this.searchCity.bind(this);

    }

    render() {

        return (
            <div>
                <div className="row search-city">
                    <SearchCity submitFunc={this.submitFunc}/>
                </div>

                <h3 className="widget-title">Current weather and forecasts in your city</h3>
                {this.props.weatherObj && this.props.forecastObj ? this.getWeatherElements() : this.getLoaderBall()}
            </div>
        );
    }


    /**
     * Create React components
     */
    getWeatherElements() {

        let weatherObj = JSON.parse(this.props.weatherObj);

        if (weatherObj.status === 404) {
            return (
                <div className="row" style={{textAlign: "center"}}>
                    <h3>City not found</h3>
                </div>
            );
        }

        return (
            <div className='row'>
                <CityWeather cityName={weatherObj.cityName} countryCode={weatherObj.countryCode}
                             temperature={weatherObj.temperature} weatherIcon={weatherObj.weather.icon}>

                    <CityWeatherTable windSpeed={weatherObj.wind.speed} windDirection={weatherObj.wind.direction}
                                      clouds={weatherObj.weather.description} pressure={weatherObj.pressure}
                                      humidity={weatherObj.humidity} sunrise={weatherObj.sunrise}
                                      sunset={weatherObj.sunset}
                                      coords={{lon: weatherObj.coords.longitude, lat: weatherObj.coords.latitude}}/>


                </CityWeather>


                <CityForecast>
                    {this.createDailyForecastObjects()}
                </CityForecast>
            </div>
        );
    }


    /**
     * Create React component <LoaderBall>
     */
    getLoaderBall() {
        return (
            <div className="row" style={{display: "flex", justifyContent: "center"}}>
                <LoaderBall/>
            </div>
        );
    }


    /**
     * Create React components
     */
    createDailyForecastObjects() {

        let objects = [];

        let forecasts = JSON.parse(this.props.forecastObj);

        for (let i = 0; i < forecasts.length; i++) {

            objects.push(
                <CityDailyForecast key={i} date={forecasts[i].date} forecast={forecasts[i].forecasts}/>
            );

        }

        return objects;
    }


    /**
     * Search city
     */
    searchCity(searchCityName) {

        if (searchCityName === '') {

            /*Find weather and forecast by current geo position*/
            this.props.getWeather(null);
            this.props.getForecast(null);
            return;
        }

        /*Find weather and forecast for specified city*/
        this.props.getWeather(searchCityName);
        this.props.getForecast(searchCityName);
    }
}


App.propTypes = {
    /*From store*/
    weatherObj: PropTypes.string,
    forecastObj: PropTypes.string,
    getWeather: PropTypes.func,
    getForecast: PropTypes.func,
};

export default connect((state) => {
    return {
        weatherObj: state.weatherObj,
        forecastObj: state.forecastObj
    }
}, {getWeather, getForecast})(App);