"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";

export const Footer: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  return (
    <footer className="mt-10 py-4 w-full">
      <p className="text-sm text-center text-zinc-400">
        &copy; 2023 Hadi Samadzad. Crafted by yours truly
        <Link href="/" className="mx-auto text-zinc-200"></Link>
      </p>
    </footer>
  );
};
