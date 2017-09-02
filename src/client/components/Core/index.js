import React from "react";
import PropTypes from "prop-types";
import { CentredContainer as Container } from "../BlockContainer";
import styled from "styled-components";

const Inner = styled.div`padding: 1em 0em;`;
const Outer = styled.div`
  background-color: #f9f9f9;
  padding: 1em 0;
  min-height: inherit;
`;

const Core = ({ className, children }) =>
  <Outer className={className}>
    <Container>
      <Inner>
        {children}
      </Inner>
    </Container>
  </Outer>;
Core.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

export default Core;
