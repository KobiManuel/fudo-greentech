export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Susan Eze",
    role: "Founder",
    company: "NAYA",
    quote:
      "Fudo didn't just design a logo. They rebuilt our packaging, our bags, and our storefront around one consistent story. The product finally looks as good as it feels.",
  },
  {
    name: "Tolu Fatoberu",
    role: "Co-Founder",
    company: "Intwit",
    quote:
      "We had a working app and no brand voice. Fudo gave us the doodle system, the tone, and the merch in one sprint, not three separate handoffs.",
  },
  {
    name: "Lawrence Okonji",
    role: "Program Director",
    company: "Play More Football Academy",
    quote:
      "Parents register their kids based on trust. The new crest and site made us look like the established program we actually are, not a weekend side project.",
  },
  {
    name: "Emmanuel Wanja",
    role: "Founder",
    company: "Afrocarb",
    quote:
      "Every other partner wanted to talk about our registry integrations. Fudo asked how a first-time buyer would actually understand a carbon credit. That question shaped the whole product.",
  },
];
