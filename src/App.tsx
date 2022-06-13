import { Spin } from "antd";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CryptoContext } from "./Contexts/CryptoContext";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import TestForwardRefPage from "./pages/TestForwardRefPage";

function App() {
  const { loading } = useContext(CryptoContext);

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
        <Route path="/testfwr" element={<TestForwardRefPage />} />
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

