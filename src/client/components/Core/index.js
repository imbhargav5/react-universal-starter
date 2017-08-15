import React, { Component } from "react";
import { CentredContainer as Container } from "../BlockContainer";
import styled from "styled-components";
import Navbar from "../Navbar";

const Inner = styled.div`padding: 6em 0em 3em;`;
const Outer = styled.div`
  background-color: #f1f0f9;
  padding-top: 1em;
  padding-bottom: 3em;
`;

class Core extends Component {
  render() {
    return (
      <Outer>
        <Container>
          <Navbar />
          <Inner>
            {this.props.children}
          </Inner>
        </Container>
      </Outer>
    );
  }
}

export default Core;
