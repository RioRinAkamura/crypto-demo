import React from "react";
import Container from "../../components/Container";
import { Wrapper } from "../../components/Navbar";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <Wrapper>
      <Container>
        <img
          src="https://image.cnbcfm.com/api/v1/image/106984655-1638720074358-gettyimages-1294303237-01_jan_01_005.jpeg?v=1648062136"
          alt="bg"
          width={"100%"}
          height={800}
        />
      </Container>
    </Wrapper>
  );
};

export default AboutPage;
