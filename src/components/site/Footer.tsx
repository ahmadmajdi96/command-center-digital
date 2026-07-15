import { Link } from "@tanstack/react-router";
import logoFull from "@/assets/logo-full.png";
import { PRODUCTS } from "@/lib/products";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="absolute inset-x-0 -top-px h-px" style={{ background: "linear-gradient(90deg, transparent, var(--electric), transparent)" }} />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logoFull} alt="ManuQube" className="h-10 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            One system. Every operation. Modern manufacturing software for plants that refuse to run on spreadsheets.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Products</div>
          <ul className="space-y-2 text-sm">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link to="/products/$productId" params={{ productId: p.slug }} className="text-foreground/80 hover:text-foreground">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-foreground/80 hover:text-foreground">About</Link></li>
            <li><Link to="/solutions" className="text-foreground/80 hover:text-foreground">Solutions</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Get in touch</div>
          <p className="text-sm text-muted-foreground">hello@manuqube.com</p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-primary-foreground"
            style={{ background: "var(--gradient-brand)" }}
          >
            Book a demo
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} ManuQube. All rights reserved.</span>
          <span>Built for modern manufacturing.</span>
        </div>
      </div>
    </footer>
  );
}
