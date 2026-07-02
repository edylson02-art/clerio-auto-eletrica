"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-0 z-[99999] h-1 w-full origin-left bg-gradient-to-r from-yellow-400 to-orange-500"
    />
  );
}