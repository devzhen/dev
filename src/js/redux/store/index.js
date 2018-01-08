import {createStore, applyMiddleware} from "redux";
import reducer from "../reducers";
import logger from "../middlewares/logger";
import getWeather from "../middlewares/getWeather";
import getForecast from "../middlewares/getForecast";
import getCoordsFromGeoPositionAPI from "../middlewares/getCoordsFromGeoLocationAPI";
import getCoordsFromLocalStorage from "../middlewares/getCoordsFromLocallStorage";

const enhancer = applyMiddleware(getCoordsFromLocalStorage, getCoordsFromGeoPositionAPI, /*getWeather, getForecast,*/ logger);

const store = createStore(reducer, {}, enhancer);

// dev only
window.store = store;

export default store;