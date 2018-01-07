export default function (store) {

    return function (next) {

        return function (action) {

            console.log('getGeoPosition middleware');

            if ("geolocation" in navigator) {

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
                        action.payload = {
                            userCoords : coords
                        };
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