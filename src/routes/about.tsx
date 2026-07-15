import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, Stagger, staggerItem } from "@/components/site/Motion";
import { motion } from "motion/react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — ManuQube" },
      { name: "description", content: "ManuQube exists to give manufacturers a real software platform. One system, every operation." },
    ],
  }),
});

const values = [
  { title: "Real-time or nothing", body: "Manufacturing runs in seconds. Our software does too." },
  { title: "One data model", body: "Six products, one identity, one master data spine. No integration tax." },
  { title: "Operator-first", body: "Every screen designed for the person actually using it — with gloves, at 3am." },
  { title: "Open by default", body: "Public webhooks, scoped API keys, self-hostable images. No lock-in." },
];

function About() {
  return (
    <SiteLayout>
      <section className="relative bg-hero border-b border-border">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 relative">
          <Reveal className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-[color:var(--signal)]">About</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tighter">
              We build the platform we <span className="text-gradient">wished existed</span> when we ran plants.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              ManuQube is a manufacturing software company. We build MES, quality, maintenance and order-ops products that share one identity, one data model and one experience — so operations teams stop paying the integration tax.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-[color:var(--signal)]">What we believe</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">Principles that shape every screen.</h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <motion.div key={v.title} variants={staggerItem} className="surface-card p-8">
              <div className="text-xl font-semibold">{v.title}</div>
              <p className="mt-2 text-muted-foreground">{v.body}</p>
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              "The best manufacturing software is invisible — until you try to work without it."
            </h2>
            <p className="mt-4 text-muted-foreground">— The ManuQube team</p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
