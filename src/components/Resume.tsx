import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Resume() {
  return (
    <section id="resume" className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-10">
      <SectionHeading title="Resume" kicker="Download CV" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative border border-border p-8 md:p-12 overflow-hidden group"
      >
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
          style={{ background: "radial-gradient(circle, var(--color-accent), transparent 60%)" }}
        />

        <div className="relative grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 space-y-5">
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <FileText className="h-4 w-4 text-accent" />
              PDF · Up to date
            </div>
            <h3 className="font-mono text-3xl md:text-5xl tracking-tighter leading-tight">
              Grab my <span className="text-accent">resume</span>.
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              A one-page overview of my experience, stack, and selected projects - ready to share
              with your hiring team.
            </p>
          </div>

          <div className="md:col-span-2 flex md:justify-end">
            <motion.a
              href={portfolio.cv}
              download="Rami-Belkeddas-CV.pdf"
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group/btn relative inline-flex items-center gap-3 h-14 px-8 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest overflow-hidden"
            >
              <span className="relative z-10">Download CV</span>
              <Download className="relative z-10 h-4 w-4 transition-transform group-hover/btn:translate-y-0.5" />
              <span className="absolute inset-0 bg-foreground translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              <span className="absolute inset-0 mix-blend-difference" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
