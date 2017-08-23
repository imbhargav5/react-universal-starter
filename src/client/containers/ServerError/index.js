import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Heading = styled.h2`font-size: 2em;`;
const Status = styled.h1`
  font-size: 3em;
  color: gold;
`;
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

class ServerError extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };
  render() {
    const { state = {} } = this.props.location;
    const { status = 500 } = state;
    return (
      <div>
        <Status>
          {status}
        </Status>
        <Heading>Oops!</Heading>
        <Message>
          We messed up! Our team of monkeys are on it right now!
        </Message>
        <Banner src="https://upload.wikimedia.org/wikipedia/commons/9/98/Burned_laptop_secumem_11.jpg" />
      </div>
    );
  }
}

export default ServerError;
