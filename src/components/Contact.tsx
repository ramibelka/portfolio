import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\n- ${data.get("name")} (${data.get("email")})`,
    );
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-10">
      <SectionHeading title="Let's talk" kicker="Contact" />

      <div className="grid md:grid-cols-5 gap-10 md:gap-16">
        <div className="md:col-span-2 flex flex-col gap-8">
          <p className="text-xl text-foreground/90 leading-relaxed">
            Have a project in mind, a role to fill, or just want to say hi? My inbox is open.
          </p>

          <a
            href={`mailto:${portfolio.email}`}
            className="font-mono text-lg md:text-2xl break-all hover:text-accent transition-colors inline-flex items-start gap-3"
          >
            <Mail className="h-5 w-5 mt-1.5 shrink-0 text-accent" />
            {portfolio.email}
          </a>

          <div className="flex gap-2">
            {[
              { href: portfolio.github, icon: Github, label: "GitHub" },
              { href: portfolio.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${portfolio.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="h-12 w-12 inline-flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 flex flex-col gap-5"
        >
          {[
            { name: "name", label: "Name", type: "text" },
            { name: "email", label: "Email", type: "email" },
          ].map((f) => (
            <label key={f.name} className="block">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                {f.label}
              </span>
              <input
                required
                type={f.type}
                name={f.name}
                className="w-full h-12 bg-transparent border-b border-border focus:border-accent outline-none px-1 text-foreground"
              />
            </label>
          ))}
          <label className="block">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
              Message
            </span>
            <textarea
              required
              name="message"
              rows={5}
              className="w-full bg-transparent border-b border-border focus:border-accent outline-none px-1 py-2 text-foreground resize-none"
            />
          </label>

          <button
            type="submit"
            className="self-start mt-4 inline-flex items-center gap-2 h-12 px-7 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest hover:opacity-90 transition"
          >
            {sent ? "Sent" : "Send Message"}
            <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
