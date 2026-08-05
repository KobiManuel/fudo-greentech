import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "dark" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-lime text-ink hover:bg-lime-dim shadow-[0_0_0_0_rgba(205,250,63,0)] hover:shadow-[0_8px_24px_-4px_rgba(205,250,63,0.5)]",
  dark: "bg-ink text-white hover:bg-forest-light",
  outline:
    "border border-current/25 text-current hover:border-current/60 bg-transparent",
  ghost: "bg-transparent text-current hover:opacity-70",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", className, icon = true } = props;
  const classes = clsx(
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out",
    variants[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <path
            d="M3 11L11 3M11 3H4.5M11 3V9.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={"type" in props && props.type ? props.type : "button"}
      onClick={"onClick" in props ? props.onClick : undefined}
      className={classes}
    >
      {content}
    </button>
  );
}
