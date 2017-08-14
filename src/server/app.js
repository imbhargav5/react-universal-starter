import path from "path";
import fs from "fs";
import React from "react";
import express from "express";

// Environment variables
const isDevelopment = process.env.NODE_ENV === "development";

// Create app
const app = express();

//set port
const port = process.env.PORT || 8888;

// set statics
const staticPath = path.join(__dirname, "../../", "static");
app.use(express.static(staticPath));

//Root html template
let indexFile = path.join(__dirname, "templates/index.dev.html");
if (!isDevelopment) {
  indexFile = path.join(__dirname, "templates/index.html");
}

// add routes

app.get("*", (req, res) => {
  res.sendFile(indexFile);
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
