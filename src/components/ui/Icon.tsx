type IconName = "arrow" | "code" | "spark" | "systems" | "cloud" | "compass" | "network" | "layers" | "sun" | "home" | "check";

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  const common = {
    "aria-hidden": true as const,
    className,
    fill: "none",
    width: 24,
    height: 24,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.6,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "arrow":
      return <svg {...common}><path d="M4.75 12h14.5M13 5.75 19.25 12 13 18.25" /></svg>;
    case "code":
      return <svg {...common}><path d="m8.25 7-5 5 5 5M15.75 7l5 5-5 5M14 4.75l-4 14.5" /></svg>;
    case "spark":
      return <svg {...common}><path d="m12 2.75 1.9 6.1 6.1 1.9-6.1 1.9-1.9 6.1-1.9-6.1L4 10.75l6.1-1.9 1.9-6.1Z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" /></svg>;
    case "systems":
      return <svg {...common}><rect x="3.5" y="4" width="7" height="7" rx="1.5" /><rect x="13.5" y="4" width="7" height="7" rx="1.5" /><rect x="3.5" y="14" width="7" height="7" rx="1.5" /><rect x="13.5" y="14" width="7" height="7" rx="1.5" /></svg>;
    case "cloud":
      return <svg {...common}><path d="M7.25 18.5h10.1a4.15 4.15 0 0 0 .48-8.28A6.25 6.25 0 0 0 5.8 8.45a5.1 5.1 0 0 0 1.45 10.05Z" /><path d="m9 13.5 3-3 3 3M12 10.75v6" /></svg>;
    case "compass":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4 5.4-2.2Z" /></svg>;
    case "network":
      return <svg {...common}><circle cx="12" cy="5" r="2.2" /><circle cx="5" cy="18" r="2.2" /><circle cx="19" cy="18" r="2.2" /><path d="m10.9 6.9-4.8 9M13.1 6.9l4.8 9M7.2 18h9.6" /></svg>;
    case "layers":
      return <svg {...common}><path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" /><path d="m3 12 9 4.5 9-4.5M3 16.5l9 4.5 9-4.5" /></svg>;
    case "sun":
      return <svg {...common}><circle cx="12" cy="12" r="3.5" /><path d="M12 2.5v2M12 19.5v2M4.3 4.3l1.4 1.4m12.6 12.6 1.4 1.4M2.5 12h2m15 0h2M4.3 19.7l1.4-1.4M18.3 5.7l1.4-1.4" /></svg>;
    case "home":
      return <svg {...common}><path d="m3.5 10 8.5-7 8.5 7v9.5a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V10Z" /><path d="M9 20.5v-7h6v7" /></svg>;
    case "check":
      return <svg {...common}><path d="m5 12.5 4.3 4.3L19 7" /></svg>;
  }
}
