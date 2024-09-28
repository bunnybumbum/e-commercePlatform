import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ProductsCont from "./context/ProductsCont.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductsCont>
        <App />
      </ProductsCont>
    </BrowserRouter>
  </StrictMode>
);
