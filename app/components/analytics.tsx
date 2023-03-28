"use client";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

const track = ["/", "/share", "/deploy", "/unseal"];

export function Analytics() {
  return (
    <VercelAnalytics
      beforeSend={(event) => {
        const url = new URL(event.url);
        if (!track.includes(url.pathname)) {
          url.pathname = "/__redacted";
          return {
            ...event,
            url: url.href,
          };
        }
        return event;
      }}
    />
  );
}