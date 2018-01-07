import {createStore, applyMiddleware} from "redux";
import reducer from "../reducers";
import logger from "../middlewares/logger";
import getWeather from "../middlewares/getWeather";
import getGeoPosition from "../middlewares/getGeoPosition";

const enhancer = applyMiddleware(getGeoPosition, getWeather, logger);

const store = createStore(reducer, {}, enhancer);

// dev only
window.store = store;

export default store;