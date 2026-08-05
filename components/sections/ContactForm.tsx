"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "../ui/Button";

const FORMSPREE_ID = "xjybvwab";

const services = [
  "Marketing",
  "Branding",
  "Software Development",
  "Go-to-Market Strategy",
  "Not sure yet",
];

export function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [service, setService] = useState<string | null>(null);

  return (
    <div className="rounded-[2rem] border border-ink/10 bg-white p-8 sm:p-10">
      <AnimatePresence mode="wait">
        {state.succeeded ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lime text-ink">
              <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                <path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="font-display mt-6 text-2xl font-medium">
              Message sent.
            </h3>
            <p className="mt-2 max-w-xs text-sm text-ink/55">
              We reply to every project inquiry within one business day.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full name" name="name" placeholder="Ada Lovelace" />
              <div>
                <Field
                  label="Work email"
                  name="email"
                  type="email"
                  placeholder="ada@company.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-1.5 block text-xs text-red-500"
                />
              </div>
            </div>
            <Field label="Company" name="company" placeholder="Company name" />

            <div>
              <label className="mb-2 block text-sm font-medium text-ink/70">
                What do you need help with?
              </label>
              <input type="hidden" name="service" value={service ?? ""} />
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <ServiceChip
                    key={s}
                    label={s}
                    active={service === s}
                    onClick={() => setService(service === s ? null : s)}
                  />
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-ink/70"
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your timeline, goals, and budget range."
                className="w-full resize-none rounded-2xl border border-ink/15 bg-cream/40 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-400"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-1.5 block text-xs text-red-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full justify-center"
              icon={!state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-full border border-ink/15 bg-cream/40 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-400"
      />
    </div>
  );
}

function ServiceChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 ${
        active
          ? "border-brand-400 bg-brand-50 text-brand-700"
          : "border-ink/15 text-ink/60 hover:border-ink/35"
      }`}
    >
      {label}
    </button>
  );
}
