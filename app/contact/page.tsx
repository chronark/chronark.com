"use client";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Mail size={20} />,
		href: "mailto:hi@adamhughes.dev",
		label: "Email",
		handle: "hi@adamhughes.dev",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/ajh0050",
		label: "Github",
		handle: "ajh0050",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/front-end-adam/",
		label: "LinkedIn",
		handle: "front-end-adam",
	},
];

export default function Contact() {
	return (
	  <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
		<Navigation />
		<div className="container flex items-center justify-center min-h-screen px-4 mx-auto md:pt-20">
		  <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-8 sm:mt-0 lg:gap-16 lg:grid-cols-3">
			{socials.map((s) => (
			  <Card key={s.label}>
				<Link href={s.href} target="_blank">
				  <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16">
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
				  </div>
				</Link>
			  </Card>
			))}
		  </div>
		</div>
	  </div>
	);
  }

