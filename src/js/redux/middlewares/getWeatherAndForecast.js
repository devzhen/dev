import {GET_WEATHER_AND_FORECAST} from "../../constants";
import WeatherObjectManager from "../../service/WeatherObjectManager";
import ForecastListManager from "../../service/FiveDayForecastListManager";

export default function (store) {

    return function (next) {

        return function (action) {

            if (action.type === GET_WEATHER_AND_FORECAST) {

                let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?APPID=650a122361b5457a1e5493f257f434c1&units=metric`;
                let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?APPID=650a122361b5457a1e5493f257f434c1&units=metric`;

                if (action.payload.cityName === null) {

                    let {latitude, longitude} = action.payload.userCoords;

                    weatherUrl += `&lat=${latitude}&lon=${longitude}`;
                    forecastUrl += `&lat=${latitude}&lon=${longitude}`;
                } else {

                    let {cityName} = action.payload;

                    weatherUrl += `&q=${cityName}`;
                    forecastUrl += `&q=${cityName}`;
                }


                let weather = fetch(weatherUrl)
                    .then(function (response) {

                        return response.json();
                    });

                let forecast = fetch(forecastUrl)
                    .then(function (response) {

                        return response.json();
                    });


                Promise.all([weather, forecast])
                    .then(function (json) {

                        action.payload = Object.assign(
                            {},
                            action.payload,
                            {
                                weatherObj: JSON.stringify(new WeatherObjectManager(json[0])),
                                forecastObj: JSON.stringify(new ForecastListManager(json[1])),
                            }
                        );

                        next(action);
                    })
                    .catch((error) => {

                        console.log('Request failed', error);

                        next(action);
                    });
            }
        }
    }
}