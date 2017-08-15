import React from "react";

export default function bundle(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentDidMount() {
      if (!this.state.Component) {
        getComponent()
          .then(module => module.default || module)
          .then(Component => {
            AsyncComponent.Component = Component;
            this.setState({ Component });
          });
      }
    }
    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return null;
    }
  };
}
