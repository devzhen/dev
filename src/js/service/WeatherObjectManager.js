export default class WeatherObjectManager {

    constructor(weatherObj) {

        this.weatherObj = {
            status: null,
            cityName: null,
            countryCode: null,
            sunrise: null,
            sunset: null,
            coords: {
                latitude: null,
                longitude: null
            },
            weather: {
                description: null,
                icon: null
            },
            temperature: null,
            pressure: null,
            humidity: null,
            wind: {
                speed: null,
                direction: null
            }
        };

        this.parseWeatherObj(weatherObj);
    }


    /**
     * Распарсить JSON объект
     * @param weatherObj {Object}
     */
    parseWeatherObj(weatherObj) {

        /*Если погода для указанного города не найдена*/
        if (weatherObj.cod === "404") {
            this.weatherObj = {
                status: 404
            };
            return;
        }

        this.weatherObj.status = weatherObj.cod;
        this.weatherObj.cityName = weatherObj.name;

        this.weatherObj.countryCode = weatherObj.sys.country;

        this.weatherObj.sunrise = this.convertDateToTime(weatherObj.sys.sunrise);
        this.weatherObj.sunset = this.convertDateToTime(weatherObj.sys.sunset);

        this.weatherObj.coords.latitude = weatherObj.coord.lat;
        this.weatherObj.coords.longitude = weatherObj.coord.lon;

        this.weatherObj.weather.description = weatherObj.weather[0].description;
        this.weatherObj.weather.icon = weatherObj.weather[0].icon;

        this.weatherObj.temperature = weatherObj.main.temp;
        this.weatherObj.pressure = weatherObj.main.pressure;
        this.weatherObj.humidity = weatherObj.main.humidity;

        this.weatherObj.wind.speed = weatherObj.wind.speed;
        let deg = weatherObj.wind.deg;

        if (deg === 0) {

            this.weatherObj.wind.direction = "north";

        } else if (deg === 90) {

            this.weatherObj.wind.direction = "east";

        } else if (deg === 180) {

            this.weatherObj.wind.direction = "south";

        } else if (deg === 270) {

            this.weatherObj.wind.direction = "west";

        } else if (deg > 0 && deg < 90) {

            this.weatherObj.wind.direction = "north-east";

        } else if (deg > 90 && deg < 180) {

            this.weatherObj.wind.direction = "south-east";

        } else if (deg > 180 && deg < 270) {

            this.weatherObj.wind.direction = "south-west";

        } else if (deg > 270 && deg < 360) {

            this.weatherObj.wind.direction = "north-west";
        }
    }


    convertDateToTime(timestamp) {
        let date = new Date(timestamp * 1000);
        let hour = date.getHours();
        if (hour < 10) {
            hour = "0" + hour;
        }

        let min = date.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }

        return hour + ":" + min;
    }


    /**
     * This method will invoke when JSON.stringify method will be called
     * @returns {Object}
     */
    toJSON() {
        return this.weatherObj;
    }
}