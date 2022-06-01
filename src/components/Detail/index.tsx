import { Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CryptoContext } from "../../Contexts/CryptoContext";
import { Coin } from "../../types";
import Container from "../Container";
import { Wrapper } from "../Navbar";
import CoinChart from "./components/CoinChart";

type Props = {};

const Detail = (props: Props) => {
  let { id } = useParams();
  const { coins } = useContext(CryptoContext);
  const [coin, setCoin] = useState<Coin>();

  useEffect(() => {
    if (coins && id) {
      const coinById = coins.find((coin: Coin) => coin.uuid === id);
      if (coinById) {
        setCoin(coinById);
      }
    }
  }, [coins, id]);

  return (
    <Wrapper>
      <Container>
        <CoinDetail>
          {coin && (
            <Row gutter={[16, 16]}>
              <Col xs={{ span: 24 }} sm={{ span: 6 }} md={{ span: 6 }}>
                <img src={coin?.iconUrl} alt="coin" width={"50%"} />
                <br />
                <br />
                <h1>{coin?.name}</h1>
                <div style={{ textAlign: "left" }}>
                  <p>
                    {" "}
                    <b>Market Cap:</b>{" "}
                    {coin.marketCap ? coin.marketCap : undefined}
                  </p>
                  <p>
                    <b>Rank:</b> {coin?.rank}
                  </p>
                  <p>
                    <b>Current Price:</b> {coin.price ? coin.price : undefined}{" "}
                    $
                  </p>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 18 }} md={{ span: 18 }}>
                <CoinChart coin={coin} />
              </Col>
            </Row>
          )}
        </CoinDetail>
      </Container>
    </Wrapper>
  );
};

export default Detail;

const CoinDetail = styled.div`
  margin-top: 100px;
`;
