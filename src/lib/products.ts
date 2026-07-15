import { Factory, ClipboardCheck, Warehouse, PackageCheck, FlaskConical, type LucideIcon } from "lucide-react";
import productMes from "@/assets/product-mes.jpg";
import productQms from "@/assets/product-qms.jpg";
import productWms from "@/assets/product-wms.jpg";
import productOms from "@/assets/product-oms.jpg";
import productRms from "@/assets/product-rms.jpg";

export type Product = {
  slug: string;
  code: string; // e.g. MES-2600
  acronym: string;
  name: string; // full spelled-out name
  tagline: string;
  summary: string;
  hero: string;
  icon: LucideIcon;
  overview: string[];
  capabilities: { title: string; body: string }[];
  modules: { group: string; items: string[] }[];
  specs: { label: string; value: string }[];
  useCases: string[];
  deployment: string[];
  metrics: { label: string; value: string }[];
  integrations: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "mes",
    code: "MES-2600",
    acronym: "MES",
    name: "Manufacturing Execution System",
    tagline: "Real-time execution across every line, station and operator.",
    summary:
      "Orchestrate production orders, work orders and operator terminals with unit-level genealogy, downtime intelligence and live OEE. Purpose-built for discrete and batch operations that refuse to run on paper.",
    hero: productMes,
    icon: Factory,
    overview: [
      "MES-2600 is the execution backbone of the ManuQube platform. It converts released production orders into live work orders, drives HMI and operator terminals on the shop floor, and streams every state change into a unified event bus.",
      "Every unit produced carries a genealogy record: which recipe version built it, which lot of raw material fed it, which operator signed for each quality gate, and which downtime events touched the run. Nothing is inferred after the fact.",
      "The system was designed for regulated industries where audit trails, e-signatures and reversible workflows are the price of entry — but it stays fast enough for high-mix, low-volume plants that reconfigure lines daily.",
    ],
    capabilities: [
      { title: "Live line control", body: "HMI and operator terminals per station with real-time state, interlocks, e-signatures and step-level enforcement of the active recipe version." },
      { title: "Production & work orders", body: "Plan, release and track orders with drag-and-drop scheduling. Split, merge, reschedule and reassign without leaving the tower view." },
      { title: "Traceability & genealogy", body: "Forward and backward traceability of every unit, batch and component consumed — queryable in milliseconds, exportable for auditors." },
      { title: "Downtime & OEE", body: "Classify unplanned stops with reason trees. Compute OEE, availability, performance, quality, MTBF and MTTR in real time per shift and per line." },
      { title: "Quality gates", body: "Inline inspection gates block advancement until the operator or QC signs off. Pass results into QMS-1800 without duplicate entry." },
      { title: "Master data & audit", body: "Products, lines, stations, materials and users are versioned. Every mutation is signed, timestamped and immutable." },
    ],
    modules: [
      { group: "Execution", items: ["Production Orders", "Work Orders", "Lines", "Stations", "HMI Terminals", "Operator Terminals"] },
      { group: "Process", items: ["Recipes", "Step Templates", "Quality Gates", "Downtime & Waste", "Setup & Changeover"] },
      { group: "Traceability", items: ["Genealogy", "Lot Tracking", "Serial Tracking", "Component Consumption", "Rework"] },
      { group: "Analytics", items: ["OEE", "Availability", "MTBF / MTTR", "Reason Trees", "Shift Reports"] },
    ],
    specs: [
      { label: "Concurrent stations", value: "500+" },
      { label: "State update latency", value: "< 250 ms" },
      { label: "Event throughput", value: "10k events / sec / line" },
      { label: "Retention", value: "Configurable, indefinite" },
      { label: "Auth", value: "SSO / OIDC + e-signature" },
      { label: "Deployment", value: "Cloud or on-prem" },
    ],
    useCases: [
      "Discrete assembly of electronics, appliances and automotive parts",
      "Batch pharmaceutical and specialty chemical lines",
      "High-mix, low-volume contract manufacturing",
      "Food and beverage processing with HACCP requirements",
    ],
    deployment: [
      "Managed cloud with 99.95% SLA and rolling zero-downtime upgrades",
      "Self-hosted single-command deployment with docker compose on customer infrastructure",
      "Air-gapped mode with signed offline update bundles for regulated sites",
    ],
    metrics: [
      { label: "OEE uplift", value: "+18%" },
      { label: "Paperless coverage", value: "100%" },
      { label: "Rollout time", value: "< 90 days" },
    ],
    integrations: ["OPC-UA", "MQTT", "PLC direct I/O", "SAP", "Oracle", "REST + webhooks"],
  },
  {
    slug: "qms",
    code: "QMS-1800",
    acronym: "QMS",
    name: "Quality Management System",
    tagline: "Spec-driven quality, from inspection to CAPA.",
    summary:
      "Versioned product specifications, scheduled inspections, non-conformance boards and full CAPA lifecycle — with dashboards, exports and role-based approvals. Designed around HACCP, BRC and ISO 9001 realities.",
    hero: productQms,
    icon: ClipboardCheck,
    overview: [
      "QMS-1800 is the quality spine of the platform. Every product carries a versioned specification: acceptance limits, sampling plans, test methods and reference standards. Nothing is inspected against a spec that isn't in force.",
      "Inspections are scheduled from the spec, executed on tablet or terminal, and land immediately on the NC board when they fail. Non-conformances flow through a CAPA lifecycle — containment, root cause, corrective action, verification — with role gates at every step.",
      "Dashboards summarize first-pass yield, NC rate by product and by line, and CAPA effectiveness. Every artifact is exportable as CSV or signed PDF for auditors.",
    ],
    capabilities: [
      { title: "Versioned specifications", body: "Every spec is a first-class, versioned artifact bound to the product and its packaging variants. Inspections always reference the active version." },
      { title: "Scheduled inspections", body: "Time-based, batch-triggered and event-triggered inspections, delivered to the right operator at the right station with the right method." },
      { title: "NC board & CAPA", body: "A drag-and-drop non-conformance board flowing into a full CAPA workflow with role separation, e-signatures and verification by qualified auditors." },
      { title: "Dashboards & KPIs", body: "First-pass yield, defect rate, NC cycle time, CAPA effectiveness — all sliced by product, line, shift and customer." },
      { title: "Exports & reporting", body: "Signed PDF certificates of conformance, CSV extracts, and API endpoints for BI tools and customer portals." },
      { title: "Multi-role governance", body: "Operator, inspector, quality engineer, auditor and admin — five roles, strict separation of duties, full audit log." },
    ],
    modules: [
      { group: "Standards", items: ["Products", "Quality Specs", "Test Methods", "Sampling Plans", "Reference Standards"] },
      { group: "Execution", items: ["Inspections", "Sample Plans", "Field Capture", "Signatures", "Attachments"] },
      { group: "Non-conformance", items: ["NC Board", "Containment", "Root Cause", "CAPA", "Verification"] },
      { group: "Governance", items: ["Users & Roles", "Audit Log", "Reports", "Exports", "Settings"] },
    ],
    specs: [
      { label: "Roles", value: "5 (Op, Insp, QE, Auditor, Admin)" },
      { label: "Spec versions per product", value: "Unlimited" },
      { label: "Exports", value: "PDF, CSV, JSON API" },
      { label: "Signatures", value: "21 CFR Part 11 compatible" },
      { label: "Deployment", value: "Cloud or self-hosted" },
      { label: "Offline mode", value: "Tablet capture with sync" },
    ],
    useCases: [
      "Food manufacturers under HACCP, BRC or IFS certification",
      "Pharmaceutical and medical-device makers requiring 21 CFR Part 11",
      "Contract manufacturers needing per-customer quality certificates",
      "Multi-plant quality organizations with shared spec libraries",
    ],
    deployment: [
      "Fully managed on Lovable Cloud with automated backups",
      "Self-hosted with docker compose for air-gapped or on-prem plants",
      "Hybrid: shared standards library in cloud, execution on-prem",
    ],
    metrics: [
      { label: "NC cycle time", value: "-48%" },
      { label: "Audit prep", value: "Hours, not weeks" },
      { label: "First-pass yield", value: "+9%" },
    ],
    integrations: ["MES-2600", "SAP QM", "LIMS", "ERP", "REST + webhooks"],
  },
  {
    slug: "wms",
    code: "WMS-3400",
    acronym: "WMS",
    name: "Warehouse Management System",
    tagline: "From receiving dock to dispatch bay — one system.",
    summary:
      "Manage raw materials, spare parts, finished goods and their movements across bins, zones and buildings. Purchase orders, receiving, put-away, picking, cycle counting and vendor performance — with public webhooks for any monitoring stack.",
    hero: productWms,
    icon: Warehouse,
    overview: [
      "WMS-3400 is the physical-inventory brain of the platform. Every SKU has a hierarchy of locations — buildings, zones, aisles, bins — and every movement is a signed event.",
      "Purchase orders drive receiving, receiving drives put-away, and picking is orchestrated by wave or by order. Reorder points and vendor lead times keep raw materials in stock without human tuning.",
      "The same substrate manages spare parts for critical assets, so a maintenance work order in MES-2600 can consume from stock and trigger a reorder in one atomic transaction.",
    ],
    capabilities: [
      { title: "Locations & bins", body: "Multi-building, multi-zone hierarchy with per-bin capacity, mixing rules and put-away strategies (fixed, dynamic, chaotic)." },
      { title: "Receiving & put-away", body: "Barcode-driven ASN receiving, quality holds, cross-dock and directed put-away." },
      { title: "Picking & dispatch", body: "Wave, batch and single-order picking with pick paths, staging and dispatch confirmation." },
      { title: "Inventory & cycle counts", body: "Perpetual inventory, cycle counting by ABC class and full physical inventory with reconciliation reports." },
      { title: "Vendors & purchase orders", body: "Manage vendors, blanket POs, reorder points, lead-time tracking and vendor scorecards." },
      { title: "Public webhooks", body: "Every entity emits public webhooks so SCADA, monitoring and BI stacks integrate without custom middleware." },
    ],
    modules: [
      { group: "Inventory", items: ["SKUs", "Locations", "Bins", "Lots & Serials", "Inventory Snapshots"] },
      { group: "Inbound", items: ["Purchase Orders", "ASN Receiving", "Put-away", "Quality Holds", "Cross-dock"] },
      { group: "Outbound", items: ["Picking Waves", "Packing", "Staging", "Dispatch", "Returns"] },
      { group: "Ops", items: ["Vendors", "Cycle Counts", "Reorder Points", "Failure Codes", "Reports", "Integrations"] },
    ],
    specs: [
      { label: "SKUs supported", value: "Millions" },
      { label: "Locations", value: "Unlimited hierarchy" },
      { label: "Inventory model", value: "Perpetual, event-sourced" },
      { label: "Barcode formats", value: "GS1, Code 128, QR, Datamatrix" },
      { label: "Webhooks", value: "Per-entity, signed" },
      { label: "Deployment", value: "Cloud or self-hosted" },
    ],
    useCases: [
      "Plants running raw materials and finished goods in one warehouse",
      "Multi-site distribution centers with pick-pack-dispatch",
      "Maintenance-heavy operations tracking critical spares",
      "3PLs handling per-customer inventory pools",
    ],
    deployment: [
      "Cloud, on-prem or hybrid",
      "Runs on cheap hardware — a single compose file, no dedicated servers",
      "Webhook endpoints publicly reachable for zero-friction integration",
    ],
    metrics: [
      { label: "Inventory accuracy", value: "99.7%" },
      { label: "Picking speed", value: "+31%" },
      { label: "Reorder automation", value: "100%" },
    ],
    integrations: ["MES-2600", "OMS-4200", "SAP MM", "Any WMS-compatible scanner", "REST + webhooks"],
  },
  {
    slug: "oms",
    code: "OMS-4200",
    acronym: "OMS",
    name: "Order Management System",
    tagline: "Where commercial intent meets the shop floor.",
    summary:
      "Customer orders, batches, shipments, returns and per-customer views in one control tower. Convert sales into production in a click and back again — without spreadsheets between them.",
    hero: productOms,
    icon: PackageCheck,
    overview: [
      "OMS-4200 sits at the seam between commerce and manufacturing. Sales enter or import customer orders; the system slices them into batches or production orders that MES-2600 can execute; shipments and returns are handled on the same substrate.",
      "Every customer has a consolidated record: what they ordered, what shipped, what's in production, what came back, and what's being made now. Account managers, planners and operators see the version of that record their role needs.",
      "The system replaces the fleet of spreadsheets that usually live between ERP and MES — no double entry, no reconciliation, no lost signal.",
    ],
    capabilities: [
      { title: "Order-to-batch", body: "One-click conversion of customer orders into production orders and batches, with rules to consolidate or split by SKU, deadline or customer priority." },
      { title: "Customer records", body: "Consolidated customer view spanning orders, batches, shipments and returns. Role-based redaction of commercial fields." },
      { title: "Shipments", body: "Track shipments by carrier, container and lot. Trigger dispatch from WMS-3400 with a signed handshake." },
      { title: "Returns & RMAs", body: "RMA workflow with disposition rules, credit memos and links back to the originating production batch." },
      { title: "Requests & notifications", body: "Internal requests and real-time notifications to operators, planners and account managers — SMS, email or in-app." },
      { title: "Reports & audit", body: "Order backlog, on-time delivery, return rate, per-customer profitability. Every change is signed and auditable." },
    ],
    modules: [
      { group: "Commerce", items: ["Customers", "Customer Orders", "Contracts", "Pricing", "Requests"] },
      { group: "Fulfillment", items: ["Production Orders", "Batches", "Shipments", "Carriers", "Returns"] },
      { group: "Comms", items: ["Notifications", "Templates", "Email", "SMS", "Webhooks"] },
      { group: "Governance", items: ["Roles", "Reports", "Exports", "Audit Log"] },
    ],
    specs: [
      { label: "Order model", value: "Header + lines + fulfillments" },
      { label: "Notifications", value: "Email, SMS, webhook, in-app" },
      { label: "Order-to-plan latency", value: "Seconds" },
      { label: "Multi-currency", value: "Yes" },
      { label: "Roles", value: "Sales, Planner, Ops, Admin" },
      { label: "Deployment", value: "Cloud or self-hosted" },
    ],
    useCases: [
      "Contract manufacturers running per-customer batches",
      "Distribution-heavy operations bridging sales and production",
      "Teams replacing spreadsheets between ERP and shop floor",
      "Consumer-goods brands with high SKU turnover",
    ],
    deployment: [
      "Cloud managed, single-tenant or shared",
      "Self-hosted via docker compose",
      "Deep bidirectional link with SAP, Odoo, NetSuite and Dynamics",
    ],
    metrics: [
      { label: "Order-to-plan", value: "Seconds" },
      { label: "Return cycle", value: "-42%" },
      { label: "On-time delivery", value: "+14%" },
    ],
    integrations: ["MES-2600", "WMS-3400", "SAP SD", "Odoo", "NetSuite", "REST + webhooks"],
  },
  {
    slug: "rms",
    code: "RMS-1200",
    acronym: "RMS",
    name: "Recipe Management System",
    tagline: "Version control for the things your plant actually makes.",
    summary:
      "A Git-style workbench for recipes, workflows and schemas. Branch, diff, trial and promote process definitions across sites — with typed schemas, full audit and scoped API keys.",
    hero: productRms,
    icon: FlaskConical,
    overview: [
      "RMS-1200 treats process definitions the way software teams treat code. Every recipe, workflow and schema lives in a branch. Engineers iterate on a trial branch without touching production, run comparison reports side-by-side, and promote a version with a signed merge event.",
      "Schemas are typed, so every recipe field, unit and material reference is validated at authoring time — not at 3am on the line. Retention policies keep historical versions available for the full regulatory window, and scoped API keys expose recipes to downstream systems without cross-contamination.",
      "The result: recipe rollouts that used to take weeks of coordination happen in an afternoon, with full traceability of who changed what and why.",
    ],
    capabilities: [
      { title: "Branches & merges", body: "Iterate on a trial branch without disrupting production. Promote with a signed merge, roll back with a click." },
      { title: "Trials & compare", body: "Run trial workflows and diff parameter sets side-by-side. Approve based on data, not on gut feel." },
      { title: "Typed schemas", body: "Every recipe field, unit and material reference is validated against a typed schema at authoring time." },
      { title: "Retention & policy", body: "Enterprise-grade retention with time-boxed and event-boxed policies for regulated industries." },
      { title: "Scoped API keys", body: "Expose recipes to downstream systems with per-key scopes and independent rotation windows." },
      { title: "Roles & audit", body: "Author, approver, publisher and admin roles with full signed audit trail on every change." },
    ],
    modules: [
      { group: "Authoring", items: ["Recipes", "Workflows", "Schemas", "Materials", "Units"] },
      { group: "Lifecycle", items: ["Branches", "Trials", "Compare", "Promote", "Rollback"] },
      { group: "Access", items: ["API Keys", "Roles", "Scopes", "Rotation"] },
      { group: "Governance", items: ["Retention", "Audit", "Reports", "Exports"] },
    ],
    specs: [
      { label: "Version model", value: "Branch / trial / promote" },
      { label: "Schema type system", value: "First-class, typed" },
      { label: "Diff", value: "Field-level, side-by-side" },
      { label: "API keys", value: "Scoped, rotatable" },
      { label: "Retention", value: "Configurable, indefinite" },
      { label: "Deployment", value: "Cloud or self-hosted" },
    ],
    useCases: [
      "Chemical and pharmaceutical process authoring",
      "F&B recipe governance across multiple plants",
      "Continuous-improvement engineering teams running frequent trials",
      "Contract manufacturers isolating per-customer recipe libraries",
    ],
    deployment: [
      "Cloud managed with automated retention",
      "Self-hosted via docker compose for regulated environments",
      "Federated: central authoring, per-site promotion",
    ],
    metrics: [
      { label: "Recipe rollout", value: "6× faster" },
      { label: "Audit-ready diffs", value: "Every change" },
      { label: "Sites in sync", value: "Unlimited" },
    ],
    integrations: ["MES-2600", "QMS-1800", "Historian systems", "PLM", "REST + webhooks"],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
