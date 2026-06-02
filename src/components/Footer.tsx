import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row gap-4 items-center justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span>© {new Date().getFullYear()} {portfolio.name}</span>
        <span>
          Built with React + Vite · <span className="text-accent">{portfolio.location}</span>
        </span>
      </div>
    </footer>
  );
}
