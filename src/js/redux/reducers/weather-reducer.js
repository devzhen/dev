import {GET_WEATHER_AND_FORECAST} from "../../constants";

export function getWeather(obj = null, action) {

    let {type} = action;

    if (type === GET_WEATHER_AND_FORECAST) {
        return action.payload.weatherObj;
    }

    return obj;
}