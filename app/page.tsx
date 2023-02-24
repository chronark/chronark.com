
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Projects", href: "/projects" },
	{ name: "Blog", href: "/blog" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="w-screen h-screen flex overflow-hidden  flex-col items-center justify-center bg-gradient-to-tl from-black via-zinc-400/10 to-black">
			<div className="hidden animate-fadeSlow md:block w-screen translate-x-[10%] animate-fade-slow h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="flex items-center gap-2 ">
				{"CHRONARK".split("").map((letter, index) => (
					<div className="card">

						<h1 className="text-edge-outline cursor-default animate-fade z-10 hover:text-zinc-50 duration-1000 font-display text-4xl sm:text-6xl md:text-9xl leading-[60%] md:leading-[50%] whitespace-nowrap bg-clip-text bg-zinc-200 font-bold  text-transparent ">
							{letter}
						</h1>

					</div>
				))}
			</div>

			<div className="hidden animate-fadeSlow md:block w-screen -translate-x-[10%] animate-fade-slow h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<nav className="mt-16">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-zinc-500  text-sm hover:text-zinc-300 duration-500"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
		</div>
	);
}
