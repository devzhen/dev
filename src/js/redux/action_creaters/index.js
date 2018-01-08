import {GET_WEATHER, GET_FORECAST} from "../../constants";

export function getWeather() {
    return {
        type: GET_WEATHER
    }
}

export function getForecast() {
    return {
        type: GET_FORECAST
}
}