import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="text-white font-semibold">Above The Stack</p>
          <p className="text-muted">Vendor-neutral. MSP-first. Future-focused.</p>
        </div>
        <div className="flex items-center gap-4 text-white/80">
          <Link href={process.env.NEXT_PUBLIC_PORTAL_URL || "#"} className="hover:text-accent">
            Community Portal
          </Link>
          <span className="text-muted">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
