import React from "react";
import { BrowserRouter } from "react-router-dom";
// hydrate is responsible for server rendering going forward
import { hydrate as render } from "react-dom";
import App from "./app";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
}
