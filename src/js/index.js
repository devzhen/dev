import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap.min';

import "../css/city-forecast.css";
import "../css/city-weather.css";
import "../css/common.css";
import "../css/loader-ball.css";
import "../css/search-city.css";
import "../css/weather-table.css";

import store from "./redux/store";
import {Provider} from "react-redux";

import ReactDOM from 'react-dom';
import React from "react";
import App from "./components/App";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('component'));