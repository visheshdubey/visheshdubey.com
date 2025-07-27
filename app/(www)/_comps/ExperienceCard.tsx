"use client";

import { motion } from "motion/react";
import React from "react";

interface ExperienceCardProps {
    title: string;
    company: string;
    duration: string;
    imageUrl?: string;
    className?: string;
    delay?: number;
}

const ExperienceCard = ({ title, company, duration, imageUrl, className = "", delay = 0 }: ExperienceCardProps) => {
    return (
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            <div className={`p-4 rounded-md -ml-4 space-y-1 flex gap-4 items-start ${className}`}>
                <div className="w-32 aspect-video rounded-md bg-neutral-100">
                    {imageUrl && <img src={imageUrl} alt={company} className="w-full h-full object-cover rounded-md" />}
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold font-inter">{title}</h3>
                    <p className="text-sm font-inter leading-relaxed tracking-wide">{company}</p>
                    <p className="md:hidden text-xs font-inter leading-relaxed tracking-wide text-neutral-500">{duration}</p>
                </div>
                <p className="hidden md:block text-xs font-inter leading-relaxed tracking-wide ml-auto text-neutral-500">{duration}</p>
            </div>
        </motion.div>
    );
};

export default ExperienceCard;
