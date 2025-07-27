"use client";

import { motion } from "motion/react";
import React from "react";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
}

const ScrollAnimation = ({ children, className = "", delay = 0, duration = 0.5, direction = "up", distance = 50 }: ScrollAnimationProps) => {
    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { y: distance, opacity: 0 };
            case "down":
                return { y: -distance, opacity: 0 };
            case "left":
                return { x: distance, opacity: 0 };
            case "right":
                return { x: -distance, opacity: 0 };
            default:
                return { y: distance, opacity: 0 };
        }
    };

    const getAnimatePosition = () => {
        switch (direction) {
            case "up":
            case "down":
                return { y: 0, opacity: 1 };
            case "left":
            case "right":
                return { x: 0, opacity: 1 };
            default:
                return { y: 0, opacity: 1 };
        }
    };

    return (
        <motion.div
            className={className}
            initial={getInitialPosition()}
            whileInView={getAnimatePosition()}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;
