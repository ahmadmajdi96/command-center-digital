import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Activity, ShieldCheck, Boxes, Cpu, Gauge, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, Stagger, staggerItem } from "@/components/site/Motion";
import { PRODUCTS } from "@/lib/products";
import heroFactory from "@/assets/hero-factory.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "ManuQube — Industrial software, engineered like hardware" },
      { name: "description", content: "Five integrated systems — MES, QMS, WMS, OMS, RMS — that run the modern manufacturing plant. Real-time execution, quality, inventory, orders and recipes on one platform." },
      { property: "og:title", content: "ManuQube — Industrial software, engineered like hardware" },
      { property: "og:description", content: "MES, QMS, WMS, OMS, RMS — one platform for the modern plant." },
    ],
  }),
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Ticker />
      <SystemMap />
      <ProductCatalog />
      <Platform />
      <Numbers />
      <Testimonial />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden hairline-b">
      <div className="absolute inset-0">
        <img src={heroFactory} alt="" className="w-full h-full object-cover opacity-45" width={1920} height={1088} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.10 0.02 250 / 0.4), oklch(0.10 0.02 250 / 0.95))" }} />
        <div className="absolute inset-0 bg-blueprint-fine opacity-40" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pt-40 pb-32 md:pt-52 md:pb-40">
        {/* Coordinate labels */}
        <div className="absolute top-24 right-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 text-right leading-relaxed hidden md:block">
          <div>MQ / CATALOG / 25.11</div>
          <div className="text-[color:var(--cyan)]">SYS ONLINE · 5 UNITS</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mono-eyebrow">
            <span className="size-1.5 rounded-full bg-[color:var(--cyan)] animate-blink" />
            Industrial software platform · Est. 2019
          </div>
          <h1 className="mt-8 text-[52px] md:text-[92px] leading-[0.95] tracking-[-0.035em] font-medium">
            Software that runs the plant
            <br />
            <span className="text-gradient-cobalt">the way it actually runs.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            ManuQube is five integrated systems — <strong className="text-foreground/90">MES, QMS, WMS, OMS, RMS</strong> — that share one identity, one data model and one experience. Adopt one to solve a specific pain, or the whole suite to unify the operation.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 bg-[color:var(--cobalt)] hover:bg-[color:var(--cobalt-deep)] text-white px-7 h-12 text-sm font-medium transition"
            >
              Explore the catalog <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 hairline px-7 h-12 text-sm font-medium hover:border-white/30 transition"
            >
              Book a technical demo <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* Bottom quick specs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--hairline)] hairline"
        >
          {[
            { k: "Products", v: "5" },
            { k: "Deployment", v: "Cloud / on-prem" },
            { k: "Auth", v: "SSO · OIDC · e-sig" },
            { k: "Command", v: "docker compose up" },
          ].map((s) => (
            <div key={s.k} className="bg-ink px-5 py-5">
              <div className="mono-eyebrow">{s.k}</div>
              <div className="mt-2 text-lg font-medium">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [
    "MES · Manufacturing Execution",
    "QMS · Quality Management",
    "WMS · Warehouse Management",
    "OMS · Order Management",
    "RMS · Recipe Management",
    "OEE +18%",
    "NC cycle -48%",
    "Inventory acc. 99.7%",
    "Order-to-plan in seconds",
    "docker compose up",
  ];
  return (
    <section className="hairline-b overflow-hidden bg-ink-subtle">
      <div className="py-5 flex gap-16 animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground/70">
            {t} <span className="ml-16 text-[color:var(--cyan)]/70">◇</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function SystemMap() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28">
      <div className="grid md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-4">
          <div className="mono-eyebrow">01 · System overview</div>
          <h2 className="mt-4 text-4xl md:text-5xl tracking-tight">Five systems. One operational fabric.</h2>
        </Reveal>
        <Reveal className="md:col-span-7 md:col-start-6" delay={0.05}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every ManuQube product is a fully independent system with its own domain, data model and API. They also share a common identity layer, event bus and master data spine — which is why you can adopt one now, add another next quarter, and never pay an integration tax.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid md:grid-cols-5 gap-px bg-[color:var(--hairline)] hairline">
        {PRODUCTS.map((p, idx) => {
          const Icon = p.icon;
          return (
            <Link
              key={p.slug}
              to="/products/$productId"
              params={{ productId: p.slug }}
              className="group relative bg-ink p-6 hover:bg-ink-subtle transition"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">0{idx + 1} / 05</span>
                <ArrowUpRight className="size-4 text-muted-foreground/40 group-hover:text-[color:var(--cyan)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </div>
              <Icon className="mt-6 size-7 text-[color:var(--cyan)]" strokeWidth={1.4} />
              <div className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">{p.code}</div>
              <div className="mt-1 text-2xl font-medium">{p.acronym}</div>
              <div className="mt-1 text-sm text-muted-foreground">{p.name}</div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function ProductCatalog() {
  return (
    <section className="hairline-y bg-ink-subtle">
      <div className="mx-auto max-w-[1400px] px-6 py-28">
        <Reveal className="max-w-3xl">
          <div className="mono-eyebrow">02 · Catalog</div>
          <h2 className="mt-4 text-4xl md:text-5xl tracking-tight">Each product ships stand-alone.</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Every system in the catalog has been deployed independently in real plants — no other ManuQube product required.
          </p>
        </Reveal>

        <Stagger className="mt-14 space-y-4">
          {PRODUCTS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.slug} variants={staggerItem}>
                <Link
                  to="/products/$productId"
                  params={{ productId: p.slug }}
                  className="group grid md:grid-cols-12 gap-6 items-center hairline p-6 md:p-8 hover:border-[color:var(--cobalt)] transition bg-ink"
                >
                  <div className="md:col-span-1 font-mono text-xs text-muted-foreground/60">0{idx + 1}</div>
                  <div className="md:col-span-2 flex items-center gap-3">
                    <Icon className="size-6 text-[color:var(--cyan)]" strokeWidth={1.5} />
                    <div>
                      <div className="text-2xl font-medium tracking-tight">{p.acronym}</div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">{p.code}</div>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <div className="text-lg">{p.name}</div>
                  </div>
                  <div className="md:col-span-4 text-sm text-muted-foreground line-clamp-2">{p.tagline}</div>
                  <div className="md:col-span-2 flex md:justify-end">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-[color:var(--cyan)] group-hover:gap-3 transition-all">
                      Datasheet <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

const capabilities = [
  { icon: Activity, title: "Real-time by default", body: "Every terminal, order and asset streams state in real time. No stale dashboards, no polling." },
  { icon: ShieldCheck, title: "Audit everything", body: "Every action is signed, versioned and traceable — from recipe change to CAPA verification." },
  { icon: Boxes, title: "Composable", body: "Adopt one system or all five. Shared identity, shared master data, shared UX. Never rebuild integrations." },
  { icon: Cpu, title: "Deploy anywhere", body: "Managed in the cloud or self-hosted with a single docker compose command on your own iron." },
  { icon: Gauge, title: "Built for operators", body: "HMI and operator terminals designed for gloves, glare and twelve-hour shifts." },
  { icon: Sparkles, title: "Modern engineering", body: "React 19, TanStack Start, Postgres, event-sourced core. Fast to run, fast to change, easy to audit." },
];

function Platform() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28">
      <div className="grid md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-4">
          <div className="mono-eyebrow">03 · The platform</div>
          <h2 className="mt-4 text-4xl md:text-5xl tracking-tight">Engineered like a piece of industrial equipment.</h2>
          <p className="mt-6 text-muted-foreground">
            Predictable, serviceable, documented. Six principles govern every screen we ship.
          </p>
        </Reveal>
        <div className="md:col-span-8">
          <Stagger className="grid sm:grid-cols-2 gap-px bg-[color:var(--hairline)] hairline">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <motion.div key={c.title} variants={staggerItem} className="bg-ink p-8">
                  <Icon className="size-6 text-[color:var(--cyan)]" strokeWidth={1.4} />
                  <div className="mt-6 text-lg font-medium">{c.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  const stats = [
    { value: "500+", label: "Stations orchestrated" },
    { value: "99.7%", label: "Inventory accuracy" },
    { value: "-48%", label: "NC cycle time" },
    { value: "< 250ms", label: "Event latency" },
  ];
  return (
    <section className="hairline-y bg-ink-subtle">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--hairline)] hairline">
          {stats.map((s) => (
            <motion.div key={s.label} variants={staggerItem} className="bg-ink p-10 text-center">
              <div className="text-5xl md:text-6xl tracking-tight text-gradient-cobalt font-medium">{s.value}</div>
              <div className="mt-3 mono-eyebrow">{s.label}</div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28">
      <Reveal className="max-w-4xl">
        <div className="mono-eyebrow">04 · From the floor</div>
        <blockquote className="mt-8 text-3xl md:text-5xl tracking-tight leading-[1.15]">
          "We replaced four disconnected tools with two ManuQube systems. Recipe rollout went from a two-week ceremony to an afternoon, and our first-pass yield moved nine points in the first quarter."
        </blockquote>
        <div className="mt-8 flex items-center gap-4">
          <div className="size-10 rounded-full bg-gradient-to-br from-[color:var(--cobalt)] to-[color:var(--cyan)]" />
          <div>
            <div className="text-sm font-medium">Head of Manufacturing IT</div>
            <div className="mono-eyebrow">Global specialty foods manufacturer</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-24">
      <div className="relative overflow-hidden hairline p-10 md:p-16 bg-ink-subtle">
        <div className="absolute inset-0 bg-blueprint-fine opacity-40" />
        <div className="absolute -top-40 -right-40 size-[500px] rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-cobalt)" }} />
        <div className="relative grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="mono-eyebrow">05 · Start</div>
            <h3 className="mt-4 text-4xl md:text-6xl tracking-tight">Ready to run one system for every operation?</h3>
            <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
              A 30-minute technical demo. No slides — the platform, your data model, your questions.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-[color:var(--cobalt)] hover:bg-[color:var(--cobalt-deep)] text-white px-7 h-12 text-sm font-medium transition"
            >
              Book demo <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
