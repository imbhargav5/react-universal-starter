import { Route, Link, Redirect, Switch } from "react-router-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";
import bundle from "./bundle";
import Header from "./components/Header";
import Core from "./components/Core";
import Footer from "./components/Footer";
import store from "./store";
import Home from "./containers/Home";
import About from "./containers/About";
import NotFoundPage from "./containers/NotFound";
import ServerError from "./containers/ServerError";
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
// Dynamic imports
// These components don't have server rendering at the moment
// TO-DO : Add server rendering if possible
const Counter = bundle(() => import("./containers/Counter"));

// A component to Redirect from a status code
const RedirectWithStatus = ({ from, to }) =>
  <Route
    render={({ staticContext }) => {
      // there is no `staticContext` on the client, so
      // we need to guard against that here
      if (staticContext) staticContext.status = to.state.status;
      return <Redirect from={from} to={to} />;
    }}
  />;

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
                <RedirectWithStatus
                  from="/500"
                  to={{
                    pathname: "error",
                    state: {
                      status: 500
                    }
                  }}
                />
                <RedirectWithStatus
                  from="/401"
                  to={{
                    pathname: "error",
                    state: {
                      status: 401
                    }
                  }}
                />
                <Route exact path="/error" component={ServerError} />
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
