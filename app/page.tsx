import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Navigation } from "./components/nav";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Footer } from "./components/footer";

const navigation = [
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const stacks = [".NET", "React", "NestJS"];

const socials = [
  {
    icon: <Twitter size={24} />,
    href: "https://twitter.com/hadi_samadzad",
    label: "Twitter",
    handle: "@hadi_samadzad",
  },
  {
    icon: <Linkedin size={24} />,
    href: "https://linkedin.com/in/hadisamadzad",
    label: "LinkedIn",
    handle: "hadisamadzad",
  },
  {
    icon: <Github size={24} />,
    href: "https://github.com/hadisamadzad",
    label: "Github",
    handle: "hadisamadzad",
  },
];

export default function Home() {
  return (
    <>
      <Navigation hideBackArrow={true} showLogo={false} />

      <div
        className="flex flex-col items-center justify-center w-screen pt-48
          bg-grad bg-gradient-to-tl from-black via-zinc-700/30 to-black"
      >
        <Particles className="absolute inset-0 -z-10" quantity={150} />

        <h2 className="text-zinc-400 tracking-wide-xl text-xl mb-8 bg-gradient-to-r from-zinc-400 to-zinc-100 text-transparent bg-clip-text">
          HADI SAMADZAD
        </h2>
        <h1 className="font-bold text-6xl bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Full-stack Web Developer
        </h1>
        <div className="mt-8">
          {stacks.map((x) => (
            <span className="rounded-br-lg text-lg font-extrabold px-1 mx-2 bg-zinc-200 ">
              {x}
            </span>
          ))}
        </div>

        <div className="my-10 w-2/3 text-center">
          <h2 className="text-md text-zinc-400 ">
            I'm Hadi, a full-stack web developer living in England, have loved
            programming from my teenage when I started by <b>Turbo C ♥</b>. I
            enjoy sharing my web development insights on my blog, exploring the
            evolving tech landscape.
          </h2>
        </div>

        <div className="flex mt-24 mb-20">
          {socials.map((s) => (
            <Link
              href={s.href}
              target="_blank"
              className="p-8 w-52 flex flex-col items-center gap-2 group"
            >
              <span className="flex items-center justify-center w-10 h-10 text-zinc-300 group-hover:text-zinc-100">
                {s.icon}
              </span>
              <div className="flex flex-col items-center">
                <span className="text-zinc-400 group-hover:text-zinc-100">
                  {s.handle}
                </span>
                <span className="mt-2 text-center text-zinc-400 group-hover:text-zinc-100">
                  {s.label}
                </span>
              </div>
              <span
                className="pt-20 w-px bg-gradient-to-b from-zinc-300 to-transparent"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
