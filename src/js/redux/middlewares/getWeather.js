import WeatherObjectManager from "../../service/WeatherObjectManager";

export default function (store) {

    return function (next) {

        return function (action) {

            let {latitude, longitude} = action.payload.userCoords;

            let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=650a122361b5457a1e5493f257f434c1`;

            fetch(url)
                .then(function (response) {

                    if (response.status === 200) {
                        return response.json();
                    }

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
        }
    }
}