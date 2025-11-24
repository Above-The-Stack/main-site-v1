import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  description: string;
  tag?: string;
  href?: string;
  children?: ReactNode;
  className?: string;
};

export function Card({ title, description, tag, href, children, className }: CardProps) {
  const content = (
    <div className={cn("card-surface relative h-full overflow-hidden p-7 md:p-8", className)}>
      <div className="pointer-events-none absolute -left-16 -top-16 h-32 w-32 rounded-full bg-brand-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-14 -right-16 h-40 w-40 rounded-full bg-brand-accent/25 blur-3xl" />
      <div className="relative flex items-center justify-between gap-3">
        <div className="space-y-2">
          {tag && (
            <span className="inline-flex items-center rounded-pill border border-brand-border-subtle bg-brand-surface-soft/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-accent">
              {tag}
            </span>
          )}
          <h3 className="text-xl font-semibold text-brand-text md:text-2xl">{title}</h3>
        </div>
        {href && <span className="text-sm text-brand-text-muted">↗</span>}
      </div>
      <p className="mt-3 text-base text-brand-text-muted md:text-lg">{description}</p>
      {children && <div className="mt-5 text-sm text-brand-text md:text-base">{children}</div>}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block transition duration-200 hover:-translate-y-1 hover:shadow-soft">
        {content}
      </Link>
    );
  }

  return content;
}
