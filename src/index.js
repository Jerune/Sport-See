// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import { StoreProvider } from "./providers/StoreProvider";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <HeaderNav />
      <App />
    </StoreProvider>
  </React.StrictMode>
);
