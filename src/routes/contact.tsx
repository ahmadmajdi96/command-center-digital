import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Motion";
import { motion } from "motion/react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — ManuQube" },
      { name: "description", content: "Talk to the ManuQube team. Book a demo, ask a technical question, or start a pilot." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="relative bg-hero border-b border-border">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 relative">
          <Reveal className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-[color:var(--signal)]">Contact</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tighter">
              Let's <span className="text-gradient">talk operations.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Tell us about your plant, your team and what's slowing you down. We'll come back within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={onSubmit}
          className="surface-card p-8 space-y-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Work email" name="email" type="email" required />
          </div>
          <Field label="Company" name="company" />
          <Field label="Role" name="role" />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">What's the challenge?</label>
            <textarea
              name="message"
              rows={5}
              className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-[color:var(--electric)] transition"
              placeholder="Tell us about your lines, teams and what you're trying to solve."
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground glow-primary disabled:opacity-70"
            style={{ background: sent ? "var(--gradient-signal)" : "var(--gradient-brand)" }}
          >
            {sent ? (<><Check className="size-4" /> Thanks — we'll be in touch.</>) : (<>Send message <Send className="size-4" /></>)}
          </button>
        </motion.form>

        <div className="space-y-8">
          <Reveal>
            <div className="surface-card p-8">
              <Mail className="size-6 text-[color:var(--electric-glow)]" />
              <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Email</div>
              <a href="mailto:hello@manuqube.com" className="mt-1 block text-xl font-semibold hover:text-[color:var(--electric-glow)]">hello@manuqube.com</a>
              <p className="mt-2 text-sm text-muted-foreground">For sales, partnerships and technical questions.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="surface-card p-8">
              <MapPin className="size-6 text-[color:var(--signal-glow)]" />
              <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Worldwide</div>
              <div className="mt-1 text-xl font-semibold">Remote-first, plant-close.</div>
              <p className="mt-2 text-sm text-muted-foreground">We work with manufacturers across EU, MENA and North America.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-[color:var(--electric)] transition"
      />
    </div>
  );
}
