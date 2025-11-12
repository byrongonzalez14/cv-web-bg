import React from "react";
import { createRoot } from "react-dom/client";
import { DesktopView } from "./screens/DesktopView";
import { SmoothScroll } from "./components/SmoothScroll";
import { LanguageProvider } from "./context/LanguageContext";

createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <SmoothScroll>
        <DesktopView />
      </SmoothScroll>
    </LanguageProvider>
  </React.StrictMode>,
);
