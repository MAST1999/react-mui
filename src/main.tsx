import CssBaseLine from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement)
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <CssBaseLine enableColorScheme />
      <App />
    </React.StrictMode>
  );
else throw new Error("Root element not found");