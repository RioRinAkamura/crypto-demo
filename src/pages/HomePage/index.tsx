import React from "react";
import Banner from "../../components/Banner";
import CryptoList from "../../components/CryptoList";
import SearchCoin from "../../components/SearchCoin";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Banner />
      <SearchCoin />
      <CryptoList />
    </div>
  );
};

export default HomePage;
