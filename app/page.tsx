import Link from "next/link";
import { Metadata } from "next";
import React from "react";
import Particles from "./components/particles";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const navigation = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Work", href: "/work" },
  { name: "Consulting", href: "/work/services" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <><div className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 py-24 overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100} />
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Jacob Yi
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div className="z-10 max-w-2xl px-6 mt-10 text-center">
          <p className="font-display text-lg text-zinc-200 sm:text-2xl">
            Technical Deal Origination | AI Automation | Full-Stack Systems
          </p>
          <p className="mt-6 text-sm text-zinc-400 sm:text-base">
            I build AI-native sourcing and workflow systems for private equity,
            acquisition entrepreneurs, and B2B operators.
          </p>
          <div className="mt-8 space-y-2 text-sm text-left text-zinc-400 sm:text-base">
            <p className="text-xs tracking-wide text-zinc-500 uppercase">
              Current work
            </p>
            <p>
              <span className="text-zinc-200">Bull Holdings:</span> Deal
              origination infrastructure for active PE and add-on mandates.
            </p>
            <p>
              <span className="text-zinc-200">Coverable:</span> AI-native
              workflow software for immigration law firms.
            </p>
            <p>
              <span className="text-zinc-200">Consulting:</span> Custom CRMs,
              lead research, outbound automation, and internal tools.
            </p>
          </div>
          <p className="mt-8 text-sm text-zinc-400 sm:text-base">
            If your team has a sourcing, research, or workflow bottleneck, I can
            build the operating system behind it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 mt-8 font-medium duration-200 rounded-full bg-zinc-100 hover:bg-white text-zinc-900"
          >
            Discuss an origination workflow
          </Link>
        </div>
      </div></>
  );

}
