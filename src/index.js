// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import NotFound from "./NotFound";
import { StoreProvider } from "./providers/StoreProvider";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path="/user/:userId" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);
