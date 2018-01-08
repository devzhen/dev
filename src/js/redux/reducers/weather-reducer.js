import {GET_WEATHER} from "../../constants";

let weatherObj = {
    "coords": {
        "longitude": 35.87,
        "latitude": 48.53
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 273.15,
        "pressure": 1028,
        "humidity": 87,
        "temp_min": 273.15,
        "temp_max": 273.15
    },
    "visibility": 10000,
    "wind": {
        "speed": 3,
        "deg": 310
    },
    "clouds": {
        "all": 0
    },
    "dt": 1515438000,
    "sys": {
        "type": 1,
        "id": 7351,
        "message": 0.0046,
        "country": "UA",
        "sunrise": 1515389216,
        "sunset": 1515420023
    },
    "id": 697889,
    "name": "Pavlohrad",
    "cod": 200
};

export function getWeather(obj = null, action) {

    let {type} = action;

    if (type === GET_WEATHER) {
        // return action.payload.weatherObj;
        return JSON.stringify(weatherObj);
    }

    return obj;
}