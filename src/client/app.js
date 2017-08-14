import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from "react";

import Home from "./modules/Home";
import About from "./modules/About";
import Todos from "./modules/Todos";

export default class App extends Component {
  render() {
    return [
      <h1> Hi There </h1>,
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/todos">Topics</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/todos" component={Todos} />
        </div>
      </Router>
    ];
  }
}
