import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getWeather} from "../redux/action_creaters";
import SearchCity from "./SearchCity";
import CityWeather from "./CityWeather";
import CityForecast from "./CityForecast";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.props.getWeather();
    }

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

export default connect((state) => {
    return {weatherObj: state.weatherObj}
}, {getWeather})(App);