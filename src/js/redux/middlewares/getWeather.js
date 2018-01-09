import WeatherObjectManager from "../../service/WeatherObjectManager";
import {GET_WEATHER} from "../../constants";

export default function (store) {

    return function (next) {

        return function (action) {

            if (action.type === GET_WEATHER) {

                let {latitude, longitude} = action.payload.userCoords;

                let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=650a122361b5457a1e5493f257f434c1`;

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