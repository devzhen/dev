import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap.min';
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


// fetch('http://api.openweathermap.org/data/2.5/weather?id=709930&APPID=650a122361b5457a1e5493f257f434c1')
//     .then(function (response) {
//
//         if (response.status === 200) {
//             return response.json();
//         }
//
//     })
//     .then(function (json) {
//
//         console.log(json);
//     })
//     .catch(function (error) {
//         log('Request failed', error)
//     });