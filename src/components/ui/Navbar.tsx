"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="card-glass border-b border-white/20 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Sakinah home"
          >
            <span className="text-emerald-500 text-xl select-none">☽</span>
            <span className="font-semibold text-lg tracking-tight gradient-text">
              Sakinah
            </span>
          </Link>

          <div className="flex items-center gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  pathname === href
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800/60"
                )}
              >
                {label}
              </Link>
            ))}
            <div className="ml-2">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
