"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    // Update hash on initial load and when hash changes
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      // For hash links on home page
      return pathname === "/" && activeHash === path.substring(1);
    }
    // For regular routes
    return pathname === path;
  };

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
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/#about") ? "text-primary font-semibold" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/#projects"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/#projects") ? "text-primary font-semibold" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/blog") ? "text-primary font-semibold" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/#contact") ? "text-primary font-semibold" : ""
            }`}
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
