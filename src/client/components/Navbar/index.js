import React, { Component } from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: center;
`;

const NavItem = styled.div`
  padding: 10px;
  margin-right: 5px;
  font-size: 1.5em;
  ${StyledLink} {
    font-weight: bold;
    color: ${props => (props.active ? "#46b0ed" : "#515f71")};
    transition: color 1s ease;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const NavLink = ({ to, ...rest }) =>
  <Route
    path={to}
    children={({ match }) => {
      console.log(match);
      return (
        <NavItem active={match && match.isExact}>
          <StyledLink to={to} {...rest} />
        </NavItem>
      );
    }}
  />;

class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/500">500</NavLink>
          <NavLink to="/401">401</NavLink>
          <NavLink to="/some-route-which-does-not-exist">Not Found</NavLink>
        </Nav>
      </div>
    );
  }
}

export default Navbar;
