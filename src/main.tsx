import "@fontsource-variable/atkinson-hyperlegible-next";
import "@fontsource-variable/atkinson-hyperlegible-next/wght-italic.css";
import "styles/reset.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "@primereact/core";
import GlobalStyles from "styles/GlobalStyles";
import { primeReactConfig } from "theme/primereact";
import App from "./App.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root not found in index.html");
}

createRoot(rootElement).render(
  <StrictMode>
    <PrimeReactProvider {...primeReactConfig}>
      <GlobalStyles />
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
