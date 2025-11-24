import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
} & (
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
);

export function PrimaryButton({ children, className, href, ...props }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={cn("btn-primary", className)} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cn("btn-primary", className)} {...props}>
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className, href, ...props }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={cn("btn-secondary", className)} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cn("btn-secondary", className)} {...props}>
      {children}
    </button>
  );
}
