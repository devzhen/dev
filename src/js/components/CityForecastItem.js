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
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                    <p className="city-forecast-item-temp">
                        <span className="city-forecast-item-temp-day">max:&nbsp;{this.props.temperature.max}&deg;</span>
                        <span className="city-forecast-item-temp-night">min:&nbsp;{this.props.temperature.min}&deg;</span>
                        <i>{this.props.weather.description}</i>
                    </p>
                    <p className="city-forecast-item-params">
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
        max: PropTypes.number,
        min: PropTypes.number
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
        max: 0,
        min: 0
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