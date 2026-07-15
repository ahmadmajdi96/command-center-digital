import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Cpu, Activity, ShieldCheck, Boxes, Sparkles, Gauge } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, Stagger, staggerItem } from "@/components/site/Motion";
import { PRODUCTS } from "@/lib/products";
import logoMark from "@/assets/logo-mark.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "ManuQube — Manufacturing software, unified" },
      {
        name: "description",
        content:
          "One platform for MES, quality, maintenance and order operations. Built for modern manufacturers.",
      },
    ],
  }),
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Marquee />
      <ProductGrid />
      <Platform />
      <Metrics />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--electric), transparent 60%)" }}
      />
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-28 md:pt-40 md:pb-36 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-[color:var(--signal)] animate-pulse-ring" />
            One system. Every operation.
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.02]">
            Manufacturing software,{" "}
            <span className="text-gradient">re-engineered</span> for the modern plant.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            ManuQube unifies execution, quality, maintenance and order operations in a single, real-time platform. No more disconnected tools, no more spreadsheets on the shop floor.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground glow-primary"
              style={{ background: "var(--gradient-brand)" }}
            >
              Explore products <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-border bg-white/5 hover:bg-white/10 transition"
            >
              Book a demo
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 -mr-16"
        >
          <div className="relative">
            <div className="absolute inset-0 blur-3xl opacity-60" style={{ background: "var(--gradient-brand)" }} />
            <img src={logoMark} alt="" className="relative size-96 drop-shadow-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const marqueeItems = [
  "MES", "Quality", "Maintenance", "Orders", "Recipes", "Genealogy", "OEE", "CAPA", "Traceability", "CMMS", "SSO", "Batches", "Shipments",
];
function Marquee() {
  return (
    <section className="border-y border-border bg-surface/50 overflow-hidden">
      <div className="py-6">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-sm uppercase tracking-[0.3em] text-muted-foreground/70">
              {item} <span className="ml-16 text-[color:var(--signal)]/60">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <Reveal className="max-w-2xl">
        <div className="text-xs uppercase tracking-widest text-[color:var(--signal)]">The suite</div>
        <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Six products. One operational fabric.</h2>
        <p className="mt-4 text-muted-foreground">
          Each product ships stand-alone and interlocks with the rest. Adopt what you need, extend when you're ready.
        </p>
      </Reveal>
      <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p) => {
          const Icon = p.icon;
          return (
            <motion.div key={p.slug} variants={staggerItem}>
              <Link
                to="/products/$productId"
                params={{ productId: p.slug }}
                className="group relative block surface-card p-6 h-full overflow-hidden transition-all hover:-translate-y-1 hover:border-white/20"
              >
                <div
                  className="absolute -top-24 -right-24 size-56 rounded-full opacity-0 group-hover:opacity-40 blur-3xl transition-opacity"
                  style={{
                    background: p.accent === "signal" ? "var(--gradient-signal)" : "var(--gradient-brand)",
                  }}
                />
                <div className="relative">
                  <div
                    className="inline-flex size-11 items-center justify-center rounded-xl border border-border"
                    style={{
                      background: p.accent === "signal" ? "color-mix(in oklab, var(--signal) 15%, transparent)" : "color-mix(in oklab, var(--electric) 15%, transparent)",
                      color: p.accent === "signal" ? "var(--signal-glow)" : "var(--electric-glow)",
                    }}
                  >
                    <Icon className="size-5" />
                  </div>
                  <div className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">{p.category}</div>
                  <h3 className="mt-1 text-xl font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-[color:var(--electric-glow)]/90">{p.tagline}</p>
                  <p className="mt-4 text-sm text-muted-foreground line-clamp-3">{p.summary}</p>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </Stagger>
    </section>
  );
}

const capabilities = [
  { icon: Activity, title: "Real-time by default", body: "Every terminal, order and asset streams state in real time. No stale dashboards." },
  { icon: ShieldCheck, title: "Audit everything", body: "Every action is signed, versioned and traceable — from recipe change to CAPA verification." },
  { icon: Boxes, title: "Composable", body: "Adopt one product or all six. Shared identity, shared master data, shared UX." },
  { icon: Cpu, title: "Edge-ready", body: "Deploy managed in the cloud or self-hosted with a single docker compose command." },
  { icon: Gauge, title: "Made for operators", body: "HMI and operator terminals built for gloves, glare and 12-hour shifts." },
  { icon: Sparkles, title: "Modern stack", body: "React 19, TanStack Start, Postgres. Fast to run, fast to change." },
];

function Platform() {
  return (
    <section className="relative border-y border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <Reveal className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-[color:var(--signal)]">The platform</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Built for the plant floor, engineered like a product.</h2>
        </Reveal>
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div key={c.title} variants={staggerItem} className="surface-card p-6">
                <Icon className="size-6 text-[color:var(--electric-glow)]" />
                <div className="mt-4 font-semibold">{c.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function Metrics() {
  const stats = [
    { value: "6", label: "Integrated products" },
    { value: "100%", label: "Paperless coverage" },
    { value: "< 80ms", label: "Auth round-trip" },
    { value: "24 / 7", label: "Real-time telemetry" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <motion.div key={s.label} variants={staggerItem} className="surface-card p-8 text-center">
            <div className="text-4xl md:text-5xl font-semibold text-gradient">{s.value}</div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-16">
        <div className="absolute inset-0 opacity-80" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="relative max-w-2xl">
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">Ready to unify your operation?</h3>
          <p className="mt-4 text-muted-foreground">
            See ManuQube live on your process. 30 minutes, no slides — just the platform, your data model, your questions.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground glow-primary"
            style={{ background: "var(--gradient-brand)" }}
          >
            Book a demo <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
