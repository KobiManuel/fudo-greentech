import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. We reply to every inquiry within one business day.",
};

const contactPoints = [
  { label: "Email", value: "hello@fudogreentech.com", href: "mailto:hello@fudogreentech.com" },
  { label: "Phone", value: "+234 901 184 0361", href: "tel:+2349011840361" },
  { label: "Studio", value: "Victoria Garden City, Lagos, Nigeria", href: "#" },
];

export default function ContactPage() {
  return (
    <section className="pt-14 pb-24 sm:pt-20">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <Reveal>
            <Eyebrow>Get In Touch</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display mt-5 text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
              Let&rsquo;s build something that compounds.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60">
              Whether you need one service track or all four, tell us where
              you're stuck and we'll come back with a point of view before
              the first call.
            </p>
          </Reveal>

          <Reveal delay={0.18} className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-forest">
            <Image
              src="/images/crops/orange-portrait.jpg"
              alt="Fudo Greentech studio"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </Reveal>

          <Reveal delay={0.24} className="mt-8 flex flex-col gap-4">
            {contactPoints.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center justify-between border-b border-ink/10 pb-4 text-sm"
              >
                <span className="text-ink/45">{c.label}</span>
                <span className="font-medium">{c.value}</span>
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
