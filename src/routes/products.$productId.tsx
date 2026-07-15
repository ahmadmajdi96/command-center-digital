import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, Stagger, staggerItem } from "@/components/site/Motion";
import { getProduct, PRODUCTS, type Product } from "@/lib/products";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — ManuQube` },
          { name: "description", content: loaderData.product.summary },
          { property: "og:title", content: `${loaderData.product.name} — ManuQube` },
          { property: "og:description", content: loaderData.product.summary },
        ]
      : [],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-6 py-40 text-center">
        <h1 className="text-4xl font-semibold">Product not found</h1>
        <Link to="/products" className="mt-6 inline-block text-primary">Back to products</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
      </div>
    </SiteLayout>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const Icon = product.icon;
  const currentIndex = PRODUCTS.findIndex((p) => p.slug === product.slug);
  const next = PRODUCTS[(currentIndex + 1) % PRODUCTS.length];

  return (
    <SiteLayout>
      <section className="relative bg-hero border-b border-border">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div
          className="absolute top-0 right-0 size-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: product.accent === "signal" ? "var(--gradient-signal)" : "var(--gradient-brand)" }}
        />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 relative">
          <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> All products
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col md:flex-row md:items-end gap-8 justify-between"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <div
                  className="inline-flex size-12 items-center justify-center rounded-2xl border border-border"
                  style={{
                    background: product.accent === "signal" ? "color-mix(in oklab, var(--signal) 15%, transparent)" : "color-mix(in oklab, var(--electric) 15%, transparent)",
                    color: product.accent === "signal" ? "var(--signal-glow)" : "var(--electric-glow)",
                  }}
                >
                  <Icon className="size-6" />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{product.category}</div>
              </div>
              <h1 className="mt-5 text-5xl md:text-6xl font-semibold tracking-tighter">{product.name}</h1>
              <p className="mt-3 text-xl text-[color:var(--electric-glow)]/90">{product.tagline}</p>
              <p className="mt-5 text-lg text-muted-foreground">{product.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground glow-primary"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  Request a demo <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 md:min-w-[380px]">
              {product.metrics.map((m) => (
                <div key={m.label} className="surface-card p-4 text-center">
                  <div className="text-lg md:text-xl font-semibold text-gradient">{m.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-[color:var(--signal)]">Capabilities</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">What it does.</h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {product.features.map((f) => (
            <motion.div key={f.title} variants={staggerItem} className="surface-card p-8">
              <div className="text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-muted-foreground">{f.body}</p>
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24 grid gap-16 md:grid-cols-2">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-[color:var(--signal)]">Modules</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Everything included, out of the box.</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {product.modules.map((m) => (
                <span key={m} className="rounded-full border border-border bg-white/5 px-3 py-1.5 text-sm text-foreground/90">
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xs uppercase tracking-widest text-[color:var(--signal)]">Fit</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Who this is for.</h2>
            <ul className="mt-8 space-y-4">
              {product.useCases.map((u) => (
                <li key={u} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--signal)]/15 text-[color:var(--signal-glow)]">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-foreground/90">{u}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Up next</div>
            <div className="mt-2 text-2xl font-semibold">{next.name}</div>
            <p className="text-muted-foreground">{next.tagline}</p>
          </div>
          <Link
            to="/products/$productId"
            params={{ productId: next.slug }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium border border-border hover:bg-white/5"
          >
            Explore {next.name} <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
