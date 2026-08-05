import { Container } from "../ui/Container";
import { Marquee } from "../ui/Marquee";
import { clientLogos } from "@/lib/data/misc";

export function TrustedBy() {
  return (
    <section className="border-y border-ink/8 bg-cream-dim/60 py-10">
      <Container>
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
          Trusted by brands building past their first channel
        </p>
      </Container>
      <Marquee>
        {[...clientLogos, ...clientLogos].map((logo, i) => (
          <span
            key={`${logo}-${i}`}
            className="font-display shrink-0 text-2xl font-semibold tracking-tight text-ink/25"
          >
            {logo}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
