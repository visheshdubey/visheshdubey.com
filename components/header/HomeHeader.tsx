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
import { buttonVariants } from "../ui/button";

const HomeHeader = () => {
  return (
    <div
      id="navbar"
      className="sticky  z-50 top-4 md:top-8 w-full flex items-center max-w-5xl mx-auto bg-background/20 backdrop-blur-md mt-4 py-4  px-8 rounded-full justify-between "
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
      <div className="block lg:hidden overflow-x-hidden">
        <Sheet>
          <SheetTrigger>
            <span className={buttonVariants({ variant: "ghost", size: "sm" })}>
              <Menu />
            </span>
          </SheetTrigger>
          <SheetContent className="flex-1 h-full z-50">
            <SheetHeader className="justify-start text-start flex w-full">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex h-full py-4 flex-1 flex-col justify-between">
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
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default HomeHeader;
