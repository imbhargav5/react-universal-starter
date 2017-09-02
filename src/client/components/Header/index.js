import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../BlockContainer";
import Navbar from "../Navbar";

const Outer = styled.div`
  background-color: #fff;
  padding-bottom: 1em;
`;

const Inner = styled.div`
  text-align: left;
  border-bottom: 1px dashed black;
  margin-bottom: 1em;
  padding: 1em 0;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Heading = styled.h1`
  color: #303233;
  font-size: 2em;
  padding: 0;
  margin: 0 0 16px;
  line-height: 1;
`;

const Subheading = styled.h3`
  color: #515f71;
  font-weight: 100;
  opacity: 0.7;
  padding: 0;
  padding-bottom: 4px;
  margin: 0;
  line-height: 1;
`;

const BuiltWith = styled.p`
  color: #46b0ed;
  font-size: 1em;
  text-align: left;
  margin-bottom: 0;
`;

const Header = ({ className }) =>
  <Outer className={className}>
    <Container>
      <Box>
        <Inner>
          <Heading> React Starter </Heading>
          <Subheading>For the ever evolving front end stack</Subheading>
        </Inner>
        <Navbar />
      </Box>
      <BuiltWith>React 16+, React Router 4+, Webpack 3+</BuiltWith>
    </Container>
  </Outer>;
Header.propTypes = {
  className: PropTypes.string
};
export default Header;
