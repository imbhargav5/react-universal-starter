import React, { Component } from "react";
import PropTypes from "prop-types";

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
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
      </div>
    );
  }
}

export default CounterComponent;
