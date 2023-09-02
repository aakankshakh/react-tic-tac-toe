import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import StartPage from "./startPage";

//<App playerOne={"A"} />

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <StartPage />
  </StrictMode>
);
