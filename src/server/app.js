import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import { StaticRouter as Router } from "react-router";
import { Provider } from "react-redux";
import { ServerStyleSheet } from "styled-components";
import App from "../client/app";
import createStore from "../client/store/createStore";
import rootReducer from "../client/reducers";

// Environment variables
const isDevelopment = process.env.NODE_ENV === "development";

// Create app
const app = express();

//set port
const port = process.env.PORT || 8888;

// set statics
const staticPath = path.join(__dirname, "../../", "static");
app.use(express.static(staticPath));

// set view engine
app.set("view engine", "pug");
// set views directory
if (isDevelopment) {
  app.set("views", path.join(__dirname, "templates"));
} else {
  app.set("views", path.join(__dirname, "../../", "static/templates"));
}

//Root html template
let indexTemplate = "index.dev.pug";
if (!isDevelopment) {
  indexTemplate = "index";
}

const context = {};

function render(req, res, err) {
  const sheet = new ServerStyleSheet();
  // setting counter initial value to 5
  const store = createStore(rootReducer, {
    counter: 5
  });
  let html = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <Router location={req.url} context={context}>
          <App />
        </Router>
      </Provider>
    )
  );
  html += `
    <script>
      var __PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
    </script>
  `;
  const styleTags = sheet.getStyleTags();
  // This renders html as well as a concatenated string list of style tags
  res.render(indexTemplate, {
    content: html,
    styles: styleTags
  });
}

// add routes
app.get("/throw", (req, res, next) => {
  next(new Error("we messed up"));
});

app.get("*", (req, res) => {
  render(req, res);
});

if (isDevelopment) {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.redirect("/500");
  });
}

// start app
app.listen(port, () => {
  console.info(
    `🌎  Listening on port ${port} in ${process.env
      .NODE_ENV} mode on Node ${process.version}.`
  );
  if (isDevelopment) {
    console.info(`Open http://localhost:8888`);
  }
});
