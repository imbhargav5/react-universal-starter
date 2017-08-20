import path from "path";
import fs from "fs";
import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import { StaticRouter as Router } from "react-router";
import App from "../client/app";
import { ServerStyleSheet } from "styled-components";

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

// add routes
app.get("*", (req, res) => {
  const context = {};
  const sheet = new ServerStyleSheet();
  const html = renderToString(
    sheet.collectStyles(
      <Router location={req.url} context={context}>
        <App />
      </Router>
    )
  );
  const styleTags = sheet.getStyleTags();
  // This renders html as well as a concatenated string list of style tags
  res.render(indexTemplate, {
    content: html,
    styles: styleTags
  });
});

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
