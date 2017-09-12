import { applyMiddleware, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";

export default function(rootReducer, preloadedState) {
  const middlewares = [ReduxThunk];
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middlewares),
      // redux browser extension
      typeof window === "object" &&
      typeof window.devToolsExtension !== "undefined"
        ? window.devToolsExtension()
        : f => f
    )
  );
  return store;
}
