import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { portfolio, type Project } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const has = images.length > 1;
  const go = (d: number) => setI((p) => (p + d + images.length) % images.length);
  const isLoaded = !!loaded[i];

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-muted border border-border">
      {/* Shimmer placeholder */}
      <div
        aria-hidden
        className={`absolute inset-0 transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            "linear-gradient(110deg, color-mix(in oklab, var(--color-muted) 80%, transparent) 30%, color-mix(in oklab, var(--color-accent) 18%, transparent) 50%, color-mix(in oklab, var(--color-muted) 80%, transparent) 70%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.6s linear infinite",
        }}
      />
      <AnimatePresence mode="wait">
        <motion.img
          key={images[i]}
          src={images[i]}
          alt={`${alt} - screenshot ${i + 1}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded((m) => ({ ...m, [i]: true }))}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.04 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </AnimatePresence>

      {has && (
        <>
          <button
            aria-label="Previous image"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center bg-background/70 backdrop-blur text-foreground hover:bg-accent hover:text-accent-foreground transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next image"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center bg-background/70 backdrop-blur text-foreground hover:bg-accent hover:text-accent-foreground transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to image ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 transition-all ${
                  idx === i ? "w-6 bg-accent" : "w-2 bg-foreground/40 hover:bg-foreground/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectRow({ p, i }: { p: Project; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
        i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
      }`}
    >
      <div className="md:col-span-7">
        <Gallery images={p.images} alt={p.name} />
      </div>

      <div className="md:col-span-5 flex flex-col gap-5">
        <div className="font-mono text-xs uppercase tracking-widest text-accent">
          {p.description}
        </div>
        <h3 className="font-mono text-3xl md:text-4xl tracking-tight leading-tight">{p.name}</h3>
        <p className="text-muted-foreground leading-relaxed">{p.longDescription}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1.5 border border-border text-muted-foreground hover:border-accent hover:text-foreground transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer noopener"
            className="group/link mt-2 inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-widest text-foreground border-b border-accent pb-1 hover:text-accent transition-colors"
          >
            Visit live site
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-10">
      <SectionHeading title="Selected Work" kicker="Projects" />
      <div className="flex flex-col gap-24 md:gap-32">
        {portfolio.projects.map((p, i) => (
          <ProjectRow key={p.name} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
