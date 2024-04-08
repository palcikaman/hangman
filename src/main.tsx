import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { GameContextProvider } from "./components/GameContext.tsx";
import { theme } from "./config/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
