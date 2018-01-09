export default class ForecastListManager {

    constructor(forecastJson) {

        /*Получить все прогнозы состоянием на 14:00*/
        let sortedForecasts = this.sortForecastJsonByDate(forecastJson);

        this.forecasts = this.createCityForecastObject(sortedForecasts);
    }

    /**
     * Отсортировать прогнозы по дням
     * @param forecastJson {JSON}
     * @returns {Array}
     */
    sortForecastJsonByDate(forecastJson) {

        let sortedForecast = [];
        let dayForecast = [];
        let dayNumber = null;

        for (let i = 0; i < forecastJson.list.length; i++) {

            let day = new Date(forecastJson.list[i].dt * 1000).getDay();

            if (dayNumber === null) {

                dayForecast.push(forecastJson.list[i]);


            } else if (dayNumber === day) {

                dayForecast.push(forecastJson.list[i]);

            } else {

                sortedForecast.push(dayForecast);
                dayForecast = [];
                dayForecast.push(forecastJson.list[i]);
            }

            if (i === forecastJson.list.length - 1) {
                sortedForecast.push(dayForecast);
            }

            dayNumber = day;
        }

        return sortedForecast;
    }


    /**
     * Создать массив объектов погоды для передачи в React компонент
     * @param sortedForecasts {JSON}
     * @returns {Array}
     */
    createCityForecastObject(sortedForecasts) {

        let forecasts = [];
        let dailyForecast = {
            date: null,
            forecasts: []
        };

        for (let i = 0; i < sortedForecasts.length; i++) {

            for (let j = 0; j < sortedForecasts[i].length; j++) {

                let hourlyForecast = this.createCityForecastHourObject(sortedForecasts[i][j]);

                dailyForecast.forecasts.push(hourlyForecast);

                if (!dailyForecast.date) {
                    dailyForecast.date = this.convertUTCDateToRequiredFormat(sortedForecasts[i][j].dt);
                }

            }

            forecasts.push(Object.assign({}, dailyForecast));
            dailyForecast = {
                date: null,
                forecasts: []
            };

        }

        return forecasts;
    }


    /**
     * Создать объект погоды для передачи в React компонент
     * @param forecast {JSON}
     * @returns {Object}
     */
    createCityForecastHourObject(forecast) {

        return {
            time: this.convertUTCDateToTime(forecast.dt),
            weather: {
                icon: 'img/' + forecast.weather[0].icon + '.png',
                description: forecast.weather[0].description
            },
            temperature: forecast.main.temp,
            wind: {
                speed: forecast.wind.speed
            },
            clouds: forecast.clouds.all,
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

        return `${day} ${month} ${d.getDate()} ${d.getFullYear()}`;
    }


    /**
     * Конвертировать UTC дату в строку времени
     * @param date {number}
     * @returns {string}
     */
    convertUTCDateToTime(date) {
        let d = new Date(date * 1000);

        let hour = d.getHours();
        if (hour < 10) {
            hour = "0" + hour;
        }

        let min = d.getMinutes();
        if (min < 10) {
            min = "0" + min
        }

        return `${hour}:${min}`;
    }


    /**
     * This method will invoke when JSON.stringify method will be called
     * @returns {JSON}
     */
    toJSON() {
        return this.forecasts;
    }
};