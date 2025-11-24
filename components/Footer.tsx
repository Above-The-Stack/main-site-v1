import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-brand-border-subtle/60 bg-brand-surface/70 py-10 backdrop-blur-2xl">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 text-sm text-brand-text-muted md:grid-cols-4 md:px-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">Above The Stack</p>
          <p className="text-lg font-semibold text-brand-text">Vendor-neutral. MSP-first. Future-focused.</p>
          <p className="text-brand-text-muted">Managed intelligence for operators who build the modern channel.</p>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">Navigate</p>
          <div className="flex flex-col space-y-2">
            <Link href="/community" className="hover:text-brand-accent">
              Community
            </Link>
            <Link href="/resources" className="hover:text-brand-accent">
              Resources
            </Link>
            <Link href="/events" className="hover:text-brand-accent">
              Events
            </Link>
            <Link href="/contact" className="hover:text-brand-accent">
              Contact
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">Operate</p>
          <div className="flex flex-col space-y-2">
            <Link href="/vision" className="hover:text-brand-accent">
              Vision
            </Link>
            <Link href="/contributors" className="hover:text-brand-accent">
              Contributors
            </Link>
            <Link href="/admin" className="hover:text-brand-accent">
              Admin Console
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">Portal</p>
          <Link
            href={process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.abovethestack.com"}
            className="btn-primary inline-flex w-fit"
          >
            Open Community
          </Link>
          <p className="text-brand-text-muted">© {new Date().getFullYear()} Above The Stack</p>
        </div>
      </div>
    </footer>
  );
}
