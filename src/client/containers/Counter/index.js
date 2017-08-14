import React, { Component } from "react";
import CounterComponent from "./components";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../../actions";

function mapStateToProps(state) {
  return {
    value: state.counter
  };
}
const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
