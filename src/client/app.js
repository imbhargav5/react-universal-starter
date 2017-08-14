import { Route, Link } from "react-router-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";
import asyncComponent from "./async-component";

const Home = asyncComponent(() => import("./containers/Home"));
const About = asyncComponent(() => import("./containers/About"));
const Counter = asyncComponent(() => import("./containers/Counter"));
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
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/counter" component={Counter} />
        </div>
      </Provider>
    );
  }
}
