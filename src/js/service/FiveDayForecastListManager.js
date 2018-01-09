export default class ForecastListManager {

    constructor(forecastObj) {

        /*Получить все прогнозы состоянием на 14:00*/
        this.forecasts = this.getForecastsAt_14_OClock(forecastObj);

    }


    /**
     * Получить все прогнозы состоянием на 14:00
     * @param forecastObj {JSON}
     * @returns {Array}
     */
    getForecastsAt_14_OClock(forecastObj) {

        let forecasts = [];

        for (let i = 0; i < forecastObj.list.length; i++) {

            let date = new Date(forecastObj.list[i].dt * 1000);
            if (date.getHours() === 14) {


                let weather = this.createForecastWeatherObject(forecastObj.list[i]);
                forecasts.push(weather);
            }

        }

        return forecasts;
    }


    /**
     * Создать объект погоды для передачи в React компонент
     * @param forecast {JSON}
     * @returns {Object}
     */
    createForecastWeatherObject(forecast) {

        return {
            date: this.convertUTCDateToRequiredFormat(forecast.dt),
            weather: {
                icon: 'img/' + forecast.weather[0].icon + '.png',
                description: forecast.weather[0].description
            },
            temperature: {
                max: forecast.main.temp_max,
                min: forecast.main.temp_min
            },
            wind: {
                speed: forecast.wind.speed
            },
            humidity: forecast.main.humidity,
            pressure: forecast.main.pressure
        };
    }


    /**
     * Конвертировать UTC дату в строку необходимого формата
     * @param date {number}
     * @returns {string}
     */
    convertUTCDateToRequiredFormat(date) {

        let d = new Date(date * 1000);

        /*День недели*/
        let day = d.getDay();
        switch (day) {
            case 0:
                day = "Sun";
                break;
            case 1:
                day = "Mon";
                break;
            case 2:
                day = "Tue";
                break;
            case 3:
                day = "Wed";
                break;
            case 4:
                day = "Thu";
                break;
            case 5:
                day = "Fri";
                break;
            case 6:
                day = "Sat";
                break;

        }

        /*Месяц*/
        let month = d.getMonth();
        switch (month) {
            case 0:
                month = "Jan";
                break;
            case 1:
                month = "Feb";
                break;
            case 2:
                month = "Mar";
                break;
            case 3:
                month = "Apr";
                break;
            case 4:
                month = "May";
                break;
            case 5:
                month = "June";
                break;
            case 6:
                month = "July";
                break;
            case 7:
                month = "Aug";
                break;
            case 8:
                month = "Sept";
                break;
            case 9:
                month = "Okt";
                break;
            case 10:
                month = "Nov";
                break;
            case 11:
                month = "Dec";
                break;
        }

        return `${day} ${d.getDate()} ${month}`;
    }


    /**
     * This method will invoke when JSON.stringify method will be called
     * @returns {JSON}
     */
    toJSON() {
        return this.forecasts;
    }
}