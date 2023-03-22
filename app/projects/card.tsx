"use client";
import {
	motion,
	MotionValue,
	useMotionTemplate,
	useMotionValue,
} from "framer-motion";

import type { Project } from "contentlayer/generated";
import Link from "next/link";

const Flashlight: React.FC<{
	x: MotionValue<number>;
	y: MotionValue<number>;
}> = ({ x, y }) => {
	let maskImage = useMotionTemplate`radial-gradient(320px at ${x}px ${y}px, white, transparent)`;
	let style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<div className="pointer-events-none">
			<div className="absolute inset-0 z-0  transition duration-300 [mask-image:linear-gradient(black,transparent)] group-hover:opacity-50" />
			<motion.div
				className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
				style={style}
			/>
			<motion.div
				className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
				style={style}
			/>
		</div>
	);
};

export const Card: React.FC<{ project: Project }> = ({ project }) => {
	const mouseX = useMotionValue(0); //randomBetween(rect?.left, rect?.right));
	const mouseY = useMotionValue(0); //randomBetween(rect?.top, rect?.bottom));

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<Link
			key={project._id}
			onMouseMove={onMouseMove}
			href={`/projects/${project.slug}`}
			// className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"

			className="overflow-hidden relative p-4 duration-700 border rounded-xl hover:bg-zinc-800/30 group md:gap-8 hover:border-zinc-600 border-zinc-600 md:p-8"
		>
			<Flashlight x={mouseX} y={mouseY} />

			<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
				{project.date ? (
					<time dateTime={new Date(project.date).toISOString()}>
						{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
							new Date(project.date),
						)}
					</time>
				) : (
					<span>SOON</span>
				)}
			</span>
			<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
				{project.title}
			</h2>
			<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
				{project.description}
			</p>
		</Link>
	);
};
