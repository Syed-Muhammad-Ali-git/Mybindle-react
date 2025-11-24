// React entry file - mounts the App component into the root DOM node
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  // StrictMode helps highlight potential problems during development
  <StrictMode>
    <App />
  </StrictMode>
);
