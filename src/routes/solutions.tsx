import { createFileRoute, Link } from "@tanstack/react-router";
import { Beef, FlaskConical, Cog, Pill, Cpu, Wine } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, Stagger, staggerItem } from "@/components/site/Motion";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  component: Solutions,
  head: () => ({
    meta: [
      { title: "Solutions by industry — ManuQube" },
      { name: "description", content: "ManuQube in food & beverage, pharma, chemical, industrial equipment, electronics and contract manufacturing." },
    ],
  }),
});

const industries = [
  {
    icon: Beef,
    code: "IND-01",
    name: "Food & Beverage",
    body: "HACCP-ready quality, batch genealogy, allergen control, spec-driven inspections and paperless line execution — even under wash-down conditions.",
    stack: ["MES", "QMS", "WMS"],
    result: "First-pass yield +9 pts",
  },
  {
    icon: Pill,
    code: "IND-02",
    name: "Pharmaceutical",
    body: "Recipe versioning, e-signatures, audit trails and full unit-level traceability — 21 CFR Part 11 compatible from day one.",
    stack: ["RMS", "MES", "QMS"],
    result: "Audit prep in hours",
  },
  {
    icon: FlaskConical,
    code: "IND-03",
    name: "Chemical & Process",
    body: "Continuous and semi-continuous processing, safe branching on recipes, and downtime intelligence for safety-critical assets.",
    stack: ["RMS", "MES", "WMS"],
    result: "-35% unplanned stops",
  },
  {
    icon: Cog,
    code: "IND-04",
    name: "Industrial Equipment",
    body: "Discrete work orders, station-by-station SOPs, spare inventory and vendor performance in one operational surface.",
    stack: ["MES", "WMS", "OMS"],
    result: "Rollouts under 90 days",
  },
  {
    icon: Cpu,
    code: "IND-05",
    name: "Electronics & Assembly",
    body: "Serial-level genealogy, ESD-safe operator flows, and quality gates coupled with reflow, AOI and functional test stations.",
    stack: ["MES", "QMS"],
    result: "DPPM cut by half",
  },
  {
    icon: Wine,
    code: "IND-06",
    name: "Contract Manufacturing",
    body: "Customer orders → production → shipments, per-customer recipe libraries, returns and RMA handling on one substrate.",
    stack: ["OMS", "MES", "QMS", "RMS"],
    result: "Order-to-plan in seconds",
  },
];

function Solutions() {
  return (
    <SiteLayout>
      <section className="relative hairline-b overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-fine opacity-60" />
        <div className="absolute inset-0 bg-vignette" />
        <div className="relative mx-auto max-w-[1400px] px-6 pt-40 pb-24">
          <div className="mono-eyebrow">Field guide · MQ-25.11</div>
          <h1 className="mt-4 text-5xl md:text-7xl tracking-tight max-w-4xl">
            Built for the way <span className="text-gradient-cobalt">your industry</span> actually runs.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            ManuQube is not a horizontal ERP add-on. Every module is shaped around the real workflows of real plants, and we've deployed the stack across each of these industries.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--hairline)] hairline">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <motion.div key={ind.name} variants={staggerItem} className="group bg-ink p-8 hover:bg-ink-subtle transition-colors">
                <div className="flex items-start justify-between">
                  <Icon className="size-8 text-[color:var(--cyan)]" strokeWidth={1.4} />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">{ind.code}</span>
                </div>
                <h3 className="mt-8 text-2xl font-medium tracking-tight">{ind.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{ind.body}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {ind.stack.map((s) => (
                    <span key={s} className="hairline px-2.5 py-1 text-[11px] font-mono text-[color:var(--cyan)]/90">{s}</span>
                  ))}
                </div>
                <div className="mt-6 hairline-t pt-4 flex items-center justify-between">
                  <div>
                    <div className="mono-eyebrow">Typical outcome</div>
                    <div className="mt-1 text-sm text-foreground/90">{ind.result}</div>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground/50 group-hover:text-[color:var(--cyan)] transition" />
                </div>
              </motion.div>
            );
          })}
        </Stagger>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-28">
        <div className="hairline p-10 md:p-16 bg-ink-subtle relative overflow-hidden">
          <div className="absolute inset-0 bg-blueprint-fine opacity-30" />
          <div className="relative grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <Reveal>
                <div className="mono-eyebrow">Not on the list?</div>
                <h2 className="mt-3 text-3xl md:text-5xl tracking-tight">If your operation is complex, we'd like to hear about it.</h2>
              </Reveal>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link to="/contact" className="group inline-flex items-center gap-2 bg-[color:var(--cobalt)] hover:bg-[color:var(--cobalt-deep)] text-white px-7 h-12 text-sm font-medium transition">
                Start a conversation <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
