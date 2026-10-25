import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell min-h-screen flex flex-col text-foreground">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
