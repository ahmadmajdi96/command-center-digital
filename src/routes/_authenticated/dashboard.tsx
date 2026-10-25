import { PageBackground } from "@/components/site/PageBackground";
import heroFactory from "@/assets/hero-factory.jpg";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { motion } from "motion/react";
import { ArrowUpRight, LogOut, Activity, Globe, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { portalModules } from "@/lib/portal";
import logoMark from "@/assets/logo-mark.png";
import { ThemeToggle } from "@/components/site/ThemeToggle";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Console · ManuQube" },
      { name: "description", content: "ManuQube operations console — access every system from one hub." },
      { property: "og:title", content: "Console · ManuQube" },
      { property: "og:description", content: "ManuQube operations console — access every system from one hub." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DashboardPage,
});

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function DashboardPage() {
  const { user } = Route.useRouteContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const email = user.email ?? "";
  const initials = email.slice(0, 2).toUpperCase() || "MQ";

  return (
    <div className="portal-shell relative min-h-screen overflow-hidden text-foreground">
      <div className="portal-photo"><PageBackground image={heroFactory} position="right" /></div>


      {/* Top bar */}
      <header className="relative hairline-b" style={{ background: "color-mix(in oklab, var(--ink) 70%, transparent)" }}>
        <div className="mx-auto flex h-16 max-w-[var(--container-page)] items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoMark} alt="ManuQube" className="h-8 w-8 object-contain" />
            <span className="font-semibold tracking-tight">ManuQube</span>
            <span className="mono-eyebrow hidden sm:inline">Console</span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-blink" />
              {email}
            </div>
            <div className="grid size-9 place-items-center rounded-full hairline bg-ink-subtle text-xs font-semibold">
              {initials}
            </div>
            <button
              onClick={handleSignOut}
              className="inline-flex h-9 items-center gap-2 hairline px-3 text-xs font-mono uppercase tracking-widest text-muted-foreground transition hover:border-[color:var(--cobalt)] hover:text-foreground"
            >
              <LogOut className="size-3.5" /> Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-[var(--container-page)] px-6 pb-24 pt-14">
        {/* Hero strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mono-eyebrow">Operations console · MQ-CMD.01</div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient-cobalt">One system.</span> Every operation.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Launch any ManuQube system from here. Your permissions follow you across every
            module — orders, production, manufacturing, quality and access control.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Activity className="size-3.5 text-[color:var(--cyan)]" /> All systems operational
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe className="size-3.5 text-[color:var(--cyan)]" /> EU · MENA · NA regions
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-3.5 text-[color:var(--cyan)]" /> Session secured
            </span>
          </div>
        </motion.div>

        {/* Module grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portalModules.map((m, i) => {
            const Icon = m.icon;
            const inner = (
              <motion.div
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                whileHover={{ y: -6 }}
                className="group relative flex h-full flex-col overflow-hidden card-panel p-6 transition-shadow hover:glow-cobalt"
              >
                <div className="absolute inset-0 bg-blueprint-fine opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
                <div className="relative flex items-start justify-between">
                  <div className="grid size-12 place-items-center rounded-xl hairline bg-ink-subtle text-[color:var(--cyan)] transition-colors group-hover:text-foreground">
                    <Icon className="size-5" />
                  </div>
                  <span className="mono-eyebrow">{m.code}</span>
                </div>
                <h2 className="relative mt-5 font-display text-xl font-semibold tracking-tight">
                  {m.name}
                </h2>
                <p className="relative mt-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                  {m.tagline}
                </p>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {m.description}
                </p>
                <div className="relative mt-5 grid grid-cols-2 gap-3 hairline-t pt-4">
                  {m.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground/70">
                        {s.label}
                      </div>
                      <div className="mt-0.5 text-xs font-semibold">{s.value}</div>
                    </div>
                  ))}
                </div>
                <div className="relative mt-5 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[color:var(--cyan)]">
                  {m.url ? "Launch system" : "View details"}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );

            return m.url ? (
              <a key={m.key} href={m.url} target="_blank" rel="noopener noreferrer" className="block">
                {inner}
              </a>
            ) : (
              <Link key={m.key} to={m.fallback} className="block">
                {inner}
              </Link>
            );
          })}

          {/* Status tile */}
          <motion.div
            custom={portalModules.length}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            className="relative flex flex-col justify-between overflow-hidden card-panel p-6"
          >
            <div className="absolute inset-0 bg-blueprint-fine opacity-30" />
            <div className="relative">
              <div className="mono-eyebrow">Platform status</div>
              <div className="mt-5 space-y-3">
                {portalModules.map((m) => (
                  <div key={m.key} className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{m.name}</span>
                    <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-wider text-emerald-400">
                      <span className="size-1.5 rounded-full bg-emerald-400 animate-blink" />
                      Online
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="relative mt-6 hairline-t pt-4 text-[11px] text-muted-foreground">
              Need access to a module? Contact your administrator through the Access
              Management hub.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
