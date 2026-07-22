import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app.js";

import dsxSideEffect from "~/index.html";
console.log(dsxSideEffect);
import dsxSideEffect2 from "~/robots.txt";
console.log(dsxSideEffect2);
import dsxSideEffect4 from "~/favicon.png";
console.log(dsxSideEffect4);

const container = document.getElementById("app");
if (container !== null) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
