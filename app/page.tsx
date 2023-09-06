import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	
	{ name: "Welkom'", href: "https://station-service.kalimero.rocks" },
	{ name: "Picaboo", href: "https://picaboo.kalimero.rocks" },
	{ name: "Rock, Ghost", href: "https://rockghostsrock.digitalpress.blog" },
	{ name: "Shop", href: "https://bookomatic.hstn.me" },
	{ name: "About", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-5">
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
				quantity={100}
			/>
			<h1 className="z-10 text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-8xl whitespace-nowrap bg-clip-text ">
				www.kalimero.rocks
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					Hi, my name is Kalimero, I'm a Wild at Art
					 {" "}
					<Link
						target="_blank"
						href="https://yamwhatyam.kalimero.rocks"
						className="underline duration-500 hover:text-zinc-300"
					>
						Dessine-Man
					</Link>

					<br />
					working on{" "}
					<Link
						target="_blank"
						href="https://nest-in-pace.kalimero.rocks"
						className="underline duration-500 hover:text-zinc-300"
					>
						graphic novels
					</Link>{" "}
					at night.
				</h2>
			</div>
		</div>
	);
}

