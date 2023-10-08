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
      <Navigation hideBackArrow={true} />

      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <Particles className="absolute inset-0 -z-10" quantity={150} />
        <text className=" text-orange-300 text-3xl">I'm a</text>
        <h1 className="  text-white font-display sm:text-4xl md:text-6xl">
          Software Developer
        </h1>

        <div className="my-16 text-center">
          <h2 className="text-md text-zinc-500 ">
            Hi, my name is Hadi, I'm a backend developer living in England. I ♥
            programming at night.
          </h2>
        </div>
      </div>
    </>
  );
}
