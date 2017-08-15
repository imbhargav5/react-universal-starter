import React, { Component } from "react";
import styled from "styled-components";
import { CentredContainer as Container } from "../BlockContainer";

const Outer = styled.div`
  background-image: url("/header.jpg");
  background-size: cover;
  background-position: center center;
  padding-bottom: 2em;
`;

const Inner = styled.div`padding-top: 150px;`;
const Heading = styled.h1`
  color: #303233;
  font-size: 3em;
`;

const Subheading = styled.h3`
  color: #515f71;
  font-weight: 100;
  opacity: 0.7;
`;

const BuiltWith = styled.h4`
  color: #46b0ed;
  font-size: 1em;
  padding-bottom: 6em;
`;

class Header extends Component {
  render() {
    return (
      <Outer>
        <Container>
          <Inner>
            <Heading> Summer </Heading>
            <Subheading>For the ever evolving front end stack</Subheading>
          </Inner>
          <BuiltWith>React 16+, React Router 4+, Webpack 3+</BuiltWith>
        </Container>
      </Outer>
    );
  }
}

export default Header;
