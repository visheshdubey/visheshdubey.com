"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface ArticleCardProps {
    href: string;
    title: string;
    description: string;
    className?: string;
    delay?: number;
}

const ArticleCard = ({ href, title, description, className = "", delay = 0 }: ArticleCardProps) => {
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
            <Link href={href} className={`p-4 rounded-md -ml-4 hover:bg-neutral-100 space-y-1 ${className}`}>
                <h3 className="text-base font-semibold font-inter">{title}</h3>
                <p className="text-sm font-inter leading-relaxed tracking-wide">{description}</p>
            </Link>
        </motion.div>
    );
};

export default ArticleCard;
