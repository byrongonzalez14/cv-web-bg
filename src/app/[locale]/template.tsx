import type { ReactNode } from "react";

/**
 * Page transition. It is a CSS animation (`.page-enter` in globals.css), not
 * a JavaScript one, so the server-rendered HTML is visible right away.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
