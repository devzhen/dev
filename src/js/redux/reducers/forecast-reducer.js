import {GET_WEATHER_AND_FORECAST} from "../../constants";

export function getForecast(obj = null, action) {

    let {type} = action;

    if (type === GET_WEATHER_AND_FORECAST) {
        return action.payload.forecastObj;
    }

    return obj;
}