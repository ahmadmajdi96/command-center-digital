import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, Stagger, staggerItem } from "@/components/site/Motion";
import { PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/products/")({
  component: ProductsIndex,
  head: () => ({
    meta: [
      { title: "Products — ManuQube" },
      { name: "description", content: "Six integrated products spanning MES, quality, maintenance, orders, recipes and identity." },
    ],
  }),
});

function ProductsIndex() {
  return (
    <SiteLayout>
      <section className="relative bg-hero border-b border-border">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 relative">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-[color:var(--signal)]">Products</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tighter max-w-3xl">
              The <span className="text-gradient">ManuQube</span> suite.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Six products that stand alone and interlock. Deploy one to solve a pain, deploy the suite to run the whole operation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Stagger className="grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.slug} variants={staggerItem}>
                <Link
                  to="/products/$productId"
                  params={{ productId: p.slug }}
                  className="group relative block surface-card p-8 md:p-10 h-full overflow-hidden transition-all hover:-translate-y-1"
                >
                  <div
                    className="absolute -top-24 -right-24 size-72 rounded-full opacity-30 group-hover:opacity-60 blur-3xl transition-opacity"
                    style={{
                      background: p.accent === "signal" ? "var(--gradient-signal)" : "var(--gradient-brand)",
                    }}
                  />
                  <div className="relative flex items-start gap-5">
                    <div
                      className="shrink-0 inline-flex size-14 items-center justify-center rounded-2xl border border-border"
                      style={{
                        background: p.accent === "signal" ? "color-mix(in oklab, var(--signal) 15%, transparent)" : "color-mix(in oklab, var(--electric) 15%, transparent)",
                        color: p.accent === "signal" ? "var(--signal-glow)" : "var(--electric-glow)",
                      }}
                    >
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        0{idx + 1} · {p.category}
                      </div>
                      <h2 className="mt-1 text-2xl font-semibold">{p.name}</h2>
                      <p className="mt-1 text-[color:var(--electric-glow)]/90">{p.tagline}</p>
                      <p className="mt-4 text-sm text-muted-foreground">{p.summary}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.modules.slice(0, 5).map((m) => (
                          <span key={m} className="text-xs rounded-full border border-border px-2.5 py-1 text-muted-foreground">
                            {m}
                          </span>
                        ))}
                        {p.modules.length > 5 && (
                          <span className="text-xs rounded-full border border-border px-2.5 py-1 text-muted-foreground">
                            +{p.modules.length - 5} more
                          </span>
                        )}
                      </div>
                      <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium">
                        Explore {p.name}
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </Stagger>
      </section>
    </SiteLayout>
  );
}
