import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  // 🟢 If prerendered content exists, use hydration
  hydrateRoot(rootElement, <React.StrictMode><App /></React.StrictMode>);
} else {
  // 🔵 If no prerendered content, render normally
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
