"use client";

import { useEffect } from "react";

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
  useEffect(() => {
    fetch("/api/pageviews/increment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug }),
    });
  }, [slug]);

  return null;
};
