import path from "path";
import fs from "fs";
import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import { StaticRouter as Router } from "react-router";
import { matchPath } from "react-router-dom";
import { Provider } from "react-redux";
import { ServerStyleSheet } from "styled-components";
import App, { loadData } from "../client/app";
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

if (isDevelopment) {
  const webpackConfig = require("../../webpack.config.babel.js").default;
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, {
      logLevel: "warn",
      publicPath: webpackConfig.output.publicPath,
      historyApiFallback: true
    })
  );
  app.use(
    webpackHotMiddleware(compiler, {
      log: console.log,
      heartbeat: 4 * 1000
    })
  );
}

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
  // setting counter initial value to 5
  const store = createStore(rootReducer, {
    counter: 5
  });
  const promises = [];
  loadData.some(route => {
    // use `matchPath` here
    const match = matchPath(req.path, route);
    if (match) {
      if (route.loadData) {
        promises.push(route.loadData(store, match, req.url));
      }
    }
    return match;
  });
  Promise.all(promises).then(() => {
    const sheet = new ServerStyleSheet();
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
    `🌎  Listening on port ${port} in ${process.env.NODE_ENV} mode on Node ${
      process.version
    }.`
  );
  if (isDevelopment) {
    console.info(`Open http://localhost:8888`);
  }
});
