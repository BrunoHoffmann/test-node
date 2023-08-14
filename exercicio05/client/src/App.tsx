import { BrowserRouter } from "react-router-dom";

import { Router } from "./routes";
import GlobalStyle from "./styles/global";

import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import "./styles/tailwind.css";

export function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
}
