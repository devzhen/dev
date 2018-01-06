import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap.min';


import ReactDOM from 'react-dom';
import React from "react";
import App from "./components/WeatherWidget";

ReactDOM.render(<App/>, document.getElementById('component'));


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

let response = {
    "coord": {
        "lon": 34.98, "lat": 48.45
    }
    ,
    "weather":
        [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
    "base": "stations",
    "main": {
        "temp": 277.15,
        "pressure": 1020,
        "humidity": 93,
        "temp_min": 277.15,
        "temp_max": 277.15
    },
    "visibility": 10000,
    "wind": {
        "speed": 5,
        "deg": 200
    }
    ,
    "clouds": {
        "all": 90
    }
    ,
    "dt": 1515258000,
    "sys": {
        "type": 1,
        "id": 7351,
        "message": 0.0066,
        "country": "UA",
        "sunrise": 1515216653,
        "sunset": 1515247305
    }
    ,
    "id": 709930,
    "name": "Dnipropetrovsk",
    "cod": 200
};
