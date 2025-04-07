import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ArcadeEditor from "./components/ArcadeEditor";

// This renders arcade editor

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ArcadeEditor />
  </StrictMode>,
);
