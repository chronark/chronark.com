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
			<nav className="my-16 animate-fade-in">
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
			<div className="hidden animate-glow md:block w-screen animate-fade-left h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<h1 className="text-edge-outline   cursor-default animate-title z-10 hover:text-zinc-50 duration-1000 font-display text-4xl sm:text-6xl md:text-9xl  whitespace-nowrap bg-clip-text bg-zinc-200 font-black  text-transparent ">
				CHRONARK
			</h1>

			<div className="hidden animate-glow md:block w-screen  animate-fade-right h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 animate-fade-in">
				<h2 className="text-zinc-500  text-sm ">
					Building serverless and open source solutions at{" "}
					<Link
						href="https://upstash.com"
						className="underline hover:text-zinc-300 duration-500"
					>
						Upstash
					</Link>

					<br />
					and building{" "}
					<Link
						href="https://planetfall.io"
						className="underline hover:text-zinc-300 duration-500"
					>
						planetfall.io
					</Link>{" "}
					at night.
				</h2>
			</div>
		</div>
	);
}
