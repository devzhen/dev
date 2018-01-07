import {GET_WEATHER} from "../../constants";


export function getWeather(obj = null, action) {

    let {type} = action;

    if (type === GET_WEATHER) {

        console.log(action.payload.weatherObj);

        return action.payload.weatherObj;
    }

    return obj;
}