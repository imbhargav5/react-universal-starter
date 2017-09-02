import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import bundle from "./bundle";
import Header from "./components/Header";
import Core from "./components/Core";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";
import Home from "./containers/Home";
import About from "./containers/About";
import NotFoundPage from "./containers/NotFound";
import ServerError from "./containers/ServerError";
import styled, { injectGlobal } from "styled-components";

// Global styles
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  *{
    box-sizing: border-box;
  }
  html, body{
    height : 100%;
  }
  body {
    margin: 0;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    height : 100%;
  }
  #app {
    height : 100%;
  }
`;

const Sidebar = styled.div`
  flex: 0 0 240px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledHeader = styled(Header)`
  align-content: flex-start;
`;

const StyledFooter = styled(Footer)`
  align-content: flex-end;
  text-align: left;
  padding-left: 0;
`;

const StyledCore = styled(Core)`
  flex : 1;
  height: 100%;
`;

const Root = styled.div`
  height: 100%;
  width: 100%;
`;

const RootMain = styled.div`
  display: flex;
  min-height: 600px;
  height: 100%;
`;

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

RedirectWithStatus.propTypes = {
  from: PropTypes.any,
  to: PropTypes.any
};

// A component to render a fading Route
const FadingRoute = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      <FadeIn>
        <Component {...props} />
      </FadeIn>}
  />;
FadingRoute.propTypes = {
  component: PropTypes.any
};

export default class App extends Component {
  render() {
    return (
      <Root>
        <RootMain>
          <Sidebar>
            <StyledHeader />
            <StyledFooter />
          </Sidebar>
          <StyledCore>
            <Switch>
              <FadingRoute exact path="/" component={Home} />
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
          </StyledCore>
        </RootMain>
      </Root>
    );
  }
}
