import React from 'react';
import PropTypes from 'prop-types';
import CityWeatherTable from "./CityWeatherTable";


export default class CityWeather extends React.Component {

    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">

                <h2>Weather in {this.props.cityName}, {this.props.countryCode}</h2>
                <h3>
                    <img src={"img/" + this.props.weatherIcon + ".png"} alt="Img"/>
                    {this.props.temperature} °C
                </h3>

                {this.props.children}

            </div>
        );
    }
}


CityWeather.propTypes = {
    cityName: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
    weatherIcon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired
};

CityWeather.defaultProps = {
    cityName: "No name",
    countryCode: "No country",
    weatherIcon: "01n",
    temperature: 0
};