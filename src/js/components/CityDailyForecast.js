import React from 'react';
import PropTypes from 'prop-types';
import CityHourlyForecast from "./CityHourlyForecast";

export default class CityDailyForecast extends React.Component {

    render() {
        return (
            <div className="row city-forecast-item">

                <div className="col-xs-12 city-forecast-item-date">
                    <strong>{this.props.date}</strong>
                </div>

                {this.createCityForecastHourObjects()}

            </div>
        );
    }

    createCityForecastHourObjects() {
        let forecast = this.props.forecast;
        let forecastObj = [];

        for (let i = 0; i < forecast.length; i++) {

            forecastObj.push(
                <CityHourlyForecast key={i}
                                    time={forecast[i].time}
                                    weather={forecast[i].weather}
                                    temperature={forecast[i].temperature}
                                    wind={forecast[i].wind}
                                    clouds={forecast[i].clouds}
                                    pressure={forecast[i].pressure}/>
            );
        }

        return forecastObj;
    }
}


CityDailyForecast.propTypes = {

    date: PropTypes.string,
    forecast: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        weather: PropTypes.shape({
            description: PropTypes.string,
            icon: PropTypes.string
        }),
        temperature: PropTypes.number.isRequired,
        wind: PropTypes.shape({
            speed: PropTypes.number
        }),
        clouds: PropTypes.number.isRequired,
        pressure: PropTypes.number.isRequired
    }))

};

CityDailyForecast.defaultProps = {
    date: "No data",
    forecast: []
};