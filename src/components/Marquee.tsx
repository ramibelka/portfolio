import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export function Marquee() {
  const items = [...portfolio.marquee, ...portfolio.marquee];
  return (
    <div className="relative border-y border-border py-6 md:py-8 overflow-hidden bg-background">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {items.map((s, i) => (
          <span
            key={i}
            className="font-mono text-3xl md:text-6xl tracking-tighter uppercase text-foreground/80 flex items-center gap-12"
          >
            {s}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
