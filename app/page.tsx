import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Navigation } from "./components/nav";

const navigation = [
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <>
      <Navigation />

      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <Particles className="absolute inset-0 -z-10" quantity={100} />
        <h1 className="z-10 text-xl cursor-default text-white font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Hadi Samadzad
        </h1>

        <div className="my-16 text-center">
          <h2 className="text-sm text-zinc-500 ">
            Hi, my name is Hadi, I'm a backend developer living in England. I ♥
            programming at night.
          </h2>
        </div>
      </div>
    </>
  );
}
