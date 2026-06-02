import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const CHARS = "!<>-_\\/[]{}=+*^?#________";

function Scramble({ text, trigger }: { text: string; trigger: number }) {
  const [out, setOut] = useState(text);
  useEffect(() => {
    let frame = 0;
    let raf = 0;
    const queue = text.split("").map((c, i) => ({
      from: out[i] ?? "",
      to: c,
      start: Math.floor(Math.random() * 20),
      end: 20 + Math.floor(Math.random() * 40),
      char: "",
    }));
    const tick = () => {
      let s = "";
      let done = 0;
      for (const q of queue) {
        if (frame >= q.end) {
          done++;
          s += q.to;
        } else if (frame >= q.start) {
          if (!q.char || Math.random() < 0.28)
            q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
          s += q.char;
        } else s += q.from;
      }
      setOut(s);
      if (done < queue.length) {
        frame++;
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, text]);
  return <span>{out}</span>;
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const orb1x = useTransform(sx, (v) => v * 40);
  const orb1y = useTransform(sy, (v) => v * 40);
  const orb2x = useTransform(sx, (v) => v * -60);
  const orb2y = useTransform(sy, (v) => v * -60);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTrigger((n) => n + 1), 5000);
    return () => clearInterval(t);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <motion.div
        aria-hidden
        style={{ x: orb1x, y: orb1y }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, var(--color-accent), transparent 60%)" }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: orb2x, y: orb2y }}
        className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full blur-3xl opacity-20"
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 65%)" }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          {portfolio.availability}
        </motion.div>

        <h1 className="font-mono font-medium leading-[0.95] tracking-tighter text-[clamp(2.75rem,10vw,9rem)]">
          {portfolio.name.split(" ").map((word, i) => (
            <motion.span
              key={word}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block overflow-hidden mr-[0.2em]"
            >
              <motion.span
                className="inline-block"
                whileHover={{ skewX: -8, color: "var(--color-accent)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {word}
              </motion.span>
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 md:mt-14 grid md:grid-cols-2 gap-8 md:gap-16 items-end"
        >
          <div>
            <span className="text-accent font-mono text-sm uppercase tracking-widest block mb-3 h-5">
              {"// "}
              <Scramble text={portfolio.title} trigger={trigger} />
            </span>
            <p className="text-lg md:text-xl text-foreground/90 max-w-xl leading-relaxed">
              {portfolio.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#work"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2 h-12 px-6 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest overflow-hidden"
              >
                <span className="relative z-10">View Work</span>
                <ArrowDownRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="absolute inset-0 mix-blend-difference" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 h-12 px-6 border border-border text-foreground font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition"
              >
                Hire Me
              </motion.a>
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              {portfolio.location}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-8 w-px bg-accent"
          />
        </motion.div>
      </div>
    </section>
  );
}
