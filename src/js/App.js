import React from 'react';
import PropTypes from 'prop-types';
import store from "./redux/store";
import {Provider} from "react-redux";
import WeatherWidget from "./components/WeatherWidget";

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <WeatherWidget/>
            </Provider>
        );
    }
}


App.propTypes = {};

App.defaultProps = {};