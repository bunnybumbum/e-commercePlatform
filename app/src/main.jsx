import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ProductsCont from "./context/ProductsCont.jsx";
import UserContext from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <UserContext>
      <ProductsCont>
        <App />
      </ProductsCont>
      </UserContext>
    </BrowserRouter>
  </StrictMode>
);
