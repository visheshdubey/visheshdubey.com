import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="flex items-center justify-between">
            <nav className="flex items-center gap-12 text-sm font-medium ml-auto">
                <Link href="/articles">Articles</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/experience">Experience</Link>
            </nav>
        </header>
    );
};

export default Header;
