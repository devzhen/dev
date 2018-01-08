import {GET_FORECAST} from "../../constants";

export function getWeather(obj = null, action) {

    let {type} = action;

    if (type === GET_FORECAST) {
        return action.payload.forecastObj;
    }

    return obj;
}