import WeatherObjectManager from "../../service/WeatherObjectManager";

// fetch('http://api.openweathermap.org/data/2.5/weather?q=Kharkiv&APPID=650a122361b5457a1e5493f257f434c1')
//     .then(function (response) {
//
//         if (response.status === 200) {
//             return response.json();
//         }
//
//     })
//     .then(function (json) {
//
//         console.log(json);
//     })
//     .catch(function (error) {
//         log('Request failed', error)
//     });


let weatherObj = {
    "coord": {
        "lon": 34.98, "lat": 48.45
    }
    ,
    "weather": [
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

export default function (store) {

    return function (next) {

        return function (action) {

            action.payload = Object.assign(
                {},
                action.payload,
                {
                    weatherObj: JSON.stringify(new WeatherObjectManager(weatherObj))
                }
            );

            next(action);
        }
    }
}