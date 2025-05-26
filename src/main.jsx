import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <RoutesApp />
    </StrictMode>
  </BrowserRouter>
);
