import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">{children}</div>
    </section>
  );
}
