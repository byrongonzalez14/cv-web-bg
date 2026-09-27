import { notFound } from "next/navigation";

/**
 * Catch-all for URLs that match no route under the locale segment. Without
 * it, Next falls back to its unstyled default 404 instead of rendering the
 * localized `not-found.tsx` (see next-intl docs, "Not found page").
 */
export default function CatchAllPage() {
  notFound();
}
