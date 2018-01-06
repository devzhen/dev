import {GET_WEATHER} from "../../constants";

let weatherObj = {
    "coord": {
        "lon": 34.98, "lat": 48.45
    }
    ,
    "weather":
        [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
    "base": "stations",
    "main": {
        "temp": 277.15,
        "pressure": 1020,
        "humidity": 93,
        "temp_min": 277.15,
        "temp_max": 277.15
    },
    "visibility": 10000,
    "wind": {
        "speed": 5,
        "deg": 200
    }
    ,
    "clouds": {
        "all": 90
    }
    ,
    "dt": 1515258000,
    "sys": {
        "type": 1,
        "id": 7351,
        "message": 0.0066,
        "country": "UA",
        "sunrise": 1515216653,
        "sunset": 1515247305
    }
    ,
    "id": 709930,
    "name": "Dnipropetrovsk",
    "cod": 200
};


export function getWeather(weatherObj = weatherObj, action) {

    let {type} = action;

    if (type === GET_WEATHER) {
        return weatherObj;
    }

    return null;
}