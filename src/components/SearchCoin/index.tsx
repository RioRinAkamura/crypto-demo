import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import axios from "axios";
import React, { FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import { apiKey, baseUrl, proxyUrl } from "../../constants";
import { CryptoContext } from "../../Contexts/CryptoContext";
import Container from "../Container";
import { Wrapper } from "../Navbar";

type Props = {};

const SearchCoin = (props: Props) => {
  const { setCoins, setLoading } = useContext(CryptoContext);
  const [searchValue, setSearchValue] = useState<string>("");

  const getCoin = async (searchValue: string) => {
    const options = {
      method: "GET",
      url: `${proxyUrl}${baseUrl}/coins?search=${searchValue}`,
      headers: {
        "x-access-token": `${apiKey}`,
      },
    };
    setLoading(true);
    await axios
      .request(options)
      .then(function (response) {
        setCoins(response.data.data.coins);
        console.log("response", response.data.data.coins);
      })
      .catch(function (error) {
        console.error(error);
      });

    setLoading(false);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    getCoin(searchValue);
  };

  return (
    <Wrapper>
      <Container>
        <SearchDiv>
          <form onSubmit={onSubmit}>
            <InputSearch
              value={searchValue}
              placeholder="Enter coin"
              suffix={<SearchOutlined />}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </form>
        </SearchDiv>
      </Container>
    </Wrapper>
  );
};

export default SearchCoin;

const SearchDiv = styled.div`
  width: 100%;
  text-align: right;
  margin-bottom: 16px;
`;

const InputSearch = styled(Input)`
  max-width: 300px;
`;
