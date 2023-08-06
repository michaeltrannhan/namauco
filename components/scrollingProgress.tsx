"use client";
import { motion, useScroll } from "framer-motion";

export const ScrollingProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="sticky h-[2px] bg-primary origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
