import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getWeather} from "../redux/action_creaters";
import {getForecast} from "../redux/action_creaters";
import SearchCity from "./SearchCity";
import CityWeather from "./CityWeather";
import CityWeatherTable from "./CityWeatherTable";
import CityForecast from "./CityForecast";
import CityForecastDayItem from "./CityForecastDayItem";
import LoaderBall from "./LoaderBall";
import {FIRST} from "../constants";

class App extends React.Component {

    constructor(props) {
        super(props);

        /*Получить текущие погодные условия*/
        this.props.getWeather();

        /*Получить прогноз на 5 дней*/
        this.props.getForecast();
    }

    render() {

        return (
            <div>
                <div className="row search-city">
                    <SearchCity/>
                </div>
                <h3 className="widget-title">Current weather and forecasts in your city</h3>
                {this.props.weatherObj && this.props.forecastObj ? this.getWeatherElements() : this.getLoaderBall()}
            </div>
        );
    }

    getWeatherElements() {

        let weatherObj = JSON.parse(this.props.weatherObj);
        let forecastObj = JSON.parse(this.props.forecastObj);

        return (
            <div className='row'>

                {/*Текущая погода в городе*/}
                <CityWeather cityName={weatherObj.cityName} countryCode={weatherObj.countryCode}
                             temperature={weatherObj.temperature} weatherIcon={weatherObj.weather.icon}>

                    <CityWeatherTable windSpeed={weatherObj.wind.speed} windDirection={weatherObj.wind.direction}
                                      clouds={weatherObj.weather.description} pressure={weatherObj.pressure}
                                      humidity={weatherObj.humidity} sunrise={weatherObj.sunrise}
                                      sunset={weatherObj.sunset}
                                      coords={{lon: weatherObj.coords.longitude, lat: weatherObj.coords.latitude}}/>


                </CityWeather>


                <CityForecast>
                    <CityForecastDayItem />
                    <CityForecastDayItem />
                    <CityForecastDayItem />
                    <CityForecastDayItem />
                    <CityForecastDayItem />
                </CityForecast>
            </div>
        );
    }

    getLoaderBall() {
        return (
            <div className="row" style={{display: "flex", justifyContent: "center"}}>
                <LoaderBall/>
            </div>
        );
    }
}


App.propTypes = {};

App.defaultProps = {};

export default connect((state) => {
    return {
        weatherObj: state.weatherObj,
        forecastObj: state.forecastObj
    }
}, {getWeather, getForecast})(App);