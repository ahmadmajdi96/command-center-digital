import { createFileRoute, Link } from "@tanstack/react-router";
import { Beef, FlaskConical, Cog, Pill, Cpu, Wine } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, Stagger, staggerItem } from "@/components/site/Motion";
import { motion } from "motion/react";

export const Route = createFileRoute("/solutions")({
  component: Solutions,
  head: () => ({
    meta: [
      { title: "Solutions — ManuQube" },
      { name: "description", content: "ManuQube in food, pharma, chemical, industrial and electronics manufacturing." },
    ],
  }),
});

const industries = [
  { icon: Beef, name: "Food & Beverage", body: "HACCP-ready QC, batch genealogy, allergen control and paperless line execution.", products: ["CORTA QC", "MES Command Center", "MES Command Central"] },
  { icon: Pill, name: "Pharmaceutical", body: "Recipe versioning, e-signatures, audit trails and full unit-level traceability.", products: ["MES Command Hub", "MES Command Center", "Command Center Pro"] },
  { icon: FlaskConical, name: "Chemical & Process", body: "Continuous trials, branch/merge on recipes and safety-critical downtime tracking.", products: ["MES Command Hub", "Unified Command Center"] },
  { icon: Cog, name: "Industrial Equipment", body: "Assets, PM schedules, spare inventory and vendor performance in one CMMS.", products: ["Unified Command Center", "MES Command Center"] },
  { icon: Cpu, name: "Electronics & Assembly", body: "Discrete work orders, station-by-station SOPs and unit genealogy.", products: ["MES Command Center", "Command Center Pro"] },
  { icon: Wine, name: "Contract Manufacturing", body: "Customer orders → production → shipments, with returns and per-customer views.", products: ["MES Command Central", "CORTA QC"] },
];

function Solutions() {
  return (
    <SiteLayout>
      <section className="relative bg-hero border-b border-border">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 relative">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-[color:var(--signal)]">Solutions</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tighter max-w-3xl">
              Built for the way <span className="text-gradient">your industry</span> actually runs.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              ManuQube is not a generic ERP bolt-on. Every module is shaped around the workflows of real plants.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <motion.div key={ind.name} variants={staggerItem} className="surface-card p-8 group hover:-translate-y-1 transition">
                <Icon className="size-8 text-[color:var(--electric-glow)]" />
                <h3 className="mt-6 text-xl font-semibold">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{ind.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {ind.products.map((p) => (
                    <span key={p} className="text-xs rounded-full border border-border px-2.5 py-1 text-muted-foreground">{p}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </Stagger>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-32 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Not on the list?</h2>
          <p className="mt-3 text-muted-foreground">If your operation is complex, we'd like to hear about it.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
            Start a conversation
          </Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
