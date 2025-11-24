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
    <header className="sticky top-0 z-50 border-b border-brand-border-subtle/50 bg-brand-bg/90 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-brand-text">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-surface-soft/80 text-brand-accent shadow-soft">ATS</span>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-text-muted">Above The Stack</p>
            <p className="text-base font-semibold text-brand-text">Managed Intelligence</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 rounded-2xl border border-brand-border-subtle bg-brand-surface/70 px-3 py-2 shadow-soft md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-xl px-3 py-2 text-sm font-semibold text-brand-text/90 transition hover:bg-brand-surface-soft hover:text-white",
                pathname === item.href && "bg-brand-surface-soft text-white shadow-soft",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={portalUrl}
          className="btn-primary hidden md:inline-flex"
        >
          Join Portal
        </Link>
      </div>
      <div className="mx-auto block w-full max-w-7xl px-6 pb-3 md:hidden">
        <nav className="flex items-center gap-2 overflow-x-auto rounded-2xl border border-brand-border-subtle bg-brand-surface/80 px-2 py-2 shadow-soft">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold text-brand-text/90 transition hover:bg-brand-surface-soft hover:text-white",
                pathname === item.href && "bg-brand-surface-soft text-white shadow-soft",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={portalUrl}
            className="btn-primary ml-auto whitespace-nowrap px-4 py-2 text-sm"
          >
            Portal
          </Link>
        </nav>
      </div>
    </header>
  );
}
