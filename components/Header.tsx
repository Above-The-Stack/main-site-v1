"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/vision", label: "Vision" },
  { href: "/community", label: "Community" },
  { href: "/resources", label: "Resources" },
  { href: "/events", label: "Events" },
  { href: "/contributors", label: "Contributors" },
  { href: "/contact", label: "Contact" },
];

const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.abovethestack.com";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-lg font-semibold text-white">
          Above The Stack
        </Link>
        <nav className="hidden items-center gap-2 rounded-2xl border border-border/80 bg-surface/60 px-3 py-2 shadow-subtle md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-xl px-3 py-2 text-sm font-semibold text-white/80 transition hover:text-white",
                pathname === item.href && "bg-card text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={portalUrl}
          className="hidden rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-background shadow-subtle transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:inline-flex"
        >
          Join
        </Link>
      </div>
      <div className="mx-auto mt-2 block w-full max-w-6xl px-4 md:hidden">
        <nav className="flex items-center gap-2 overflow-x-auto rounded-2xl border border-border/80 bg-surface/60 px-2 py-2 shadow-subtle">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold text-white/80 transition hover:text-white",
                pathname === item.href && "bg-card text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={portalUrl}
            className="ml-auto whitespace-nowrap rounded-xl bg-accent px-3 py-2 text-sm font-semibold text-background shadow-subtle"
          >
            Portal
          </Link>
        </nav>
      </div>
    </header>
  );
}
