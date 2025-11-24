import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  className?: string;
  href: string;
};

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  href?: undefined;
};

type ButtonProps = AnchorButtonProps | NativeButtonProps;

export function PrimaryButton({ children, className, href, ...props }: ButtonProps) {
  if (href) {
    const anchorProps = props as Omit<AnchorButtonProps, "children" | "className" | "href">;

    return (
      <Link href={href} className={cn("btn-primary", className)} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn("btn-primary", className)}
      {...(props as NativeButtonProps)}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className, href, ...props }: ButtonProps) {
  if (href) {
    const anchorProps = props as Omit<AnchorButtonProps, "children" | "className" | "href">;

    return (
      <Link href={href} className={cn("btn-secondary", className)} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn("btn-secondary", className)}
      {...(props as NativeButtonProps)}
    >
      {children}
    </button>
  );
}
