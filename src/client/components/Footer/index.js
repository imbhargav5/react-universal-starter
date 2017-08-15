import React, { Component } from "react";
import { CentredContainer as Container } from "../BlockContainer";
import styled from "styled-components";

const Text = styled.p`padding: 1em;`;
class Footer extends Component {
  render() {
    return (
      <Container>
        <Text>
          Made with ❤️ by <a href="http://twitter.com/imbhargav5">imbhargav5</a>
        </Text>
      </Container>
    );
  }
}

export default Footer;
