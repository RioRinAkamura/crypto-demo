import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import { CryptoContext } from "../../Contexts/CryptoContext";
import Container from "../Container";
import { Wrapper } from "../Navbar";

type Props = {};

const SearchCoin = (props: Props) => {
  const { getCoinsSearch } = useContext(CryptoContext);
  const [searchValue, setSearchValue] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    getCoinsSearch(searchValue);
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
