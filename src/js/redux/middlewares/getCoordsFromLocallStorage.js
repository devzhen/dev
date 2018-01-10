/**
 * Получить координаты ползователя из local storage, если есть
 */
export default function (store) {

    return function (next) {

        return function (action) {

            // If the local storage contains coords
            let {coords} = window.localStorage;
            if(coords) {
                action.payload.userCoords = (JSON.parse(coords));
            }

            // give control to the next middleware
            next(action);


        }
    }
}