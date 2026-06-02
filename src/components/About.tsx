import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-10">
      <SectionHeading title="About" kicker="Who I am" />

      <div className="grid md:grid-cols-5 gap-10 md:gap-16">
        <div className="md:col-span-3 space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl leading-snug tracking-tight text-foreground"
          >
            {portfolio.bio}
          </motion.p>

          <ul className="space-y-5">
            {portfolio.bioPoints.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                <span className="mt-2 h-2 w-2 shrink-0 bg-accent" />
                <span>{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-5">
            Stack
          </div>
          <ul className="grid grid-cols-2 gap-px bg-border border border-border">
            {portfolio.skills.map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-background p-5 font-mono text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                <span className="text-accent mr-2">·</span>
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
