import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Single place where the plugins are registered; scenes import from here.
gsap.registerPlugin(ScrollTrigger, useGSAP);

// Phone browsers resize the viewport when the address bar slides away;
// recalculating every pinned scene on each of those makes the scroll jump.
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger, useGSAP };
