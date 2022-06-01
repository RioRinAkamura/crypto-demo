import React from "react";
import styled from "styled-components";

type Props = {
  children: JSX.Element;
};

const Container = ({ children }: Props) => {
  return <WrapperComponent>{children}</WrapperComponent>;
};

export default Container;

const WrapperComponent = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
`;
