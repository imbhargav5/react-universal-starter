import React from "react";
import PropTypes from "prop-types";
import { CentredContainer as Container } from "../BlockContainer";
import styled from "styled-components";

const Text = styled.p`
  padding: 1em;
`;

const Footer = ({ className }) => (
  <Container className={className}>
    <Text>
      Made with ❤️ by <a href="https://imbhargav5.com">imbhargav5</a>
    </Text>
  </Container>
);
Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
