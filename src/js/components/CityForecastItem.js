import React from 'react';
import PropTypes from 'prop-types';

export default class CityForecastItem extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    {this.props.date}
                    <img src={this.props.weatherIcon} alt="weather-icon"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <p>
                        <span>{this.props.temperature.day}</span>
                        <span>{this.props.temperature.night}</span>
                        <i>{this.props.weather.description}</i>
                    </p>
                    <p>
                        {this.props.wind.speed} m/s &nbsp;
                        Humidity: {this.props.clouds} %, &nbsp;
                        {this.props.pressure} hpa
                    </p>
                </div>
            </div>
        );
    }
}


CityForecastItem.propTypes = {};

CityForecastItem.defaultProps = {};