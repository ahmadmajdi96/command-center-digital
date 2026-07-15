import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, Stagger, staggerItem } from "@/components/site/Motion";
import { PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/products/")({
  component: ProductsIndex,
  head: () => ({
    meta: [
      { title: "Product catalog — ManuQube" },
      { name: "description", content: "MES, QMS, WMS, OMS, RMS — five integrated industrial software systems. Browse the full ManuQube product catalog." },
    ],
  }),
});

function ProductsIndex() {
  return (
    <SiteLayout>
      <section className="relative hairline-b overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-fine opacity-60" />
        <div className="absolute inset-0 bg-vignette" />
        <div className="relative mx-auto max-w-[1400px] px-6 pt-40 pb-24">
          <div className="mono-eyebrow">Catalog · MQ-25.11</div>
          <h1 className="mt-4 text-5xl md:text-7xl tracking-tight max-w-4xl">
            The complete <span className="text-gradient-cobalt">ManuQube</span> catalog.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Five industrial systems. Every one deployable on its own, every one designed to interlock. Click any datasheet to open the full spec.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="hairline">
          {/* Table header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 hairline-b bg-ink-subtle font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
            <div className="col-span-1">Idx</div>
            <div className="col-span-2">Code</div>
            <div className="col-span-2">Acronym</div>
            <div className="col-span-3">System</div>
            <div className="col-span-3">Purpose</div>
            <div className="col-span-1 text-right">Doc</div>
          </div>

          <Stagger>
            {PRODUCTS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.slug} variants={staggerItem}>
                  <Link
                    to="/products/$productId"
                    params={{ productId: p.slug }}
                    className="group grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-6 items-center hairline-b hover:bg-ink-subtle transition-colors"
                  >
                    <div className="md:col-span-1 font-mono text-xs text-muted-foreground/60">0{idx + 1} / 05</div>
                    <div className="md:col-span-2 font-mono text-sm text-[color:var(--cyan)]">{p.code}</div>
                    <div className="md:col-span-2 flex items-center gap-3">
                      <Icon className="size-5 text-muted-foreground group-hover:text-[color:var(--cyan)] transition" strokeWidth={1.4} />
                      <span className="text-2xl font-medium tracking-tight">{p.acronym}</span>
                    </div>
                    <div className="md:col-span-3 text-foreground/85">{p.name}</div>
                    <div className="md:col-span-3 text-sm text-muted-foreground line-clamp-2">{p.tagline}</div>
                    <div className="md:col-span-1 flex md:justify-end">
                      <ArrowUpRight className="size-5 text-muted-foreground/50 group-hover:text-[color:var(--cyan)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </Stagger>
        </div>

        <Reveal className="mt-16 grid md:grid-cols-3 gap-px bg-[color:var(--hairline)] hairline">
          {[
            { k: "Shared identity", v: "One login across every system in the catalog. SSO, OIDC and hardware e-signatures out of the box." },
            { k: "Shared master data", v: "Products, materials, users and locations live once. No import/export dance between systems." },
            { k: "Shared UX", v: "Same shortcuts, same terminology, same operator terminals. Training time collapses." },
          ].map((f) => (
            <div key={f.k} className="bg-ink p-8">
              <div className="mono-eyebrow">Suite advantage</div>
              <div className="mt-3 text-xl font-medium">{f.k}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.v}</p>
            </div>
          ))}
        </Reveal>
      </section>
    </SiteLayout>
  );
}
