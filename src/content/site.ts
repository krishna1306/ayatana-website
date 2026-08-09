export const site = {
  name: "Ayatana",
  description: "Ayatana: Luxury living. Thoughtfully managed.",
  email: "hello@ayatana.in",
  phone: "+91 80 0000 0000",
  location: "Bengaluru, India",
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Ayatana" },
  ],
  services: [
    {
      title: "General staffing",
      description: "Dependable, well-presented people for the roles that keep your property running with ease.",
    },
    {
      title: "Security",
      description: "Attentive protection, vigilant access control, and a reassuring presence around the clock.",
    },
    {
      title: "Housekeeping",
      description: "Impeccably maintained environments that feel considered from the first arrival to the last detail.",
    },
  ],
  industries: [
    {
      title: "Commercial",
      description: "Professional environments where people, presentation, and performance must move together.",
    },
    {
      title: "Residential",
      description: "Elevated daily living, supported by a responsive team that understands the value of home.",
    },
    {
      title: "Hospitality",
      description: "Guest experiences shaped by quiet precision, thoughtful care, and immaculate standards.",
    },
  ],
} as const;
