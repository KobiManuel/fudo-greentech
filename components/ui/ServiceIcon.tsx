export function ServiceIcon({
  icon,
  className,
}: {
  icon: "marketing" | "branding" | "software" | "gtm";
  className?: string;
}) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "marketing":
      return (
        <svg {...props}>
          <path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1Z" />
          <path d="M15 8a4 4 0 0 1 0 8" />
          <path d="M17.5 5.5a8 8 0 0 1 0 13" />
        </svg>
      );
    case "branding":
      return (
        <svg {...props}>
          <path d="M12 3 3 8v3c0 5 3.8 8.5 9 10 5.2-1.5 9-5 9-10V8l-9-5Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "software":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="m8 9 2 2-2 2M13 13h3" />
        </svg>
      );
    case "gtm":
      return (
        <svg {...props}>
          <path d="M4 20 20 4" />
          <path d="M9 4h7v7" />
          <path d="M4 15v5h5" />
        </svg>
      );
  }
}
