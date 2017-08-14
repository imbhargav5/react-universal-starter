import { applyMiddleware, compose, createStore } from "redux";

export default function(rootReducer, preloadedState) {
  const middlewares = [];
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
