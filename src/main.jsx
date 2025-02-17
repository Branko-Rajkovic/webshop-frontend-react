// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  //If strict mode is enabled reducer in cartContext.jsx will be
  //called twice and increment quantity by 2

  // <StrictMode>
  <App />
  // </StrictMode>
);
