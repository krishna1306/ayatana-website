export const site = {
  name: "Ayatana",
  description: "Facility management services designed for dependable, healthier workplaces.",
  email: "hello@ayatana.in",
  phone: "+91 80 0000 0000",
  location: "Bengaluru, India",
  navigation: [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    {
      title: "Integrated facility management",
      description: "One accountable team for the daily details that keep your premises dependable.",
    },
    {
      title: "Workplace operations",
      description: "Front-of-house, support staffing, and service coordination tuned to your workplace.",
    },
    {
      title: "Technical maintenance",
      description: "Planned maintenance and responsive support to help critical systems stay ready.",
    },
  ],
} as const;
