import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

//Importamos el archivo global de estilos
import "./assets/styles/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
