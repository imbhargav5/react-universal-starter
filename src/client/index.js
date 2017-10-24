import React from "react";
import { BrowserRouter } from "react-router-dom";
// hydrate is responsible for server rendering going forward
import { hydrate as render } from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);

registerServiceWorker();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
}
