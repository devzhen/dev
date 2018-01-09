import React from 'react';
import PropTypes from 'prop-types';

export default class CityHourlyForecast extends React.Component {

    render() {
        return (

            <div className="city-forecast-item-hour">
                <div className="col-sm-4">
                    {this.props.time}&nbsp;<img src={this.props.weather.icon} alt=""/>
                </div>
                <div className="col-sm-8">
                    <span className="city-forecast-item-temp">{this.props.temperature}&deg;</span>
                    &nbsp;&nbsp;<i>{this.props.weather.description}</i>
                    <p>
                        {this.props.wind.speed} m/s,&nbsp;clouds: {this.props.clouds}%,&nbsp;{this.props.pressure} hpa
                    </p>
                </div>
            </div>

        );
    }
}


CityHourlyForecast.propTypes = {
    time: PropTypes.string.isRequired,
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
};

CityHourlyForecast.defaultProps = {
    time: "00:00",
    weather: {
        description: "description",
        icon: "img/01d.png"
    },
    temperature: 0,
    wind: {
        speed: 0
    },
    clouds: 0,
    pressure: 0
};