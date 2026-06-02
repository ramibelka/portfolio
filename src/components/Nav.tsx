import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight inline-flex items-center min-h-[44px] min-w-[44px]"
        >
          <span className="text-accent">{"//"}</span>
          <span className="ml-2">{portfolio.name.split(" ")[0].toLowerCase()}</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-accent transition-colors py-3 inline-block"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 h-11 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Hire me
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-11 w-11 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-6 bg-foreground ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <ul className="px-6 py-4 flex flex-col gap-1 font-mono text-sm uppercase tracking-widest">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 min-h-[44px] text-muted-foreground hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
