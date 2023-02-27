"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/chronark_",
		label: "Twitter",
		handle: "@chronark_",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:dev@chronark.com",
		label: "Email",
		handle: "dev@chronark.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/chronark",
		label: "Github",
		handle: "chronark",
	},
];

export default function Example() {
	async function submit() {
		const res = await fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify({
				name: "John Doe",
				email: "",
			}),
		});
	}

	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Link
							key={s.href}
							href="https://twitter.com/chronark_"
							className="relative flex flex-col items-center gap-4 p-8 pb-16 duration-700 border rounded-xl hover:bg-zinc-800/30 group md:gap-8 md:py-24 hover:border-zinc-600 lg:pb-48 border-zinc-700 md:p-16"
						>
							<span
								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
								{s.icon}
							</span>{" "}
							<div className="z-10 flex flex-col items-center">
								<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
									{s.handle}
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									{s.label}
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
