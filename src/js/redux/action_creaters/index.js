import {GET_FORECAST, GET_WEATHER} from "../../constants";

export function getWeather(cityName) {

    return {
        type: GET_WEATHER,
        payload: {
            cityName: cityName
        }
    }
}

export function getForecast(cityName) {
    return {
        type: GET_FORECAST,
        payload: {
            cityName: cityName
        }
    }
}