import { ReactNode } from "react";
import clsx from "clsx";

export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-current/15 px-4 py-1.5 text-xs font-medium uppercase tracking-wider",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
      {children}
    </span>
  );
}
