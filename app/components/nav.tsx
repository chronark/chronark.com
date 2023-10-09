"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";

interface props {
  hideBackArrow?: boolean;
  showLogo?: boolean;
}

export const Navigation: React.FC<props> = ({
  hideBackArrow = false,
  showLogo = true,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="container h-20 flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            {!hideBackArrow && (
              <Link
                href="/"
                className="duration-100 text-zinc-300 hover:text-white"
              >
                <ArrowLeft className="w-6 h-6 " />
              </Link>
            )}
            <Link
              href="/"
              className="duration-100 text-zinc-300 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="duration-100 text-zinc-300 hover:text-white"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="duration-100 text-zinc-300 hover:text-white"
            >
              Contact
            </Link>
          </div>

          {showLogo && (
            <Link
              href="/"
              className="duration-100 text-zinc-300 hover:text-white"
            >
              <Logo />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
