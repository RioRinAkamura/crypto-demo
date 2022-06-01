import React from "react";
import styled from "styled-components";

type Props = {};

const Footer = (props: Props) => {
  return (
    <FooterWrapper>
      <FooterOverlay>footer</FooterOverlay>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height: 300px;

  color: white;
  margin-top: 100px;
  object-fit: contain;
  background-size: cover;
  object-position: center;
  background-position: center;
  background-repeat: no-repeat;
`;

const FooterOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000ba;
`;
