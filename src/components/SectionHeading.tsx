import { motion } from "framer-motion";

export function SectionHeading({
  title,
  kicker,
}: {
  title: string;
  kicker?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-20 flex items-end justify-between gap-6 border-b border-border pb-6"
    >
      <div>
        {kicker && (
          <div className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
            {kicker}
          </div>
        )}
        <h2 className="font-mono font-medium text-4xl md:text-6xl tracking-tighter">{title}</h2>
      </div>
    </motion.div>
  );
}
