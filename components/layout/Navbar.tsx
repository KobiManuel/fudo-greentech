"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { navLinks } from "@/lib/data/misc";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-cream/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(6,19,13,0.08)]"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/fudo-icon.png"
            alt="Fudo Greentech"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            Füdo <span className="text-brand-500">Greentech</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-brand-500",
                pathname === link.href ? "text-brand-600" : "text-ink/75"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" className="!py-2.5">
            Start a Project
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={clsx(
              "h-[1.5px] w-6 bg-current transition-transform duration-300",
              open && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={clsx(
              "h-[1.5px] w-6 bg-current transition-transform duration-300",
              open && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-cream lg:hidden"
          >
            <Container className="flex flex-col gap-1 pb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-ink/10 py-4 text-base font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-5">
                <Button href="/contact">Start a Project</Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
