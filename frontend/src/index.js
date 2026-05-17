import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./theme/theme.css";
import "./index.css";
import App from "./App";
import ScrollToTop from "./ScrollToTop";
import { ThemeProvider } from "./theme/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <ScrollToTop />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
