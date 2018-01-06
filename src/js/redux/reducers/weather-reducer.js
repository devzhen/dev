import {GET_WEATHER} from "../../constants";


export function getWeather(obj = null, action) {

    let {type} = action;

    if (type === GET_WEATHER) {
        return action.payload.weatherObj;
    }

    return obj;
}