"use client";
import React, { ReactElement } from "react";

import { useAnimate, stagger, motion } from "framer-motion";
type Props = {
  children: ReactElement;
};

// const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

export const fadeInDivVariants = {
  initial: { opacity: 0, scale: 0.9, y: 10, filter: "blur(10px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, delay: 0.175 } },
};

const AnimateDiv = (props: Props) => {
  //   const [scope, animate] = useAnimate();

  return (
    <motion.div
      variants={fadeInDivVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        margin: "20px",
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimateDiv;
