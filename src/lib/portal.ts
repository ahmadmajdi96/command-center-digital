import {
  ClipboardList,
  Factory,
  Boxes,
  BadgeCheck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type PortalModule = {
  key: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  /** External app URL. Leave empty to fall back to the internal product page. */
  url: string;
  fallback: string;
  stats: { label: string; value: string }[];
};

export const portalModules: PortalModule[] = [
  {
    key: "orders",
    code: "OMS",
    name: "Orders Management",
    tagline: "Order Management System",
    description:
      "End-to-end order orchestration — from intake and validation through scheduling, fulfillment and delivery tracking.",
    icon: ClipboardList,
    url: "",
    fallback: "/products/oms",
    stats: [
      { label: "Order lifecycle", value: "Intake → Ship" },
      { label: "Channels", value: "ERP · EDI · Portal" },
    ],
  },
  {
    key: "production",
    code: "MES",
    name: "Production Management",
    tagline: "Manufacturing Execution System",
    description:
      "Real-time shop-floor execution — work orders, dispatching, OEE, downtime and traceability across every line.",
    icon: Factory,
    url: "",
    fallback: "/products/mes",
    stats: [
      { label: "Visibility", value: "Real-time" },
      { label: "Tracking", value: "Unit-level" },
    ],
  },
  {
    key: "manufacturing",
    code: "WMS",
    name: "Manufacturing Management",
    tagline: "Warehouse & Material Management",
    description:
      "Unified control of inventory, material flow, warehousing and logistics — every movement traced, every location known.",
    icon: Boxes,
    url: "",
    fallback: "/products/wms",
    stats: [
      { label: "Accuracy", value: "99.9%" },
      { label: "Coverage", value: "Multi-site" },
    ],
  },
  {
    key: "quality",
    code: "QMS",
    name: "Quality Management",
    tagline: "Quality Management System",
    description:
      "Inspections, SPC, non-conformance and CAPA — quality embedded in the process, not inspected in afterwards.",
    icon: BadgeCheck,
    url: "",
    fallback: "/products/qms",
    stats: [
      { label: "Standards", value: "ISO 9001" },
      { label: "Control", value: "SPC · CAPA" },
    ],
  },
  {
    key: "access",
    code: "IAM",
    name: "Access Management",
    tagline: "Identity & Access Hub",
    description:
      "Central command for users, roles and permissions across every ManuQube system — one hub, complete audit trail.",
    icon: ShieldCheck,
    url: "",
    fallback: "/products/rms",
    stats: [
      { label: "Control", value: "Role-based" },
      { label: "Audit", value: "Full trail" },
    ],
  },
];
