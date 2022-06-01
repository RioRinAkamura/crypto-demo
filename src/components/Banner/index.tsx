import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

type Props = {};

const Banner = (props: Props) => {
  return (
    <BannerWrapper>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
          <BannerItem>
            <Title>$76 billion</Title>
            <p>24h trading volume on Binance exchange</p>
          </BannerItem>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
          <BannerItem>
            <Title>600+</Title>
            <p>Cryptocurrencies listed</p>
          </BannerItem>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
          <BannerItem>
            <Title>90 million</Title>
            <p>Registered users who trust Binance</p>
          </BannerItem>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
          <BannerItem>
            <Title> 0.10%</Title>
            <p>Lowest transaction fees</p>
          </BannerItem>
        </Col>
      </Row>
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.div`
  max-width: 1200px;
  padding: 24px 0px;
  margin: 0 auto;
`;

const BannerItem = styled.div`
  flex: 1;
  /* color: white; */
`;

const Title = styled.span`
  /* color: white; */
  font-size: 36px;
`;
