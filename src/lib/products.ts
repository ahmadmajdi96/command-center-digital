import { Factory, GitBranch, ShieldCheck, Truck, Wrench, ClipboardCheck, type LucideIcon } from "lucide-react";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  category: string;
  icon: LucideIcon;
  accent: "electric" | "signal";
  features: { title: string; body: string }[];
  modules: string[];
  useCases: string[];
  metrics: { label: string; value: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "mes-command-center",
    name: "MES Command Center",
    tagline: "Shop-floor execution, end to end.",
    summary:
      "A full manufacturing execution system covering production orders, work orders, HMI stations, operator terminals, quality gates, downtime tracking and genealogy — from raw material to finished unit.",
    category: "Manufacturing Execution",
    icon: Factory,
    accent: "electric",
    features: [
      { title: "Live line control", body: "Operator and HMI terminals per station with real-time state, e-signatures and interlocks." },
      { title: "Order orchestration", body: "Plan, release and track production orders and work orders across lines with drag-and-drop scheduling." },
      { title: "Traceability & genealogy", body: "Full forward/backward traceability of every unit, batch and component consumed." },
      { title: "Downtime & OEE", body: "Classify downtime with reason trees and compute OEE, MTBF and MTTR in real time." },
    ],
    modules: [
      "Production Orders", "Work Orders", "Lines & Stations", "HMI Terminals", "Operator Terminals",
      "Recipes & Step Templates", "Quality Gates", "Downtime & Waste", "Traceability", "Genealogy",
      "Telemetry", "Master Data", "Audit Log",
    ],
    useCases: [
      "Discrete and batch manufacturing plants",
      "High-mix low-volume production lines",
      "Regulated industries needing full genealogy",
    ],
    metrics: [
      { label: "Stations orchestrated", value: "500+" },
      { label: "OEE uplift", value: "+18%" },
      { label: "Paperless coverage", value: "100%" },
    ],
  },
  {
    slug: "mes-command-hub",
    name: "MES Command Hub",
    tagline: "Version control for your recipes.",
    summary:
      "A Git-style workbench for recipes, workflows and schemas. Branch, diff, trial and promote process definitions across sites with full audit and role separation.",
    category: "Recipe & Workflow Ops",
    icon: GitBranch,
    accent: "electric",
    features: [
      { title: "Branch & merge recipes", body: "Iterate safely on process definitions without disrupting production." },
      { title: "Trials & compare", body: "Run trial workflows and diff parameter sets side-by-side before promotion." },
      { title: "Schema-first", body: "Typed schemas govern every recipe field, unit and material reference." },
      { title: "Retention & API keys", body: "Enterprise-grade retention policies and scoped API keys for integration." },
    ],
    modules: ["Recipes", "Workflows", "Schemas", "Materials", "Units", "Branches", "Trials", "Compare", "Retention", "API Keys", "Roles", "Audit"],
    useCases: [
      "Chemical & pharma process authoring",
      "F&B recipe governance across plants",
      "Continuous-improvement engineering teams",
    ],
    metrics: [
      { label: "Faster recipe rollout", value: "6x" },
      { label: "Audit-ready diffs", value: "Every change" },
      { label: "Sites in sync", value: "Unlimited" },
    ],
  },
  {
    slug: "command-center-pro",
    name: "Command Center Pro",
    tagline: "Enterprise identity for the plant.",
    summary:
      "Central authentication, SSO and role management layered on top of the ManuQube suite. One login, one policy surface, every operation.",
    category: "Identity & Access",
    icon: ShieldCheck,
    accent: "signal",
    features: [
      { title: "Unified sign-in", body: "One credential set across every ManuQube product with granular role mapping." },
      { title: "Policy-driven RBAC", body: "Row-level and action-level policies enforced at the data layer." },
      { title: "Enterprise SSO ready", body: "Pluggable providers, session hardening and refresh-token rotation." },
      { title: "Zero-trust API", body: "Signed webhooks and scoped keys for every downstream integration." },
    ],
    modules: ["Authentication", "SSO", "Role Mapping", "Session Management", "Policy Engine", "Audit"],
    useCases: [
      "Multi-plant, multi-tenant deployments",
      "Regulated environments needing traceable access",
      "Operators using tablets, HMIs and back-office tools",
    ],
    metrics: [
      { label: "Auth latency", value: "< 80ms" },
      { label: "Rotation window", value: "Configurable" },
      { label: "Providers", value: "Any OIDC" },
    ],
  },
  {
    slug: "mes-command-central",
    name: "MES Command Central",
    tagline: "Where sales, orders and shipments meet the floor.",
    summary:
      "Customer orders, batches, returns and shipments in one control tower. Convert commercial intent into production intent, and vice-versa, without spreadsheets.",
    category: "Order & Supply Ops",
    icon: Truck,
    accent: "electric",
    features: [
      { title: "Order-to-batch", body: "Turn customer orders into production orders and batches with one click." },
      { title: "Returns & requests", body: "Handle RMAs, internal requests and customer notifications in one workflow." },
      { title: "Shipments & customers", body: "Consolidated customer records and shipment tracking with role-based views." },
      { title: "Notifications", body: "Real-time alerts to operators, planners and account managers." },
    ],
    modules: ["Customers", "Orders", "Production Orders", "Batches", "Shipments", "Returns", "Requests", "Notifications", "Audit"],
    useCases: [
      "Contract manufacturers running per-customer runs",
      "Distribution-heavy operations",
      "Teams unifying commercial and production data",
    ],
    metrics: [
      { label: "Order-to-plan", value: "Seconds" },
      { label: "Return cycle", value: "-42%" },
      { label: "Ops visibility", value: "One tower" },
    ],
  },
  {
    slug: "unified-command-center",
    name: "Unified Command Center",
    tagline: "CMMS for critical assets.",
    summary:
      "Maintain what makes you money. Assets, work orders, PM schedules, spare inventory, vendors and purchase orders — with public webhooks that plug into any monitoring stack.",
    category: "Maintenance & Reliability",
    icon: Wrench,
    accent: "signal",
    features: [
      { title: "Assets & failure codes", body: "Hierarchical asset registry with standardized failure code trees." },
      { title: "PM schedules", body: "Time and meter-based preventive maintenance with auto-generated work orders." },
      { title: "Inventory & vendors", body: "Track spares, reorder points and vendor performance in one place." },
      { title: "Webhooks & integrations", body: "Public webhook endpoints per system for zero-friction integrations." },
    ],
    modules: ["Assets", "Work Orders", "PM Schedules", "Inventory", "Vendors", "Purchase Orders", "Failure Codes", "Reports", "Integrations", "Audit"],
    useCases: [
      "Plant reliability & maintenance teams",
      "Multi-site asset owners",
      "Ops with heavy sensor & SCADA integrations",
    ],
    metrics: [
      { label: "Unplanned downtime", value: "-35%" },
      { label: "MTTR", value: "-27%" },
      { label: "Webhook systems", value: "Any" },
    ],
  },
  {
    slug: "corta-qc",
    name: "CORTA QC System",
    tagline: "Quality control, engineered for food.",
    summary:
      "Product specs, scheduled inspections, non-conformances and CAPA — with dashboards, reports and CSV/PDF exports. Deployable managed or fully self-hosted.",
    category: "Quality Management",
    icon: ClipboardCheck,
    accent: "signal",
    features: [
      { title: "Spec-driven inspections", body: "Every inspection is bound to a versioned quality specification." },
      { title: "NC & CAPA workflow", body: "Drag-and-drop NC board, CAPA lifecycle and verification by auditors." },
      { title: "Dashboards & exports", body: "KPI dashboards, Recharts visualizations, CSV and PDF reports." },
      { title: "Managed or self-hosted", body: "Same product, two deployments — Lovable Cloud or docker-compose." },
    ],
    modules: ["Products", "Quality Specs", "Inspections", "NC Board", "CAPA", "Reports", "Users & Roles", "Settings", "Audit Log"],
    useCases: [
      "Food manufacturers under HACCP/BRC",
      "Multi-role quality organizations",
      "Teams needing offline / air-gapped deployment",
    ],
    metrics: [
      { label: "NC cycle time", value: "-48%" },
      { label: "Roles supported", value: "5" },
      { label: "Deployments", value: "Cloud & self-host" },
    ],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
