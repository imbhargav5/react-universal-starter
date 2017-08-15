import { Route, Link, Redirect, Switch } from "react-router-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";
import bundle from "./bundle";

const Home = bundle(() => import("./containers/Home"));
const About = bundle(() => import("./containers/About"));
const Counter = bundle(() => import("./containers/Counter"));

import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/counter" component={Counter} />
          </Switch>
        </div>
      </Provider>
    );
  }
}
