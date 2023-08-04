"use client";
import { Book, BookDownIcon, Github, GithubIcon, Instagram, Linkedin, Mail, Music2, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/dominick-j-monaco/",
		label: "LinkedIn",
		handle: "dominick-j-monaco",
	},
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/JackMonaco1",
		label: "Twitter",
		handle: "@JackMonaco1",
	},
	{
		icon: <Book size={20} />,
		href: "https://dominickjmonaco.hashnode.dev/",
		label: "Blog",
		handle: "dominickjmonaco",
	},
	{
		icon: <GithubIcon size={20} />,
		href: "https://github.com/HoldUpFjord",
		label: "Github",
		handle: "HoldUpFjord",
	},
	{
		icon: <Instagram size={20} />,
		href: "https://www.threads.net/@tpo_hikes",
		label: "Threads",
		handle: "tpo_hikes",
	},
	{
		icon: <Music2 size={20} />,
		href: "https://www.tiktok.com/@dominick.j.monaco",
		label: "TikTok",
		handle: "dominick.j.monaco",
	},
	
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16 lg:mt-24">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
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
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
