import {combineReducers} from "redux";

import {getWeather} from "./weather-reducer";
import {getForecast} from "./forecast-reducer";

export default combineReducers({
    weatherObj: getWeather,
    forecastObj: getForecast
});