import React from "react";

interface SectionHeaderProps {
    children: React.ReactNode;
    className?: string;
}

const SectionHeader = ({ children, className = "" }: SectionHeaderProps) => {
    return <h2 className={`text-base font-bold font-inter-tight text-neutral-500 ${className}`}>{children}</h2>;
};

export default SectionHeader;
