import { Route, Link, Redirect, Switch } from "react-router-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";
import Bundle from "./bundle";

// components load their module for initial visit
const Home = props =>
  <Bundle load={() => import("./containers/Home/index.js")}>
    {Home => <Home {...props} />}
  </Bundle>;
const About = props =>
  <Bundle load={() => import("./containers/About/index.js")}>
    {About => <About {...props} />}
  </Bundle>;
const Counter = props =>
  <Bundle load={() => import("./containers/Counter/index.js")}>
    {Counter => <Counter {...props} />}
  </Bundle>;

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
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Switch>
            <Redirect from={"/aboutus"} to="about" />
            <Route path="/about" component={About} />
          </Switch>
          <Route path="/counter" component={Counter} />
        </div>
      </Provider>
    );
  }
}
