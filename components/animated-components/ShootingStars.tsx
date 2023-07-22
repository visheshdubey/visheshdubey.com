"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

type props = {
  rotate: number;
  x: number;
  y: number;
  opacity: number;
};

const ShootingStars = ({
  initial,
  animate,
  repeatDelay,
}: {
  initial: props;
  animate: props;
  repeatDelay: number;
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{
        ease: "easeIn",
        duration: 0.8,
        repeat: Infinity,
        repeatDelay,
      }}
      className="absolute w-[2px] h-36 bg-gradient-to-t  from-purple-500 to-purple-500/0 dark:from-white dark:to-white/0 rotate-90"
    ></motion.div>
  );
};

export default ShootingStars;

const x = { rotate: -45, x: 0, y: 0, opacity: 1 };
