import createStore from "./createStore";
import rootReducer from "../reducers";

const preloadedState = window.__PRELOADED_STATE__ || {};
export default createStore(rootReducer, preloadedState);
