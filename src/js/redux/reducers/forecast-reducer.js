import {GET_FORECAST} from "../../constants";

export function getForecast(obj = null, action) {

    let {type} = action;

    if (type === GET_FORECAST) {
        return action.payload.forecastObj;
        // return JSON.stringify({test:"test"});
    }

    return obj;
}