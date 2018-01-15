import {applyMiddleware, createStore} from "redux";
import reducer from "../reducers";
import logger from "../middlewares/logger";
import getWeatherAndForecast from "../middlewares/getWeatherAndForecast";
import getCoordsFromGeoPositionAPI from "../middlewares/getCoordsFromGeoLocationAPI";
import getCoordsFromLocalStorage from "../middlewares/getCoordsFromLocallStorage";

const enhancer = applyMiddleware(getCoordsFromLocalStorage, getCoordsFromGeoPositionAPI, getWeatherAndForecast, logger);

const store = createStore(reducer, {}, enhancer);

// dev only
window.store = store;

export default store;