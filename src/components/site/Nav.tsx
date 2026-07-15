import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logoMark from "@/assets/logo-mark.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/solutions", label: "Solutions" },
  { to: "/about", label: "Company" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-xl hairline-b" : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "color-mix(in oklab, var(--ink) 85%, transparent)" } : undefined}
    >
      {/* Top status bar */}
      <div className="hidden md:block hairline-b" style={{ background: "color-mix(in oklab, var(--ink) 40%, transparent)" }}>
        <div className="mx-auto max-w-[1400px] px-6 flex items-center justify-between h-7 text-[11px] font-mono uppercase tracking-widest text-muted-foreground/70">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-blink" />
              System status · operational
            </span>
            <span className="opacity-60">v25.11 · build 2401</span>
          </div>
          <div className="flex items-center gap-5 opacity-70">
            <span>EN</span>
            <span>EU / MENA / NA</span>
            <a href="mailto:hello@manuqube.com" className="hover:text-foreground">hello@manuqube.com</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoMark.url} alt="ManuQube" className="h-9 w-9 object-contain" />
          <span className="font-semibold tracking-tight text-lg">ManuQube</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-[13px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 hairline px-4 h-9 text-xs font-mono uppercase tracking-widest hover:border-[color:var(--cobalt)] hover:text-[color:var(--cyan)] transition"
          >
            Request demo <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <button className="md:hidden p-2 text-foreground" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden hairline-t bg-ink">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm uppercase tracking-widest text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 hairline px-4 py-2 text-xs font-mono uppercase tracking-widest inline-flex items-center gap-1.5 w-fit">
              Request demo <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
