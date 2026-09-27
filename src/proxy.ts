import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip api routes, Next internals, Vercel internals, the generated OG image
  // (so /es/opengraph-image is served directly instead of being redirected to
  // the unprefixed default-locale URL) and files with extensions
  matcher: "/((?!api|_next|_vercel|.*opengraph-image|.*\\..*).*)",
};
