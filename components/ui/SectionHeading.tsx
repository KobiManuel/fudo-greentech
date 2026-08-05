import { ReactNode } from "react";
import clsx from "clsx";
import { Eyebrow } from "./Tag";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2
          className={clsx(
            "font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={clsx(
              "max-w-xl text-base leading-relaxed text-current/65",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
