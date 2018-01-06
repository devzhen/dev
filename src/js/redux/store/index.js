import {createStore, applyMiddleware} from "redux";
import reducer from "../reducers";
import logger from "../middlewares/logger";
import getWeather from "../middlewares/getWeather";

const enhancer = applyMiddleware(getWeather, logger);

const store = createStore(reducer, {}, enhancer);

// dev only
window.store = store;

export default store;