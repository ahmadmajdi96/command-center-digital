import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, Lock, Mail, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { supabase } from "@/integrations/supabase/client";
import logoMark from "@/assets/logo-mark.png";

export const Route = createFileRoute("/auth")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Sign in · ManuQube" },
      { name: "description", content: "Secure sign-in to the ManuQube operations console." },
      { property: "og:title", content: "Sign in · ManuQube" },
      { property: "og:description", content: "Secure sign-in to the ManuQube operations console." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

const inputCls =
  "h-11 w-full rounded-lg border border-input bg-ink-subtle/60 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[color:var(--cobalt)] focus:outline-none focus:ring-1 focus:ring-[color:var(--cobalt)] transition";

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "forgot">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/dashboard", replace: true });
    });
  }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setNotice(null);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });
        if (error) throw error;
        toast.success("Welcome back");
        navigate({ to: "/dashboard", replace: true });
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        setNotice("If that email has an account, a reset link is on its way.");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setNotice(message);
      toast.error(message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-blueprint-fine opacity-50" />
      <div className="absolute inset-0 bg-vignette" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-[color:var(--cobalt)] opacity-20 blur-[140px]" />

      <div className="relative grid min-h-screen place-items-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to site
          </Link>

          <div className="mb-8 flex items-center gap-4">
            <img src={logoMark} alt="ManuQube" className="h-12 w-12 object-contain" />
            <div>
              <h1 className="font-display text-2xl font-semibold tracking-tight">
                ManuQube Console
              </h1>
              <p className="text-sm text-muted-foreground">
                One sign-in. Every operation.
              </p>
            </div>
          </div>

          <div className="card-panel glow-cobalt p-7">
            <div className="mono-eyebrow mb-5">
              {mode === "signin" ? "Secure access" : "Password recovery"}
            </div>
            <form onSubmit={onSubmit} className="space-y-4">
              <label className="block">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <div className="relative mt-1.5">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className={inputCls}
                  />
                </div>
              </label>
              {mode === "signin" && (
                <label className="block">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Password
                  </span>
                  <div className="relative mt-1.5">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="password"
                      required
                      maxLength={128}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className={inputCls}
                    />
                  </div>
                </label>
              )}

              <button
                type="button"
                disabled={busy}
                onClick={() => {
                  setMode(mode === "signin" ? "forgot" : "signin");
                  setNotice(null);
                }}
                className="text-[11px] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline transition-colors"
              >
                {mode === "signin" ? "Forgot password?" : "Back to sign in"}
              </button>

              {notice && (
                <div
                  role="status"
                  className="rounded-lg hairline bg-ink-subtle/60 p-3 text-xs text-muted-foreground"
                >
                  {notice}
                </div>
              )}

              <button
                type="submit"
                disabled={busy}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[image:var(--gradient-cobalt)] text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
              >
                {busy && <Loader2 className="size-4 animate-spin" />}
                {mode === "signin" ? "Sign in" : "Send reset link"}
              </button>
            </form>
            <p className="mt-5 text-center text-[11px] text-muted-foreground">
              Accounts are provisioned by your administrator. Contact your admin for access.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
