import {combineReducers} from "redux";

import {getWeather} from "./weather-reducer";

export default combineReducers({
    weatherObj: getWeather
});