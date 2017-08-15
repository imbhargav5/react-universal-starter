import React, { Component } from "react";
import styled from "styled-components";

const Heading = styled.h1`font-size: 3em;`;
const Subheading = styled.h2`
  font-size: 2em;
  padding: 1em 0;
`;
class Home extends Component {
  render() {
    return (
      <div>
        <Heading>React Universal Starter</Heading>
        <Subheading>Made possible with these awesome projects</Subheading>
        <div>
          <img
            alt="Styled components"
            width="auto"
            height="90"
            src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png"
          />{" "}
          <img
            alt="React"
            width="auto"
            height="90"
            src="https://facebook.github.io/react/img/logo.svg"
          />{" "}
          <img
            width="auto"
            height="90"
            alt="Redux"
            src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png"
          />{" "}
          <img
            src="https://webpack.js.org/6bc5d8cf78d442a984e70195db059b69.svg"
            alt="webpack"
            width="auto"
            height="90"
          />{" "}
          <img
            src="https://cms-assets.tutsplus.com/uploads/users/16/posts/24511/preview_image/babel-1.png"
            width="auto"
            height="90"
            alt="babel"
          />{" "}
          <img
            src="http://nodemon.io/nodemon.svg"
            width="auto"
            height="90"
            alt="nodemon"
          />
        </div>
      </div>
    );
  }
}

export default Home;
