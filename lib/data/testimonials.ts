export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Amara Chen",
    role: "Co-Founder",
    company: "Rootwell",
    quote:
      "Fudo didn't just hand us a strategy deck and disappear. They sat inside our funnel, found where we were bleeding traffic, and fixed it. We out-rank competitors ten times our size now.",
    image: "/images/crops/video-quote-thumb.jpg",
  },
  {
    name: "David Osei",
    role: "Head of Growth",
    company: "Bloomly",
    quote:
      "We had six months to build a brand, an app, and a launch plan at the same time. Fudo ran all three like it was one project, not three vendors fighting for priority.",
    image: "/images/crops/founder-portrait.jpg",
  },
  {
    name: "Marcus Bell",
    role: "COO",
    company: "Norwood & Co.",
    quote:
      "Rebranding a 100-year-old bank is not a small ask. They kept what our long-time customers trusted and made it feel inevitable to everyone under 35.",
    image: "/images/crops/blob-orange-man.jpg",
  },
  {
    name: "Lena Voss",
    role: "Founder",
    company: "Ikaru Botanics",
    quote:
      "Every other agency wanted to run our ads. Fudo asked why our repeat purchase rate was low first. That question changed the whole engagement, and the P&L.",
    image: "/images/crops/orange-portrait.jpg",
  },
];
