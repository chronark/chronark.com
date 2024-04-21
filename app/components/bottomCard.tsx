"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { MouseEventHandler, PropsWithChildren } from "react";

export const BottomCard: React.FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, red, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="flex duration-900 border rounded-xl hover:bg-zinc-100  md:gap-8 hover:border-zinc-400 border-zinc-300 ">
      <div className="flex pointer-events-none ">
        <motion.div style={style} />
        <motion.div style={style} />
      </div>

      {children}
    </div>
  );
};
