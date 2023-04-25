"use client";
import Link from "next/link";
import React from "react";
import AsciiArt from "./components/AsciiArt";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
	{ name: "Resume", href: "/resume" },
];

export default function Home() {

	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<AsciiArt />
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

			<h1 className="z-10 text-4xl p-4 text-transparent duration-1000 cursor-default text-edge-outline animate-title  font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-white ">
				Adam Hughes
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-xs md:text-sm lg:text-lg xl:text-lg 2xl:text-lg  text-zinc-500 ">
					I'm a front-end software developer. <br />
					I specialize in modern web frameworks like React/Next. <br />
					My background is in Finance, Marketing, Operations, and SEO. <br />
					I'm a creative problem solver who enjoys collaborating with team members. <br />
				</h2>
			</div>
		</div>
	);
}
