import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="flex items-center justify-between">
            <nav className="relative flex items-center gap-8 md:gap-12 text-sm font-medium ml-auto border-neutral-100 border-t border-r p-2">
                <div className="absolute right-0 -top-1.5 h-3 w-px bg-neutral-200 dark:bg-neutral-700"></div>
                <div className="absolute -right-1.5 top-0 h-px w-3 bg-neutral-200 dark:bg-neutral-700"></div>
                <Link href="/articles">Articles</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/experience">Experience</Link>
            </nav>
        </header>
    );
};

export default Header;
