import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Download } from "lucide-react";
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
          { title: `${loaderData.product.acronym} · ${loaderData.product.name} — ManuQube` },
          { name: "description", content: loaderData.product.summary },
          { property: "og:title", content: `${loaderData.product.code} · ${loaderData.product.name}` },
          { property: "og:description", content: loaderData.product.summary },
          { property: "og:image", content: loaderData.product.hero },
        ]
      : [{ title: "Product — ManuQube" }],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="text-4xl">Product not found</h1>
        <Link to="/products" className="mt-6 inline-block text-[color:var(--cyan)]">← Back to catalog</Link>
      </div>
    </SiteLayout>
  ),
});

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "modules", label: "Modules" },
  { id: "specs", label: "Specifications" },
  { id: "use-cases", label: "Use cases" },
  { id: "deployment", label: "Deployment" },
  { id: "integrations", label: "Integrations" },
];

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const Icon = product.icon;
  const currentIndex = PRODUCTS.findIndex((p) => p.slug === product.slug);
  const next = PRODUCTS[(currentIndex + 1) % PRODUCTS.length];
  const prev = PRODUCTS[(currentIndex - 1 + PRODUCTS.length) % PRODUCTS.length];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative hairline-b overflow-hidden">
        <div className="absolute inset-0">
          <img src={product.hero} alt="" className="w-full h-full object-cover opacity-40" width={1600} height={1008} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.10 0.02 250 / 0.55), oklch(0.10 0.02 250 / 0.95))" }} />
          <div className="absolute inset-0 bg-blueprint-fine opacity-30" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 pt-36 pb-24">
          <Link to="/products" className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-3.5" /> Catalog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 grid md:grid-cols-12 gap-10 items-end"
          >
            <div className="md:col-span-8">
              <div className="flex items-center gap-4">
                <Icon className="size-9 text-[color:var(--cyan)]" strokeWidth={1.3} />
                <div className="font-mono text-xs uppercase tracking-widest text-[color:var(--cyan)]">
                  {product.code} · Series {product.code.split("-")[1][0]}000
                </div>
              </div>
              <h1 className="mt-6 text-6xl md:text-8xl tracking-[-0.035em] font-medium leading-[0.9]">{product.acronym}</h1>
              <div className="mt-4 text-2xl md:text-3xl text-foreground/85 tracking-tight">{product.name}</div>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{product.tagline}</p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-[color:var(--cobalt)] hover:bg-[color:var(--cobalt-deep)] text-white px-7 h-12 text-sm font-medium transition"
                >
                  Request demo <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href="#specs" className="group inline-flex items-center gap-2 hairline px-7 h-12 text-sm font-medium hover:border-white/30 transition">
                  <Download className="size-4" /> Datasheet
                </a>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="hairline p-6 bg-ink/60 backdrop-blur">
                <div className="mono-eyebrow">Key metrics</div>
                <div className="mt-4 divide-y divide-[color:var(--hairline)]">
                  {product.metrics.map((m) => (
                    <div key={m.label} className="flex items-baseline justify-between py-3">
                      <span className="text-sm text-muted-foreground">{m.label}</span>
                      <span className="text-xl font-medium text-gradient-cobalt">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BODY WITH STICKY TOC */}
      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Sticky TOC */}
          <aside className="md:col-span-3">
            <div className="md:sticky md:top-28">
              <div className="mono-eyebrow">In this datasheet</div>
              <nav className="mt-5 flex flex-col gap-2 hairline-l pl-4">
                {SECTIONS.map((s, i) => (
                  <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground py-1">
                    <span className="font-mono text-[10px] text-muted-foreground/50 w-6">§{String(i + 1).padStart(2, "0")}</span>
                    {s.label}
                  </a>
                ))}
              </nav>
              <div className="mt-10 hairline p-4 text-xs text-muted-foreground bg-ink-subtle">
                <div className="mono-eyebrow">Doc</div>
                <div className="mt-2 font-mono">MQ-{product.code}-DS.EN</div>
                <div className="mt-1 font-mono">Rev. 25.11</div>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="md:col-span-9 space-y-24">
            {/* Overview */}
            <Section id="overview" index={1} title="Overview">
              <div className="space-y-5 text-lg text-foreground/85 leading-relaxed">
                {product.overview.map((p, i) => (
                  <Reveal key={i} delay={i * 0.05}><p>{p}</p></Reveal>
                ))}
              </div>
              <Reveal>
                <p className="mt-8 text-sm text-muted-foreground">{product.summary}</p>
              </Reveal>
            </Section>

            {/* Capabilities */}
            <Section id="capabilities" index={2} title="Capabilities">
              <Stagger className="grid sm:grid-cols-2 gap-px bg-[color:var(--hairline)] hairline">
                {product.capabilities.map((c) => (
                  <motion.div key={c.title} variants={staggerItem} className="bg-ink p-6">
                    <div className="text-lg font-medium">{c.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  </motion.div>
                ))}
              </Stagger>
            </Section>

            {/* Modules */}
            <Section id="modules" index={3} title="Modules included">
              <div className="hairline">
                {product.modules.map((g, i) => (
                  <div key={g.group} className={`grid md:grid-cols-12 gap-4 p-6 ${i > 0 ? "hairline-t" : ""}`}>
                    <div className="md:col-span-3">
                      <div className="mono-eyebrow">Group {String(i + 1).padStart(2, "0")}</div>
                      <div className="mt-2 text-lg font-medium">{g.group}</div>
                    </div>
                    <div className="md:col-span-9 flex flex-wrap gap-2">
                      {g.items.map((m) => (
                        <span key={m} className="hairline px-3 py-1.5 text-sm text-foreground/85 bg-ink-subtle">{m}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Specs */}
            <Section id="specs" index={4} title="Specifications">
              <div className="hairline">
                {product.specs.map((s, i) => (
                  <div key={s.label} className={`grid grid-cols-2 gap-4 px-6 py-4 ${i > 0 ? "hairline-t" : ""} ${i % 2 === 0 ? "bg-ink-subtle" : "bg-ink"}`}>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
                    <div className="text-sm text-foreground/95">{s.value}</div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Use cases */}
            <Section id="use-cases" index={5} title="Where it fits">
              <ul className="grid gap-3">
                {product.useCases.map((u) => (
                  <Reveal key={u}>
                    <li className="flex items-start gap-3 hairline p-4 bg-ink-subtle">
                      <Check className="size-4 text-[color:var(--cyan)] mt-1 shrink-0" />
                      <span>{u}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </Section>

            {/* Deployment */}
            <Section id="deployment" index={6} title="Deployment options">
              <Stagger className="grid gap-4">
                {product.deployment.map((d, i) => (
                  <motion.div key={d} variants={staggerItem} className="hairline p-5 flex items-start gap-4 bg-ink">
                    <span className="font-mono text-xs text-[color:var(--cyan)] mt-0.5">D.{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-foreground/90">{d}</span>
                  </motion.div>
                ))}
              </Stagger>
            </Section>

            {/* Integrations */}
            <Section id="integrations" index={7} title="Integrations">
              <div className="flex flex-wrap gap-2">
                {product.integrations.map((i) => (
                  <span key={i} className="hairline px-4 py-2 text-sm bg-ink-subtle font-mono">{i}</span>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="hairline-y bg-ink-subtle">
        <div className="mx-auto max-w-[1400px] px-6 py-12 grid md:grid-cols-2 gap-px bg-[color:var(--hairline)]">
          <Link to="/products/$productId" params={{ productId: prev.slug }} className="group bg-ink p-8 hover:bg-ink-subtle transition">
            <div className="mono-eyebrow flex items-center gap-2"><ArrowLeft className="size-3" /> Previous</div>
            <div className="mt-3 text-2xl font-medium">{prev.acronym} · {prev.name}</div>
            <div className="mt-1 font-mono text-xs text-muted-foreground">{prev.code}</div>
          </Link>
          <Link to="/products/$productId" params={{ productId: next.slug }} className="group bg-ink p-8 hover:bg-ink-subtle transition md:text-right">
            <div className="mono-eyebrow flex items-center gap-2 md:justify-end">Next <ArrowUpRight className="size-3" /></div>
            <div className="mt-3 text-2xl font-medium">{next.acronym} · {next.name}</div>
            <div className="mt-1 font-mono text-xs text-muted-foreground">{next.code}</div>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function Section({ id, index, title, children }: { id: string; index: number; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <Reveal className="mb-8">
        <div className="flex items-baseline gap-4 hairline-b pb-4">
          <span className="font-mono text-xs text-[color:var(--cyan)]">§{String(index).padStart(2, "0")}</span>
          <h2 className="text-3xl md:text-4xl tracking-tight">{title}</h2>
        </div>
      </Reveal>
      {children}
    </section>
  );
}
