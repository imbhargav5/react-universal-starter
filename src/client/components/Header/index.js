import React, { Component } from "react";
import styled from "styled-components";
import { CentredContainer as Container } from "../BlockContainer";
import Navbar from "../Navbar";

const Outer = styled.div`
  background-color: #fff;
  padding-bottom: 1em;
`;

const Inner = styled.div`text-align: left;`;
const Box = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const Heading = styled.h1`
  color: #303233;
  font-size: 3em;
  padding: 0;
  margin: 0;
  line-height: 1;
`;

const Subheading = styled.h3`
  color: #515f71;
  font-weight: 100;
  opacity: 0.7;
  padding: 0;
  padding-bottom: 4px;
  margin: 0;
  line-height: 1;
`;

const BuiltWith = styled.p`
  color: #46b0ed;
  font-size: 1em;
  text-align: left;
  margin-bottom: 0;
`;

class Header extends Component {
  render() {
    return (
      <Outer>
        <Container>
          <Box>
            <Inner>
              <Heading> Summer </Heading>
              <Subheading>For the ever evolving front end stack</Subheading>
            </Inner>
            <Navbar />
          </Box>
          <BuiltWith>React 16+, React Router 4+, Webpack 3+</BuiltWith>
        </Container>
      </Outer>
    );
  }
}

export default Header;
