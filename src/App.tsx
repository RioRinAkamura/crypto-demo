import { Spin } from "antd";
import axios from "axios";
import React, { useCallback, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { apiKey, baseUrl, proxyUrl } from "./constants";
import { CryptoContext } from "./Contexts/CryptoContext";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  const { setCoins, setLoading, loading } = useContext(CryptoContext);
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

  return (
    <div className="App">
      <Navbar />
      {loading && (
        <SpinWrapper>
          <Spin />
        </SpinWrapper>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coins/:id" element={<Detail />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

const SpinWrapper = styled.span`
  top: 40%;
  left: 50%;
  right: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1000;
`;

