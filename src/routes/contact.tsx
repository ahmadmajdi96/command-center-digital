import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send, Check, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Motion";
import { motion } from "motion/react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — ManuQube" },
      { name: "description", content: "Talk to ManuQube engineering. Book a technical demo or start a pilot." },
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
      <section className="relative hairline-b overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-fine opacity-60" />
        <div className="absolute inset-0 bg-vignette" />
        <div className="relative mx-auto max-w-[1400px] px-6 pt-40 pb-24">
          <div className="mono-eyebrow">Contact · MQ-CT.01</div>
          <h1 className="mt-4 text-5xl md:text-7xl tracking-tight max-w-3xl">
            Let's talk <span className="text-gradient-cobalt">operations.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Tell us about your plant, your team and what's slowing you down. We come back within one business day — from an engineer, not from a sales pipeline.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 grid md:grid-cols-12 gap-10">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={onSubmit}
          className="md:col-span-8 hairline bg-ink-subtle p-8 md:p-10"
        >
          <div className="mono-eyebrow">Form · CT-REQ-01</div>
          <h2 className="mt-3 text-3xl tracking-tight">Request a technical demo</h2>

          <div className="mt-8 grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Work email" name="email" type="email" required />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Company" name="company" />
              <Field label="Role" name="role" />
            </div>
            <Field label="Plant / site (city)" name="site" />
            <div>
              <label className="mono-eyebrow">What's the challenge?</label>
              <textarea
                name="message"
                rows={5}
                className="mt-3 w-full bg-transparent hairline-b border-0 border-b px-0 py-3 text-sm outline-none focus:border-[color:var(--cobalt)] resize-none transition"
                placeholder="Tell us about your lines, teams and what you're trying to solve."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={sent}
            className="mt-10 inline-flex items-center gap-2 bg-[color:var(--cobalt)] hover:bg-[color:var(--cobalt-deep)] text-white px-7 h-12 text-sm font-medium disabled:opacity-70 transition"
          >
            {sent ? (<><Check className="size-4" /> Thanks — we'll be in touch.</>) : (<>Send request <Send className="size-4" /></>)}
          </button>
        </motion.form>

        <div className="md:col-span-4 space-y-4">
          <Reveal>
            <div className="hairline p-6 bg-ink">
              <Mail className="size-6 text-[color:var(--cyan)]" strokeWidth={1.4} />
              <div className="mt-5 mono-eyebrow">Email</div>
              <a href="mailto:hello@manuqube.com" className="mt-2 block text-lg font-medium hover:text-[color:var(--cyan)]">hello@manuqube.com</a>
              <p className="mt-2 text-xs text-muted-foreground">Sales, partnerships, technical.</p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="hairline p-6 bg-ink">
              <Phone className="size-6 text-[color:var(--cyan)]" strokeWidth={1.4} />
              <div className="mt-5 mono-eyebrow">Phone</div>
              <div className="mt-2 font-mono text-sm">+34 · 900 · 000 · 000</div>
              <p className="mt-2 text-xs text-muted-foreground">Mon–Fri · 09:00–19:00 CET</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="hairline p-6 bg-ink">
              <MapPin className="size-6 text-[color:var(--cyan)]" strokeWidth={1.4} />
              <div className="mt-5 mono-eyebrow">Offices</div>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground/85 font-mono">
                <li>Barcelona · ES</li>
                <li>Amsterdam · NL</li>
                <li>Dubai · AE</li>
              </ul>
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
      <label className="mono-eyebrow">{label}</label>
      <input
        {...props}
        className="mt-3 w-full bg-transparent hairline-b border-0 border-b px-0 py-3 text-sm outline-none focus:border-[color:var(--cobalt)] transition"
      />
    </div>
  );
}
