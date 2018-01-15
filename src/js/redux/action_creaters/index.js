import {GET_WEATHER_AND_FORECAST} from "../../constants";

export function getWeatherAndForecast(cityName) {
    return {
        type: GET_WEATHER_AND_FORECAST,
        payload: {
            cityName: cityName
        }
    }
}