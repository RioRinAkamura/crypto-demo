import React, { createContext, useState } from "react";
import { Coin } from "../types";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

interface CryptoContextValue {
  coins: Coin[];
  setCoins: (data: Coin[]) => void;
  loading: boolean;
  setLoading: (data: boolean) => void;
}

export const CryptoContext = createContext<CryptoContextValue>({
  coins: [],
  setCoins: (data: Coin[]) => {},
  loading: false,
  setLoading: (data: boolean) => {},
});

const UseCryptoContextProvider = (): CryptoContextValue => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return {
    coins,
    setCoins,
    loading,
    setLoading,
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
