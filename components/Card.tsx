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
    <div className={cn("card-surface h-full p-6 md:p-7", className)}>
      <div className="flex items-start justify-between gap-3">
        <div>
          {tag && (
            <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
              {tag}
            </span>
          )}
        </div>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-muted">{description}</p>
      {children && <div className="mt-4 text-sm text-white/90">{children}</div>}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block transition duration-200 hover:-translate-y-1 hover:shadow-subtle">
        {content}
      </Link>
    );
  }

  return content;
}
