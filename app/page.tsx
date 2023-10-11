import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Jucy
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Xin chào, tôi là Jucy, tôi đang xây dựng các giải pháp không máy chủ và mã nguồn mở tại{" "}
          <Link
            target="_blank"
            href="https://jucy.space"
            className="underline duration-500 hover:text-zinc-300"
          >
            Jucy
          </Link>

          <br />
          và làm việc trên{" "}
          <Link
            target="_blank"
            href="https://jucy.network"
            className="underline duration-500 hover:text-zinc-300"
          >
            jucy.network
          </Link>{" "}
          vào ban đêm.
        </h2>
      </div>
    </div>
  );
}
