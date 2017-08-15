import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

class CounterComponent extends Component {
  static propTypes = {
    value: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func
  };
  render() {
    return (
      <div>
        <p>
          {this.props.value}
        </p>
        <Button primary onClick={this.props.incrementCounter}>
          Increment
        </Button>
        <Button onClick={this.props.decrementCounter}>Decrement</Button>
      </div>
    );
  }
}

export default CounterComponent;
