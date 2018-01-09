import React from 'react';
import PropTypes from 'prop-types';

export default class CityForecastItem extends React.Component {

    render() {
        return (
            <div className="row city-forecast-item">

                <div className="col-xs-12 city-forecast-item-date">
                    Wed Jan 10 2018
                </div>

                <div className="city-forecast-item-hour">
                    <div className="col-sm-4">
                        00:00&nbsp;<img src="img/01d.png" alt=""/>
                    </div>
                    <div className="col-sm-8">
                        <span className="city-forecast-item-temp">0.0&deg;</span>
                        &nbsp;&nbsp;<i>light snow</i>
                        <p>
                            3.12 m/s,&nbsp;clouds: 80%,&nbsp;1027.45 hpa
                        </p>
                    </div>
                </div>

                <div className="city-forecast-item-hour">
                    <div className="col-sm-4">
                        00:00&nbsp;<img src="img/01d.png" alt=""/>
                    </div>
                    <div className="col-sm-8">
                        <span className="city-forecast-item-temp">0.0&deg;</span>
                        &nbsp;&nbsp;<i>light snow</i>
                        <p>
                            3.12 m/s,&nbsp;clouds: 80%,&nbsp;1027.45 hpa
                        </p>
                    </div>
                </div>

                <div className="city-forecast-item-hour">
                    <div className="col-sm-4">
                        00:00&nbsp;<img src="img/01d.png" alt=""/>
                    </div>
                    <div className="col-sm-8">
                        <span className="city-forecast-item-temp">0.0&deg;</span>
                        &nbsp;&nbsp;<i>light snow</i>
                        <p>
                            3.12 m/s,&nbsp;clouds: 80%,&nbsp;1027.45 hpa
                        </p>
                    </div>
                </div>

                <div className="city-forecast-item-hour">
                    <div className="col-sm-4">
                        00:00&nbsp;<img src="img/01d.png" alt=""/>
                    </div>
                    <div className="col-sm-8">
                        <span className="city-forecast-item-temp">0.0&deg;</span>
                        &nbsp;&nbsp;<i>light snow</i>
                        <p>
                            3.12 m/s,&nbsp;clouds: 80%,&nbsp;1027.45 hpa
                        </p>
                    </div>
                </div>

                <div className="city-forecast-item-hour">
                    <div className="col-sm-4">
                        00:00&nbsp;<img src="img/01d.png" alt=""/>
                    </div>
                    <div className="col-sm-8">
                        <span className="city-forecast-item-temp">0.0&deg;</span>
                        &nbsp;&nbsp;<i>light snow</i>
                        <p>
                            3.12 m/s,&nbsp;clouds: 80%,&nbsp;1027.45 hpa
                        </p>
                    </div>
                </div>

                <div className="city-forecast-item-hour">
                    <div className="col-sm-4">
                        00:00&nbsp;<img src="img/01d.png" alt=""/>
                    </div>
                    <div className="col-sm-8">
                        <span className="city-forecast-item-temp">0.0&deg;</span>
                        &nbsp;&nbsp;<i>light snow</i>
                        <p>
                            3.12 m/s,&nbsp;clouds: 80%,&nbsp;1027.45 hpa
                        </p>
                    </div>
                </div>

                <div className="city-forecast-item-hour">
                    <div className="col-sm-4">
                        00:00&nbsp;<img src="img/01d.png" alt=""/>
                    </div>
                    <div className="col-sm-8">
                        <span className="city-forecast-item-temp">0.0&deg;</span>
                        &nbsp;&nbsp;<i>light snow</i>
                        <p>
                            3.12 m/s,&nbsp;clouds: 80%,&nbsp;1027.45 hpa
                        </p>
                    </div>
                </div>

                <div className="city-forecast-item-hour">
                    <div className="col-sm-4">
                        00:00&nbsp;<img src="img/01d.png" alt=""/>
                    </div>
                    <div className="col-sm-8">
                        <span className="city-forecast-item-temp">0.0&deg;</span>
                        &nbsp;&nbsp;<i>light snow</i>
                        <p>
                            3.12 m/s,&nbsp;clouds: 80%,&nbsp;1027.45 hpa
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}


CityForecastItem.propTypes = {
    date: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number
    }),
    weather: PropTypes.shape({
        icon: PropTypes.string,
        description: PropTypes.string,
    }),
    wind: PropTypes.shape({
        speed: PropTypes.number
    }),
    humidity: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired
};

CityForecastItem.defaultProps = {
    date: "0.0.0 00:00",
    temperature: {
        max: 0,
        min: 0
    },
    weather: {
        icon: "img/01n.png",
        description: "description"
    },
    wind: {
        speed: 0
    },
    humidity: 0,
    pressure: 0
};