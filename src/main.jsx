import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainRouter } from "./Components/MainRouter.jsx";
import "./index.css";
import App from "./Components/App.jsx";
import { ThemeProvider } from "./ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <MainRouter />
    </ThemeProvider>
  </StrictMode>
);
