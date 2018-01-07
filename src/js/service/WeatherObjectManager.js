export default class WeatherObjectManager {

    constructor(weatherObj) {

        // Название города
        this.cityName = null;

        // Код страны
        this.countryCode = null;

        // Время рассвета
        this.sunrise = null;

        // Время заката
        this.sunset = null;

        // Координаты
        this.coords = {
            latitude: null, // широта
            longitude: null // долгота
        };

        // Погода
        this.weather = {
            description: null,   // описание погоды
            icon: null           // иконка погоды
        };

        // Температура воздуха
        this.temperature = null;

        // Давление
        this.pressure = null;

        // Влажность
        this.humidity = null;

        // Ветер
        this.wind = {
            speed: null,        // скорость
            direction: null     // напрвление
        };


        this.parseWeatherObj(weatherObj);
    }


    /**
     * Распарсить JSON объект
     * @param weatherObj {Object}
     */
    parseWeatherObj(weatherObj) {

        this.cityName = weatherObj.name;

        this.countryCode = weatherObj.sys.country;

        let time = new Date(weatherObj.sys.sunrise);
        this.sunrise = time.getHours() + ':' + time.getMinutes();
        time = new Date(weatherObj.sys.sunset);
        this.sunset = time.getHours() + ':' + time.getMinutes();

        this.coords.latitude = weatherObj.coord.lat;
        this.coords.longitude = weatherObj.coord.lon;

        this.weather.description = weatherObj.weather[0].description;
        this.weather.icon = weatherObj.weather[0].icon;

        this.temperature = weatherObj.main.temp - 273.15;
        this.pressure = weatherObj.main.pressure;
        this.humidity = weatherObj.main.humidity;

        this.wind.speed = weatherObj.wind.speed;
        let deg = weatherObj.wind.deg;
        if (deg > 0 && deg <= 90) {

            this.wind.direction = "north-east";

        } else if (deg > 90 && deg <= 180) {

            this.wind.direction = "south-east";

        } else if (deg > 180 && deg <= 270) {

            this.wind.direction = "south-west";

        } else if (deg > 270 && deg <= 360) {

            this.wind.direction = "north-west";
        }
    }
}