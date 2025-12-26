import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
// import App from './App.jsx'
import ShoppingList from "./ShoppingLIst";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <ShoppingList />
  </StrictMode>
);
