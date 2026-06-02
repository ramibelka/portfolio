import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Marquee } from "@/components/Marquee";
import { SmoothScroll } from "@/components/SmoothScroll";
import { portfolio } from "@/data/portfolio";

const title = `${portfolio.name} - ${portfolio.title}`;
const description = portfolio.tagline;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: portfolio.name,
          jobTitle: portfolio.title,
          email: `mailto:${portfolio.email}`,
          url: portfolio.linkedin,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Constantine",
            addressCountry: "DZ",
          },
          sameAs: [portfolio.github, portfolio.linkedin],
          knowsAbout: portfolio.skills,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Cursor />
      <ScrollProgress />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
