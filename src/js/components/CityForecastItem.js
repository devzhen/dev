import React from 'react';
import PropTypes from 'prop-types';

export default class CityForecastItem extends React.Component {

    render() {
        return (
            <div className="row city-forecast-item">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    {this.props.date}
                    <img src={this.props.weather.icon} alt="weather-icon"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <p className="city-forecast-item-temp">
                        <span className="city-forecast-item-temp-day">{this.props.temperature.day}&deg;</span>
                        <span className="city-forecast-item-temp-night">{this.props.temperature.night}&deg;</span>
                        <i>{this.props.weather.description}</i>
                    </p>
                    <p>
                        {this.props.wind.speed} m/s &nbsp;
                        Humidity: {this.props.humidity} %, &nbsp;
                        {this.props.pressure} hpa
                    </p>
                </div>
            </div>
        );
    }
}


CityForecastItem.propTypes = {
    date: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
        day: PropTypes.number,
        night: PropTypes.number
    }),
    weather: PropTypes.shape({
        icon: PropTypes.string,
        description: PropTypes.string,
    }),
    wind: PropTypes.shape({
        speed: PropTypes.number
    }),
    humidity: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired
};

CityForecastItem.defaultProps = {
    date: "0.0.0 00:00",
    temperature: {
        day: 0,
        night: 0
    },
    weather: {
        icon: "img/01n.png",
        description: "description"
    },
    wind: {
        speed: 0
    },
    humidity: 0,
    pressure: 0
};