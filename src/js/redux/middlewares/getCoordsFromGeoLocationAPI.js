/**
 * Получить координаты ползователя с помощью GeoLocationAPI
 */
export default function (store) {

    return function (next) {

        return function (action) {

            /*Если координаты были найдены в local storage*/
            if (action.payload.userCoords) {

                next(action);

            } else if ("geolocation" in navigator) {

                let promise = new Promise((resolve, reject) => {

                    navigator.geolocation.getCurrentPosition(
                        (position) => {

                            resolve({
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude
                            });
                        },
                        (error) => {
                            reject('ERROR(' + error.code + '): ' + error.message);
                        }
                    );

                });

                promise
                    .then((coords) => {

                        /*Записать координаты в local storage*/
                        window.localStorage.setItem('coords', JSON.stringify(coords));

                        action.payload = Object.assign(
                            {},
                            action.payload,
                            {
                                userCoords: coords
                            }
                        );

                        next(action);
                    })
                    .catch((error) => {

                        console.log(error);
                        next(action);
                    });

            }


        }
    }
}