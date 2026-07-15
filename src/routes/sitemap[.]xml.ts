import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/products", priority: "0.9", changefreq: "weekly" },
          { path: "/products/mes", priority: "0.8" },
          { path: "/products/qms", priority: "0.8" },
          { path: "/products/wms", priority: "0.8" },
          { path: "/products/oms", priority: "0.8" },
          { path: "/products/rms", priority: "0.8" },
          { path: "/solutions", priority: "0.8" },
          { path: "/about", priority: "0.6" },
          { path: "/contact", priority: "0.6" },
        ];
        const urls = entries
          .map((e) => `  <url><loc>${BASE_URL}${e.path}</loc>${e.changefreq ? `<changefreq>${e.changefreq}</changefreq>` : ""}<priority>${e.priority}</priority></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
