import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";

const navigation = [
  { name: "Servicios", href: "/services" },
  // { name: "Clientes", href: "/clients" },
  { name: "Quiénes somos", href: "/about-us" },
  { name: "Contacto", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base duration-500 text-zinc-400 hover:text-zinc-100"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={600}
      />
      <h1 className="z-10 text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        go2moon!
      </h1>
      <h2 className="z-8 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-sans sm:text-1xl md:text-4xl whitespace-nowrap bg-clip-text tracking-[0.35em]">
        PUBLICIDAD
      </h2>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-l text-zinc-300">
          Vemos la publicidad como herramienta para crecer y trascender,
          <br />
          podemos lograr que tu empresa comience el ascenso 💫
          <br />
          <br />
          <br />
        </h2>
        <div className="flex w-full justify-center items-center">
          <Image
            src="/images/superficie-lunar-1.png"
            width={400}
            height={400}
            alt="Moon picture"
          />
        </div>
      </div>
    </div>
  );
}
