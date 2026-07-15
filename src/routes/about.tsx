import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, Stagger, staggerItem } from "@/components/site/Motion";
import { motion } from "motion/react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "Company — ManuQube" },
      { name: "description", content: "ManuQube builds industrial software the way factories build machines: predictable, serviceable, documented." },
    ],
  }),
});

const principles = [
  { k: "P.01", title: "Real-time or nothing", body: "Manufacturing runs in seconds. Our software does too. No polling, no stale dashboards, no batch jobs where a stream should be." },
  { k: "P.02", title: "One data model", body: "Five products, one identity, one master data spine. No integration tax, no reconciliation, no shadow spreadsheets." },
  { k: "P.03", title: "Operator-first", body: "Every screen is designed for the person actually using it — with gloves, at 3am, under sodium light, through a scratched touchscreen." },
  { k: "P.04", title: "Open by default", body: "Public webhooks, scoped API keys, self-hostable images, exportable data. No lock-in — because lock-in only feels good until you need to leave." },
];

const timeline = [
  { year: "2019", body: "First MES deployment in a specialty foods plant. The founding team lived on the shop floor for six months." },
  { year: "2021", body: "QMS-1800 released. First multi-plant customer, first regulated food audit passed with zero findings." },
  { year: "2023", body: "RMS-1200 and OMS-4200 released. Suite crosses 100 plants under operation." },
  { year: "2025", body: "WMS-3400 released. Five-system catalog complete. First fully self-hosted docker-compose deployment ships." },
];

function About() {
  return (
    <SiteLayout>
      <section className="relative hairline-b overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-fine opacity-60" />
        <div className="absolute inset-0 bg-vignette" />
        <div className="relative mx-auto max-w-[1400px] px-6 pt-40 pb-24">
          <div className="mono-eyebrow">Company · MQ-CO.01</div>
          <h1 className="mt-4 text-5xl md:text-7xl tracking-tight max-w-4xl">
            We build the platform we <span className="text-gradient-cobalt">wished existed</span> when we ran plants.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            ManuQube is a manufacturing software company. We build five integrated industrial systems that share one identity, one data model and one experience — so operations teams stop paying the integration tax and start compounding gains.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <div className="mono-eyebrow">01 · Principles</div>
            <h2 className="mt-4 text-4xl md:text-5xl tracking-tight">Four rules that shape every screen.</h2>
          </Reveal>
          <div className="md:col-span-8">
            <Stagger className="grid sm:grid-cols-2 gap-px bg-[color:var(--hairline)] hairline">
              {principles.map((p) => (
                <motion.div key={p.k} variants={staggerItem} className="bg-ink p-8">
                  <div className="mono-eyebrow">{p.k}</div>
                  <div className="mt-4 text-xl font-medium">{p.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="hairline-y bg-ink-subtle">
        <div className="mx-auto max-w-[1400px] px-6 py-24 grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <div className="mono-eyebrow">02 · Log</div>
            <h2 className="mt-4 text-4xl md:text-5xl tracking-tight">A short operational log.</h2>
          </Reveal>
          <div className="md:col-span-8">
            <div className="hairline">
              {timeline.map((t, i) => (
                <div key={t.year} className={`grid grid-cols-12 gap-6 p-6 ${i > 0 ? "hairline-t" : ""} ${i % 2 === 0 ? "bg-ink" : "bg-ink-subtle"}`}>
                  <div className="col-span-3 md:col-span-2 font-mono text-[color:var(--cyan)]">{t.year}</div>
                  <div className="col-span-9 md:col-span-10 text-foreground/85">{t.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <Reveal>
          <div className="mono-eyebrow">03 · Position</div>
          <blockquote className="mt-6 text-3xl md:text-5xl tracking-tight leading-[1.15]">
            "The best industrial software is invisible — until you try to work without it."
          </blockquote>
          <div className="mt-6 mono-eyebrow">— The ManuQube team</div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
