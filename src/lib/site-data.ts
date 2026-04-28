export type NavItem = {
  href: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  points: string[];
};

export type ProjectItem = {
  title: string;
  location: string;
  category: string;
  summary: string;
};

export const company = {
  name: "Al Noor Build",
  location: "Muscat, Oman",
  phone: "+968 9000 0000",
  email: "hello@alnoorbuild.om",
  whatsappUrl: "https://wa.me/96890000000",
  tagline: "Construction delivery shaped for Oman’s climate, pace, and standards.",
  description:
    "A modern construction partner for civil works, commercial build-outs, villas, fit-out, and maintenance across Oman.",
};

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/sectors", label: "Sectors" },
  { href: "/quality-safety", label: "Quality & Safety" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "12+", label: "years in Oman" },
  { value: "180+", label: "completed projects" },
  { value: "24/7", label: "site response support" },
  { value: "100%", label: "focus on safe delivery" },
];

export const services: ServiceItem[] = [
  {
    title: "Civil Construction",
    description:
      "Structural and site works executed with strong supervision, dependable timelines, and clean reporting.",
    points: ["Foundations", "Concrete works", "Site preparation"],
  },
  {
    title: "Commercial Build-Out",
    description:
      "Retail, office, and hospitality spaces shaped for brand presentation, daily operations, and handover clarity.",
    points: ["Shell and core works", "Interior execution", "Program coordination"],
  },
  {
    title: "Villa Construction",
    description:
      "End-to-end delivery for private residential builds with close client coordination and premium finishing discipline.",
    points: ["Turnkey villas", "Renovation", "Landscape coordination"],
  },
  {
    title: "MEP & Maintenance",
    description:
      "Mechanical, electrical, plumbing, and post-handover support designed to keep properties operating smoothly.",
    points: ["MEP coordination", "Preventive maintenance", "Emergency support"],
  },
];

export const sectors = [
  {
    title: "Residential",
    description: "Villas, compounds, premium upgrades, and owner-led custom projects.",
  },
  {
    title: "Commercial",
    description: "Corporate interiors, office spaces, retail units, and mixed-use assets.",
  },
  {
    title: "Industrial",
    description: "Facilities requiring disciplined site management, safety culture, and phased execution.",
  },
  {
    title: "Hospitality",
    description: "Guest-facing spaces where finish quality, downtime control, and coordination matter most.",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Muscat Waterfront Office Fit-Out",
    location: "Muscat",
    category: "Commercial",
    summary:
      "A full workplace transformation with phased delivery to keep core operations active throughout execution.",
  },
  {
    title: "Seeb Private Villa Development",
    location: "Seeb",
    category: "Residential",
    summary:
      "A high-spec villa package with structural works, interior finishing, and landscape coordination.",
  },
  {
    title: "Sohar Industrial Service Block",
    location: "Sohar",
    category: "Industrial",
    summary:
      "A practical industrial support build planned around durability, compliance, and minimal downtime.",
  },
];

export const trustSignals = [
  "Dedicated site management and reporting rhythm",
  "Safety-first execution culture",
  "Clear procurement and variation tracking",
  "Built for Oman’s commercial and residential market",
];

export const processSteps = [
  {
    title: "Scope Review",
    description: "We validate the requirement, site constraints, drawings, and decision timeline.",
  },
  {
    title: "Proposal & Costing",
    description: "You receive a clean scope breakdown, assumptions, and a realistic execution path.",
  },
  {
    title: "Delivery",
    description: "The site team executes with schedule visibility, QA checks, and active coordination.",
  },
  {
    title: "Handover & Support",
    description: "We close with punch-list control, documentation, and maintenance support where needed.",
  },
];

export const faqItems = [
  {
    question: "Do you work across Oman?",
    answer: "Yes. The site is structured for Muscat-first positioning while supporting wider Oman service coverage.",
  },
  {
    question: "Can clients request a quotation online?",
    answer: "Yes. The request-a-quote page is designed for detailed lead capture and can later connect to a CRM.",
  },
  {
    question: "Can the website be bilingual?",
    answer: "Yes. Arabic can be added as the next improvement phase with a mirrored content structure.",
  },
];

export const blogPosts = [
  {
    title: "How to structure a contractor website for better lead quality",
    category: "Marketing",
    excerpt:
      "A sample article slot for SEO and thought-leadership content that supports construction buyers in Oman.",
  },
  {
    title: "What commercial clients look for before contacting a contractor",
    category: "Commercial",
    excerpt:
      "Use this space for project updates, market notes, or short trust-building articles tied to real work.",
  },
  {
    title: "Why safety and QA deserve their own website section",
    category: "Operations",
    excerpt:
      "A dedicated content stream can support credibility while keeping the site active for search and returning visitors.",
  },
];
