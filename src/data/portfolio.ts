import emploriumImg from "@/assets/emplorium-1.png";
import erpImg from "@/assets/erp-placeholder.jpg";
import ventiImg from "@/assets/venti-ecommerce.jpeg";
import executiveHospitalityImg from "@/assets/executive-hospitality-1.png";
import cvPdf from "@/assets/rami-belkeddas-cv.pdf?url";

export type Project = {
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  images: string[];
  live: string | null;
  repo: string | null;
};

export const portfolio = {
  name: "Rami Belkeddas",
  title: "Frontend Developer",
  location: "Constantine, Algeria",
  email: "rami.belkeddas@gmail.com",
  github: "https://github.com/ramibelka",
  linkedin: "https://www.linkedin.com/in/rami-belkeddas-bb6797218/",
  availability: "Open to full-time roles",
  cv: cvPdf,
  tagline:
    "I build responsive, scalable web interfaces with clean code and a sharp eye for user experience.",
  bio: "I'm a frontend developer with a master's degree in information systems and 2+ years of hands-on experience shipping production-grade React applications. I care deeply about clean architecture, fast load times, and interfaces that feel effortless to use.",
  bioPoints: [
    "Currently building a multi-tenant cloud ERP SaaS at Cirta Soft - complex data grids, role-based access control, and full RTL/i18n support.",
    "Comfortable owning a feature end-to-end: from Figma handoff and component architecture to performance budgets, accessibility, and release.",
    "Strong eye for design systems, micro-interactions, and the small details that separate good products from great ones.",
    "Fast learner, calm under deadlines, and obsessed with developer experience - TypeScript-first, well-tested, well-documented.",
  ],
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Redux Toolkit",
    "REST APIs",
    "HTML5 / CSS3",
    "Git / GitHub",
    "Responsive Design",
  ],
  marquee: [
    "Frontend Developer",
    "React Specialist",
    "TypeScript",
    "Motion / Animation",
    "Design Systems",
    "Performance",
    "Accessibility",
    "DX-obsessed",
  ],
  projects: [
    {
      name: "Emplorium - CRM Platform",
      description:
        "Modern omnichannel customer support CRM with AI agents and unified inbox.",
      longDescription:
        "Contributed to Emplorium, a production CRM platform unifying email, web chat, WhatsApp, and Facebook into a single inbox alongside AI agents. My work covered the deal pipeline (Kanban with drag-and-drop), activity timelines, role-based dashboards, and the notification center. Heavy emphasis on reusable component patterns, accessible keyboard navigation, and reducing re-renders on large data sets through memoization and virtualization.",
      tech: ["React", "Redux Toolkit", "TypeScript", "Tailwind", "REST"],
      images: [emploriumImg],
      live: "https://www.emplorium.io/",
      repo: null,
    },
    {
      name: "Cloud ERP SaaS",
      description:
        "Internal enterprise ERP with complex data grids, RBAC, and full RTL / i18n support.",
      longDescription:
        "An in-development multi-tenant ERP platform at Cirta Soft covering finance, HR, inventory, and procurement. I work on highly dynamic data grids (sorting, grouping, inline editing, virtualized rows), permission-driven UI rendering tied to a fine-grained RBAC system, and a multi-language layer with full RTL support for Arabic. The architecture uses a strict TypeScript model, feature-sliced folders, and Redux Toolkit Query for cache-aware data fetching.",
      tech: ["React", "TypeScript", "Redux Toolkit", "DevExtreme", "SCSS", "i18next"],
      images: [erpImg],
      live: null,
      repo: null,
    },
    {
      name: "Venti - E-commerce Marketplace",
      description:
        "Full peer-to-peer marketplace with product feed, search, and seller dashboard.",
      longDescription:
        "A peer-to-peer fashion marketplace where users can list items across Men, Women, Kids, and Sports categories. The storefront features a fast product feed with categories and search, per-listing pages with social interactions (likes, comments, bookmarks), and a seller dashboard for managing listings. Built mobile-first with skeleton loaders, optimistic UI updates, and image lazy-loading to keep Lighthouse scores above 95.",
      tech: ["React", "TypeScript", "Tailwind", "REST", "Node.js"],
      images: [ventiImg],
      live: null,
      repo: null,
    },
    {
      name: "Executive Hospitality - Landing Page",
      description:
        "Luxury chauffeur, security, and concierge brand site with cinematic hero.",
      longDescription:
        "A pixel-perfect, conversion-focused landing page for a London-based luxury hospitality brand. Cinematic full-bleed hero, scroll-triggered storytelling with Framer Motion, refined editorial typography, and dedicated sections for services, fleet, and contact. Fully responsive, SEO-optimised with meta and structured data, and consistently Lighthouse 95+ across performance, accessibility, best practices, and SEO. One of several landing pages I've shipped for SaaS, agencies, and event campaigns.",
      tech: ["Next.js", "React", "Framer Motion", "Tailwind", "TypeScript"],
      images: [executiveHospitalityImg],
      live: "https://executive-hospitality-company.vercel.app/",
      repo: null,
    },
  ] as Project[],
} as const;
