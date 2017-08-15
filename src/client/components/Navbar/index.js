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
  font-size: 2em;
  ${StyledLink} {
    font-weight: bold;
    color: #515f71;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <StyledLink to="/">Home</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/about">About</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/counter">Counter</StyledLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Navbar;
