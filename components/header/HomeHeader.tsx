"use client";
import React from "react";
import { ThemeToggle } from "../theme/theme-toggle";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <div
      id="navbar"
      className="sticky z-50 top-4 md:top-8 w-full flex items-center max-w-5xl mx-auto bg-background/20 backdrop-blur-md mt-4 py-4  px-8 rounded-full justify-between "
    >
      <div className="text font-medium">visheshdubey.</div>
      <div className="hidden lg:flex items-center gap-4">
        <ul className="text-sm font-medium flex gap-8">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#work">Work</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="https://blog.visheshdubey.com">Blogs</Link>
          </li>
        </ul>
        <div className="h-5 w-[1px] bg-muted-foreground/80 ml-2"></div>
        <ThemeToggle></ThemeToggle>
      </div>
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="flex w-full items-start gap-8 flex-col">
              <SheetTitle>MENU</SheetTitle>
              <SheetDescription className="gap-8 w-full flex flex-col items-start">
                <ul className="text-sm items-start font-medium flex flex-col gap-8">
                  <li>
                    <Link href="#home">Home</Link>
                  </li>
                  <li>
                    <Link href="#work">Work</Link>
                  </li>
                  <li>
                    <Link href="#skills">Skills</Link>
                  </li>
                  <li>
                    <Link href="#experience">Experience</Link>
                  </li>
                  <li>
                    <Link href="https://blog.visheshdubey.com">Blogs</Link>
                  </li>
                </ul>
                <Separator className="w-full"></Separator>
                <ThemeToggle></ThemeToggle>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default HomeHeader;
