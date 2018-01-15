import WeatherObjectManager from "../../service/WeatherObjectManager";
import {GET_WEATHER} from "../../constants";

export default function (store) {

    return function (next) {

        return function (action) {


            if (action.type === GET_WEATHER) {


                let url = `https://api.openweathermap.org/data/2.5/weather?APPID=650a122361b5457a1e5493f257f434c1&units=metric`;

                /*Если поиск погоды по географическим координатам*/
                if (action.payload.cityName === null) {

                    let {latitude, longitude} = action.payload.userCoords;

                    url += `&lat=${latitude}&lon=${longitude}`;

                } else {

                    let {cityName} = action.payload;

                    url += `&q=${cityName}`;
                }

                fetch(url)
                    .then(function (response) {

                        return response.json();
                    })
                    .then(function (json) {

                        action.payload = Object.assign(
                            {},
                            action.payload,
                            {
                                weatherObj: JSON.stringify(new WeatherObjectManager(json))
                            }
                        );

                        next(action);
                    })
                    .catch(function (error) {
                        console.log('Request failed', error);

                        next(action);
                    });

            } else {
                next(action);
            }

        }
    }
}