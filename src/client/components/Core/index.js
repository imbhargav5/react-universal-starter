import React, { Component } from "react";
import { CentredContainer as Container } from "../BlockContainer";
import styled from "styled-components";

const Inner = styled.div`padding: 1em 0em;`;
const Outer = styled.div`
  background-color: #f9f9f9;
  padding: 1em 0;
  min-height: inherit;
`;

class Core extends Component {
  render() {
    return (
      <Outer>
        <Container>
          <Inner>
            {this.props.children}
          </Inner>
        </Container>
      </Outer>
    );
  }
}
const StyledCore = styled(Core)``;
export default StyledCore;
