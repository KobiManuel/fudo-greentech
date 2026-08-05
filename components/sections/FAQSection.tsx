import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Accordion } from "../ui/Accordion";
import { faqs } from "@/lib/data/faq";

export function FAQSection() {
  return (
    <section className="py-24">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.4fr]">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we hear before kickoff."
            description="Everything you'd want to know before the first strategy call. Anything else, just ask."
          />
          <Reveal delay={0.15} className="mt-8">
            <Button href="/contact" variant="dark">
              Contact Us
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion items={faqs} />
        </Reveal>
      </Container>
    </section>
  );
}
