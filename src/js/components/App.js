import React from 'react';
import PropTypes from 'prop-types';
import SearchCity from "./SearchCity";
import CityWeather from "./CityWeather";
import CityForecast from "./CityForecast";

export default class App extends React.Component {

    render() {
        return (
            <div>
                <div className="row search-city">
                    <SearchCity/>
                </div>
                <h3 className="widget-title">Current weather and forecasts in your city</h3>
                <div className='row'>
                    <CityWeather/>
                    <CityForecast/>
                </div>
            </div>
        );
    }
}


App.propTypes = {};

App.defaultProps = {};