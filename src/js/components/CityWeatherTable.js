import React from 'react';
import PropTypes from 'prop-types';

export default class CityWeatherTable extends React.Component {

    render() {
        return (
            <table className="weather-table">
                <tbody>
                <tr>
                    <td>Wind</td>
                    <td>{this.props.windSpeed} m/s, {this.props.windDirection}</td>
                </tr>
                <tr>
                    <td>Cloudiness</td>
                    <td>{this.props.clouds}</td>
                </tr>
                <tr>
                    <td>Pressure</td>
                    <td>{this.props.pressure} hpa</td>
                </tr>
                <tr>
                    <td>Humidity</td>
                    <td>{this.props.humidity} %</td>
                </tr>
                <tr>
                    <td>Sunrise</td>
                    <td>{this.props.sunrise}</td>
                </tr>
                <tr>
                    <td>Sunset</td>
                    <td>{this.props.sunset}</td>
                </tr>
                <tr>
                    <td>Geo coords</td>
                    <td>[{this.props.coords.lon}, {this.props.coords.lat}]</td>
                </tr>
                </tbody>
            </table>
        );
    }
}


CityWeatherTable.propTypes = {
    windSpeed: PropTypes.number.isRequired,
    windDirection: PropTypes.string.isRequired,
    clouds: PropTypes.string.isRequired,
    pressure: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired,
    coords: PropTypes.shape({
        lon: PropTypes.number,
        lat: PropTypes.number
    })
};

CityWeatherTable.defaultProps = {
    windSpeed: 0,
    windDirection: "no data",
    clouds: "no data",
    pressure: 0,
    humidity: 0,
    sunrise: "0",
    sunset: "0",
    coords: {
        lon: 0,
        lat: 0
    }
};