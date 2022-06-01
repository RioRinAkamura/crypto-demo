import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/antd.min.css";
import { CryptoContextProvider } from "./Contexts/CryptoContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CryptoContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CryptoContextProvider>
  </React.StrictMode>
);

