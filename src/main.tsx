import CssBaseLine from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./store/store";

const rootElement = document.getElementById("root");

if (rootElement)
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <CssBaseLine enableColorScheme />
        <App />
      </Provider>
    </React.StrictMode>
  );
else throw new Error("Root element not found");
