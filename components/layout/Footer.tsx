import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";
import { navLinks } from "@/lib/data/misc";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Marketing", href: "/services#marketing" },
      { label: "Branding", href: "/services#branding" },
      { label: "Software Development", href: "/services#software-development" },
      { label: "Go-to-Market Strategy", href: "/services#go-to-market" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Pricing", href: "/pricing" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "hello@fudogreentech.com", href: "mailto:hello@fudogreentech.com" },
      { label: "+234 901 184 0361", href: "tel:+2349011840361" },
    ],
  },
];

const socials = [
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Dribbble", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <Image
          src="/images/fudo-food8a.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-brand-500/20 blur-[120px]" />

      <Container className="relative py-20">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_2fr]">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/fudo-icon.png"
                alt="Fudo Greentech"
                width={34}
                height={34}
              />
              <span className="font-display text-xl font-semibold tracking-tight">
                Füdo Greentech
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-cream/60">
              A full-service growth partner handling marketing, branding,
              software development, and go-to-market strategy end to end.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-xs transition-colors hover:border-lime hover:text-lime"
                >
                  {s.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/45">
                  {col.title}
                </span>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-cream/75 transition-colors hover:text-lime"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream/45">
            © {new Date().getFullYear()} Fudo Greentech. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-cream/45 transition-colors hover:text-lime"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
