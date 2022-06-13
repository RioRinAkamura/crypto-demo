import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { apiKey, baseUrl, proxyUrl } from "../constants";
import { Coin } from "../types";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

interface CryptoContextValue {
  coins: Coin[];
  setCoins: (data: Coin[]) => void;
  loading: boolean;
  setLoading: (data: boolean) => void;
  getCoins: () => void;
  getCoinsSearch: (searchValue: string) => void;
}

export const CryptoContext = createContext<CryptoContextValue>({
  coins: [],
  setCoins: (data: Coin[]) => {},
  loading: false,
  setLoading: (data: boolean) => {},
  getCoins: () => {},
  getCoinsSearch: (searchValue: string) => {},
});

const UseCryptoContextProvider = (): CryptoContextValue => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const options = {
    method: "GET",
    url: `${proxyUrl}${baseUrl}/coins`,
    headers: {
      "x-access-token": `${apiKey}`,
    },
  };

  const getCoins = useCallback(async () => {
    setLoading(true);
    await axios
      .request(options)
      .then(function (response) {
        setCoins(response.data.data.coins);
      })
      .catch(function (error) {
        console.error(error);
      });
    setLoading(false);
    // eslint-disable-next-line
  }, [setCoins]);

  useEffect(() => {
    getCoins();
  }, [getCoins]);

  const getCoinsSearch = useCallback(
    async (searchValue: string) => {
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
        })
        .catch(function (error) {
          console.error(error);
        });

      setLoading(false);
    },
    [setCoins]
  );

  return {
    coins,
    setCoins,
    loading,
    setLoading,
    getCoins,
    getCoinsSearch,
  };
};

export const CryptoContextProvider = ({ children }: Props) => {
  const contextValue = UseCryptoContextProvider();
  return (
    <CryptoContext.Provider value={contextValue}>
      {children}
    </CryptoContext.Provider>
  );
};
