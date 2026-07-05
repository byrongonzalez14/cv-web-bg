"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { track } from "@/lib/analytics";

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  event: string;
  eventParams?: Record<string, string>;
  children: ReactNode;
}

export function TrackedLink({
  event,
  eventParams,
  children,
  ...props
}: TrackedLinkProps) {
  return (
    <a {...props} onClick={() => track(event, eventParams)}>
      {children}
    </a>
  );
}
