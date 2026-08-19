import Image from "next/image";
import { Container } from "../ui/Container";
import { Marquee } from "../ui/Marquee";
import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/Tag";
import { Reveal } from "../ui/Reveal";

const badges = [
  { label: "140+ Brands Grown", top: "10%", left: "12%" },
  { label: "96% Client Retention", top: "8%", right: "10%" },
  { label: "Embedded Pod Model", bottom: "12%", left: "16%" },
  { label: "9 Years Compounding", bottom: "8%", right: "14%" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-8 sm:pt-16">
      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>Software · Branding · Marketing · Go-to-Market</Eyebrow>
        </Reveal>

        <Reveal delay={0.08} className="mt-5">
          <h1 className="font-display max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            We grow brands
            <br />
            from <span className="text-brand-500">root</span> to market.
          </h1>
        </Reveal>

        <Reveal delay={0.16} className="mt-5 max-w-xl">
          <p className="text-base leading-relaxed text-ink/60 sm:text-lg">
            Fudo Greentech builds the software great brands run on, then
            backs it with the identity, marketing, and launch strategy to
            take it to market as one thing, not four separate vendors.
          </p>
        </Reveal>

        <Reveal delay={0.22} className="mt-7 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact" className="!px-7 !py-3.5 text-base">
            Start a Project
          </Button>
          <Button href="/work" variant="outline" className="!px-7 !py-3.5 text-base">
            See Our Work
          </Button>
        </Reveal>
      </Container>

      <Reveal delay={0.28} className="relative mt-4 w-full">
        <div className="relative flex h-[300px] w-full items-center justify-center sm:h-[420px] lg:h-[540px]">
          <div
            aria-hidden
            className="font-display pointer-events-none absolute inset-x-0 top-1/2 w-full -translate-y-1/2 select-none text-[5rem] font-semibold uppercase leading-none tracking-tight text-ink/[0.06] sm:text-[8rem] lg:text-[11rem]"
          >
            <Marquee>
              <span className="pr-10">Growth · Strategy · Brand · Growth · Strategy · Brand</span>
            </Marquee>
          </div>

          <div className="relative z-10 h-full w-auto">
            <Image
              src="/images/perfect-crops/2710.png"
              alt="Fudo Greentech strategists reviewing a growth plan"
              width={1090}
              height={852}
              priority
              className="h-full w-auto object-contain drop-shadow-2xl"
            />
          </div>

          {badges.map((b) => (
            <span
              key={b.label}
              style={{
                top: b.top,
                bottom: b.bottom,
                left: b.left,
                right: b.right,
              }}
              className="absolute z-20 hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-ink shadow-lg shadow-ink/5 sm:flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              {b.label}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
