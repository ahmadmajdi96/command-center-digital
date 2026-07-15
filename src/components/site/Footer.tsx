import { Link } from "@tanstack/react-router";
import logoMark from "@/assets/logo-mark.png";
import { PRODUCTS } from "@/lib/products";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative hairline-t mt-32 bg-ink">
      <div className="bg-blueprint">
        <div className="mx-auto max-w-[1400px] px-6 py-20 grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <img src={logoMark.url} alt="ManuQube" className="h-10 w-10 object-contain" />
              <span className="font-semibold tracking-tight text-xl">ManuQube</span>
            </div>
            <p className="mt-6 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Industrial software, engineered like hardware. Five integrated systems that run the modern manufacturing plant.
            </p>
            <div className="mt-8 mono-eyebrow">Manufactured in code</div>
            <div className="mt-2 font-mono text-xs text-muted-foreground/60">
              LAT 41.3874° N · LON 2.1686° E<br />
              Barcelona · Amsterdam · Dubai
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="mono-eyebrow">Products</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link to="/products/$productId" params={{ productId: p.slug }} className="group flex items-center justify-between text-foreground/85 hover:text-foreground">
                    <span>{p.acronym} · {p.name}</span>
                    <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-70 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="mono-eyebrow">Company</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/about" className="text-foreground/85 hover:text-foreground">About</Link></li>
              <li><Link to="/solutions" className="text-foreground/85 hover:text-foreground">Solutions</Link></li>
              <li><Link to="/contact" className="text-foreground/85 hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="mono-eyebrow">Talk to engineering</div>
            <p className="mt-4 text-sm text-muted-foreground">
              30-minute technical demo. No slides. Your data model, your questions.
            </p>
            <Link
              to="/contact"
              className="mt-5 group inline-flex items-center gap-2 hairline px-4 h-10 text-xs font-mono uppercase tracking-widest hover:border-[color:var(--cobalt)] hover:text-[color:var(--cyan)] transition"
            >
              Book a demo <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="hairline-t">
        <div className="mx-auto max-w-[1400px] px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-widest text-muted-foreground/60">
          <span>© {new Date().getFullYear()} ManuQube Systems · All rights reserved</span>
          <span>Doc rev 25.11 · MQ-CATALOG-EN</span>
        </div>
      </div>
    </footer>
  );
}
