import React, { Component } from "react";
import styled from "styled-components";

const Heading = styled.h1`font-size: 3em;`;
const Message = styled.p`
  font-style: italic;
  max-width: 80%;
  margin: 1em auto;
`;

const Banner = styled.img`
  height: auto;
  width: 300px;
  max-width: 80%;
  margin: auto;
`;

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <Heading>Oops!</Heading>
        <Message>This is not the page you are looking for </Message>
        <Banner src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Bundesstra%C3%9Fe_404_number.svg/2000px-Bundesstra%C3%9Fe_404_number.svg.png" />
      </div>
    );
  }
}

export default NotFoundPage;
