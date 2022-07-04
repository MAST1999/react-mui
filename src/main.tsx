import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import CssBaseLine from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./store/store";
import { theme } from "./theme";

const rootElement = document.getElementById("root");

export const muiCache = createCache({
  key: "mui",
  prepend: true,
});

if (rootElement)
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CacheProvider value={muiCache}>
          <Provider store={store}>
            <CssBaseLine enableColorScheme />
            <App />
          </Provider>
        </CacheProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
else throw new Error("Root element not found");
