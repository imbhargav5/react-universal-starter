import { Route, Link, Redirect, Switch } from "react-router-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";
import bundle from "./bundle";
import Header from "./components/Header";
import Core from "./components/Core";
import Footer from "./components/Footer";
import store from "./store";
import styled, { injectGlobal } from "styled-components";

// Global styles
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  body {
    margin: 0;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Root = styled.div``;

const RootMain = styled.div`min-height: 600px;`;

// Fetch bundles
const Home = bundle(() => import("./containers/Home"));
const About = bundle(() => import("./containers/About"));
const Counter = bundle(() => import("./containers/Counter"));
const NotFoundPage = bundle(() => import("./containers/NotFound"));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <Header />
          <RootMain>
            <Core>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/counter" component={Counter} />
                <Route component={NotFoundPage} />
              </Switch>
            </Core>
          </RootMain>
          <Footer />
        </Root>
      </Provider>
    );
  }
}
