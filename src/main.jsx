import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CentralFallback from "./components/CentralFallback.jsx";

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<CentralFallback />}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>
);
