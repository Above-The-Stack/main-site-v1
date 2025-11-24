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
  { href: "/admin", label: "Admin" },
];

const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.abovethestack.com";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-gradient-to-b from-background/80 via-background/60 to-background/20 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-foreground">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-accent shadow-subtle">ATS</span>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Above The Stack</p>
            <p className="text-base font-semibold text-foreground">Managed Intelligence</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 rounded-2xl border border-white/5 bg-surface/60 px-3 py-2 shadow-subtle md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-xl px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-white/5 hover:text-white",
                pathname === item.href && "bg-white/10 text-white shadow-subtle",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={portalUrl}
          className="hidden rounded-full bg-gradient-to-r from-accent via-white to-cta px-4 py-2 text-sm font-semibold text-[#0a0f1b] shadow-subtle transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:inline-flex"
        >
          Join Portal
        </Link>
      </div>
      <div className="mx-auto block w-full max-w-7xl px-6 pb-3 md:hidden">
        <nav className="flex items-center gap-2 overflow-x-auto rounded-2xl border border-white/5 bg-surface/70 px-2 py-2 shadow-subtle">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-white/5 hover:text-white",
                pathname === item.href && "bg-white/10 text-white shadow-subtle",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={portalUrl}
            className="ml-auto whitespace-nowrap rounded-full bg-gradient-to-r from-accent via-white to-cta px-3 py-2 text-sm font-semibold text-[#0a0f1b] shadow-subtle"
          >
            Portal
          </Link>
        </nav>
      </div>
    </header>
  );
}
