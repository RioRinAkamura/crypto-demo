import React from "react";
import styled from "styled-components";

type Props = {};

const Footer = (props: Props) => {
  return (
    <FooterWrapper>
      <FooterOverlay></FooterOverlay>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height: 300px;
  bottom: 0;
  color: white;
  margin-top: 200px;
`;

const FooterOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000ba;
`;
