/**
 * Получить координаты ползователя из local storage, если есть
 */
export default function (store) {

    return function (next) {

        return function (action) {

            try {

                let {coords} = window.localStorage;

                action.payload = {
                    userCoords: JSON.parse(coords)
                }

            } finally {
                next(action);
            }


        }
    }
}