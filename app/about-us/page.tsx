"use client";
import { Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    icon: <Mail size={20} />,
    href: "mailto:dcontacto@go2moon.com",
    label: "Email",
    handle: "contacto@go2moon.com",
  },
  {
    icon: <Instagram size={20} />,
    href: "https://instagram.com/",
    label: "Instagram",
    handle: "@go2moon_publicidad",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://linkedin.com/go2moon",
    label: "Linkedin",
    handle: "go2moon_publicidad",
  },
];

export default function AboutUs() {
	return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-16">
          <h2
            className="
				z-8
				text-2xl
				text-transparent
				duration-1000 bg-white
				cursor-default
				text-edge-outline
				font-sans
				sm:text-1xl
				md:text-4xl
				whitespace-nowrap
				bg-clip-text
				text-right
				tracking-[0.35em]"
          >
            NOSOTROS
          </h2>
          <h2 className="text-l text-zinc-200 flex items-center">
            Somos un equipo dedicado a la publicidad digital, buscamos brindar
            un servicio integral para que nuestros clientes puedan crecer e
            impulsar sus ventas, tomando la tecnología como herramienta
            principal.
          </h2>
        </div>
      </div>
    </div>
  );
}
