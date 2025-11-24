import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface/50 py-10 backdrop-blur-2xl">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 text-sm text-muted md:grid-cols-4 md:px-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Above The Stack</p>
          <p className="text-lg font-semibold text-foreground">Vendor-neutral. MSP-first. Future-focused.</p>
          <p className="text-muted">Managed intelligence for operators who build the modern channel.</p>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Navigate</p>
          <div className="flex flex-col space-y-2">
            <Link href="/community" className="hover:text-accent">
              Community
            </Link>
            <Link href="/resources" className="hover:text-accent">
              Resources
            </Link>
            <Link href="/events" className="hover:text-accent">
              Events
            </Link>
            <Link href="/contact" className="hover:text-accent">
              Contact
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Operate</p>
          <div className="flex flex-col space-y-2">
            <Link href="/vision" className="hover:text-accent">
              Vision
            </Link>
            <Link href="/contributors" className="hover:text-accent">
              Contributors
            </Link>
            <Link href="/admin" className="hover:text-accent">
              Admin Console
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Portal</p>
          <Link
            href={process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.abovethestack.com"}
            className="btn-primary inline-flex w-fit"
          >
            Open Community
          </Link>
          <p className="text-muted">© {new Date().getFullYear()} Above The Stack</p>
        </div>
      </div>
    </footer>
  );
}
