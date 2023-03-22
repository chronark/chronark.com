"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Props = {
	project: {
		url?: string;
		title: string;
		description: string;
		repository?: string;
	};
};

export const Navigation: React.FC<Props> = ({ project }) => {
	const pathname = usePathname();
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header
			ref={ref}
			className="bg-gradient-to-tl from-black via-zinc-900 to-black"
		>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-white/10  border-zinc-200 lg:border-transparent"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							target="_blank"
							href="https://github.com/chronark/chronark.com"
						>
							<span
								className={`duration-200 hover:font-medium ${
									isIntersecting
										? " text-zinc-400 hover:text-zinc-100"
										: "text-zinc-600 hover:text-zinc-900"
								} `}
							>
								GitHub
							</span>
						</Link>
					</div>

					<Link
						href="/projects"
						className={`duration-200 hover:font-medium ${
							isIntersecting
								? " text-zinc-400 hover:text-zinc-100"
								: "text-zinc-600 hover:text-zinc-900"
						} `}
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
			<div>
				<div className="relative px-6 lg:px-8">
					<div className="max-w-3xl pt-20 pb-16 mx-auto sm:pt-48">
						<div>
							<h1 className="text-4xl font-bold uppercase text-zinc-100 sm:text-center sm:text-6xl font-display">
								{project.title}
							</h1>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center gap-4">
					{project.url ? (
						<Link
							target="_blank"
							className="px-4 py-2 font-semibold text-right duration-500 border-b border-transparent text-zinc-200 hover:border-zinc-100"
							href={project.url}
						>
							Website
						</Link>
					) : null}

					{project.repository ? (
						<Link
							target="_blank"
							className="px-4 py-2 font-semibold text-left duration-500 border-b border-transparent text-zinc-200 hover:border-zinc-100"
							href={`https://github.com/${project.repository}`}
						>
							Repository
						</Link>
					) : null}
				</div>
			</div>
		</header>
	);
};
