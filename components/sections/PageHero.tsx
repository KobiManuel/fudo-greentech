import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Tag";
import { Reveal } from "../ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-brand-300/20 blur-[130px]" />
      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08} className="mt-6">
          <h1 className="font-display max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight sm:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16} className="mt-6 max-w-xl">
            <p className="text-lg leading-relaxed text-ink/60">
              {description}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
