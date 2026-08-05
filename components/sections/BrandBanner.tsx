import Image from "next/image";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function BrandBanner() {
  return (
    <section className="relative isolate h-[80vh] max-[700px]:h-[60vh] overflow-hidden py-28 sm:py-36">
      <Image
        src="/images/fudo-main.png"
        alt="Fudo Greentech brand mark on a dark botanical backdrop"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/85" />

      {/* <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <h2 className="font-display max-w-3xl text-3xl font-medium leading-[1.15] tracking-tight text-cream sm:text-5xl">
            Rooted in strategy. Built to grow, branch by branch.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 max-w-lg">
          <p className="text-base leading-relaxed text-cream/65 sm:text-lg">
            Every brand we take on starts from the same root system: clear
            positioning, honest numbers, and a team that stays through the
            second and third season, not just the launch.
          </p>
        </Reveal>
      </Container> */}

      <Reveal
        delay={0.2}
        className="pointer-events-none absolute bottom-8 right-8 hidden sm:block"
      >
        <div className="animate-spin-slow relative h-24 w-24 overflow-hidden rounded-full border border-cream/20 shadow-2xl">
          <Image
            src="/images/fudo-main2.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
