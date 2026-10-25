import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, Lock, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { supabase } from "@/integrations/supabase/client";
import logoMark from "@/assets/logo-mark.png";

export const Route = createFileRoute("/reset-password")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Reset password · ManuQube" },
      { name: "description", content: "Set a new password for your ManuQube console account." },
      { property: "og:title", content: "Reset password · ManuQube" },
      { property: "og:description", content: "Set a new password for your ManuQube console account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ResetPasswordPage,
});

const inputCls =
  "h-11 w-full rounded-lg border border-input bg-ink-subtle/60 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[color:var(--cobalt)] focus:outline-none focus:ring-1 focus:ring-[color:var(--cobalt)] transition";

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    // Recovery links arrive with type=recovery in the URL hash.
    const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    if (hash.get("type") === "recovery") {
      setReady(true);
      return;
    }
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirm) {
      setNotice("Passwords do not match.");
      return;
    }
    setBusy(true);
    setNotice(null);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      toast.success("Password updated");
      navigate({ to: "/dashboard", replace: true });
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
      <div className="relative grid min-h-screen place-items-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <Link
            to="/auth"
            className="mb-8 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to sign in
          </Link>
          <div className="mb-8 flex items-center gap-4">
            <img src={logoMark} alt="ManuQube" className="h-12 w-12 object-contain" />
            <div>
              <h1 className="font-display text-2xl font-semibold tracking-tight">
                Set a new password
              </h1>
              <p className="text-sm text-muted-foreground">
                Choose a strong password for your console account.
              </p>
            </div>
          </div>
          <div className="card-panel p-7">
            {ready ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <label className="block">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    New password
                  </span>
                  <div className="relative mt-1.5">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="password"
                      required
                      minLength={8}
                      maxLength={128}
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 8 characters"
                      className={inputCls}
                    />
                  </div>
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Confirm password
                  </span>
                  <div className="relative mt-1.5">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="password"
                      required
                      minLength={8}
                      maxLength={128}
                      autoComplete="new-password"
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      placeholder="Repeat your password"
                      className={inputCls}
                    />
                  </div>
                </label>
                {notice && (
                  <div role="status" className="rounded-lg hairline bg-ink-subtle/60 p-3 text-xs text-muted-foreground">
                    {notice}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={busy}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[image:var(--gradient-cobalt)] text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
                >
                  {busy && <Loader2 className="size-4 animate-spin" />}
                  Update password
                </button>
              </form>
            ) : (
              <p className="text-sm text-muted-foreground">
                This page is reached from a password-reset email link. If you arrived here
                directly, request a new reset link from the sign-in page.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
