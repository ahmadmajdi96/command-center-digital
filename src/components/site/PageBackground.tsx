/** Shared full-bleed imagery: keep overlays consistent across every page. */
export function PageBackground({ image, position = "center" }: { image: string; position?: "center" | "right" }) {
  return (
    <div aria-hidden="true" className={`page-background page-background--${position}`}>
      <img src={image} alt="" width={1920} height={1088} fetchPriority="high" />
      <div className="page-background-shade" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(760px 460px at 92% 100%, color-mix(in oklab, var(--neon) 10%, transparent), transparent 70%)" }}
      />
      <div className="absolute inset-0 bg-blueprint-fine opacity-20" />
    </div>
  );
}