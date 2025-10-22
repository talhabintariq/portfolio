"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-mono font-bold text-xl tracking-tight hover:text-primary transition-colors group"
        >
          <span className="text-primary">&lt;</span>
          <span className="group-hover:tracking-wide transition-all duration-300">TT</span>
          <span className="text-primary">/&gt;</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/#about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/#projects"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
