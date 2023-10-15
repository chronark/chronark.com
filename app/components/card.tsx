"use client";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";

import { MouseEventHandler, PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}
	let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, red, transparent)`;
	let style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<div
			onMouseMove={onMouseMove}
			className="  duration-900 border rounded-xl hover:bg-zinc-200  md:gap-8 hover:border-zinc-400 border-zinc-300 ">
			<div className="pointer-events-none">
				
				<motion.div
		
					style={style}
				/>
				<motion.div
					
					style={style}
				/>
			</div>

			{children}
		</div>
	);
};
