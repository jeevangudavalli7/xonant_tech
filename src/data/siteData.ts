import {
  ProjectItem,
  ServiceItem,
  PrincipleItem,
  ProcessNode,
  StatItem,
  TestimonialItem,
  PricingPlan,
  InsightItem,
  FAQItem,
} from "@/types";

export const siteConfig = {
  name: "XONANT TECH",
  tagline: "BUILD. SOLVE. EVOLVE.",
  mission:
    "Help individuals, startups and businesses turn ideas into reliable digital products and technology solutions, while building software and products that create long-term value.",
  positioning:
    "Independent technology & digital product agency engineered for high-performance software, AI systems, and SaaS platforms.",
  status: "AVAILABLE FOR SELECT PROJECTS",
  contact: {
    email: "contact@xonant.tech",
    phone: "+1 (800) 966-2688",
    location: "Global Distributed / SF & Singapore",
  },
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "X (Twitter)", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Discord", href: "https://discord.com" },
  ],
  navLinks: [
    { label: "WORK", href: "#work" },
    { label: "SERVICES", href: "#services" },
    { label: "ABOUT", href: "#about" },
    { label: "PROCESS", href: "#process" },
    { label: "INSIGHTS", href: "#insights" },
    { label: "CONTACT", href: "#contact" },
  ],
};

export const trustStats: StatItem[] = [
  {
    value: "50+",
    label: "PROJECTS SHIPPED",
    sublabel: "From seed-stage MVPs to high-scale platforms",
  },
  {
    value: "20+",
    label: "GLOBAL CLIENTS",
    sublabel: "Trusted by founders & engineering leaders",
  },
  {
    value: "12+",
    label: "COUNTRIES REACHED",
    sublabel: "Distributed worldwide impact & deployment",
  },
  {
    value: "99%",
    label: "CLIENT SATISFACTION",
    sublabel: "Long-term engineering partnerships",
  },
];

export const selectedProjects: ProjectItem[] = [
  {
    id: "nexus-ai",
    number: "01",
    title: "NEXUS INTELLIGENCE",
    subtitle: "Enterprise Autonomous AI Workflow & RAG Infrastructure",
    industry: "AI / SAAS",
    services: ["AI Architecture", "Full-Stack Dev", "Cloud Orchestration"],
    year: "2026",
    description:
      "A next-generation enterprise multi-agent platform automating complex analytical reasoning with real-time vector search and high-throughput streaming pipelines.",
    metrics: { label: "Query Latency Reduction", value: "4.2x Faster" },
    technologies: ["Next.js 15", "Python", "FastAPI", "Pinecone", "PyTorch"],
    link: "#contact",
    featuredVisual: {
      type: "canvas",
      accentColor: "#B4FF39",
      tag: "AGENTIC_CORE_V2",
    },
  },
  {
    id: "quantum-fintech",
    number: "02",
    title: "KINETIC CAPITAL",
    subtitle: "Algorithmic Asset Management & Liquidity Dashboard",
    industry: "FINTECH / WEB APP",
    services: ["UI/UX Architecture", "Frontend Systems", "Realtime WebSockets"],
    year: "2026",
    description:
      "Sub-millisecond trade execution visualization suite and decentralized portfolio manager with bank-grade security protocols.",
    metrics: { label: "Daily Volume Handled", value: "$180M+" },
    technologies: ["React 19", "TypeScript", "Go", "PostgreSQL", "Tailwind CSS"],
    link: "#contact",
    featuredVisual: {
      type: "gradient",
      accentColor: "#B4FF39",
      tag: "ORDER_BOOK_ENGINE",
    },
  },
  {
    id: "aether-cloud",
    number: "03",
    title: "AETHER DISTRIBUTED OS",
    subtitle: "Developer Infrastructure & Edge Compute Orchestration",
    industry: "CLOUD / INFRASTRUCTURE",
    services: ["Backend Engineering", "DevOps", "API Design"],
    year: "2025",
    description:
      "Serverless compute management interface providing zero-cold-start container deployments and instant global telemetry across 45 edge regions.",
    metrics: { label: "Deployment Velocity", value: "<850ms" },
    technologies: ["Rust", "Docker", "Kubernetes", "Next.js", "Redis"],
    link: "#contact",
    featuredVisual: {
      type: "code",
      accentColor: "#B4FF39",
      tag: "EDGE_RUNTIME_NODE",
    },
  },
  {
    id: "synapse-health",
    number: "04",
    title: "SYNAPSE BIOMEDICAL",
    subtitle: "Predictive Health Telemetry & Diagnostic Interface",
    industry: "MEDTECH / AI",
    services: ["Full-Stack Dev", "Mobile System", "Computer Vision"],
    year: "2025",
    description:
      "HIPAA-compliant diagnostic dashboard analyzing medical imaging datasets with proprietary neural classification models.",
    metrics: { label: "Diagnostic Accuracy", value: "98.7%" },
    technologies: ["TensorFlow", "FastAPI", "React Native", "TypeScript"],
    link: "#contact",
    featuredVisual: {
      type: "canvas",
      accentColor: "#B4FF39",
      tag: "NEURAL_SCAN_V4",
    },
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    number: "01",
    title: "WEB DEVELOPMENT",
    shortDesc: "High-performance digital flagships, web apps, and immersive frontend experiences.",
    fullDesc:
      "We build web applications and digital interfaces with razor-sharp typography, ultra-low latency, and modern frameworks that leave lasting impressions.",
    problemSolved:
      "Eliminates sluggish page loads, outdated design baggage, and unscalable codebase architectures.",
    deliverables: [
      "Modern Next.js / React Architecture",
      "Tailwind Glassmorphic Design Systems",
      "Zero-Layout-Shift SEO Optimization",
      "Interactive WebGL / Three.js Visuals",
    ],
    technologies: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Three.js"],
    timeline: "2 – 6 Weeks",
  },
  {
    id: "fullstack-dev",
    number: "02",
    title: "FULL-STACK DEVELOPMENT",
    shortDesc: "End-to-end software applications engineered for stability, scale, and high user concurrency.",
    fullDesc:
      "Unified application development connecting fluid, responsive client interfaces with resilient backend architectures and cloud databases.",
    problemSolved:
      "Bridges the gap between frontend beauty and backend durability with zero technical debt.",
    deliverables: [
      "Complete Frontend & Backend Systems",
      "Role-Based Authentication & Security",
      "Relational & NoSQL Database Schema",
      "End-to-End Automated Testing Suite",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "Prisma", "Next.js"],
    timeline: "4 – 12 Weeks",
  },
  {
    id: "ai-ml",
    number: "03",
    title: "AI & MACHINE LEARNING",
    shortDesc: "Intelligent systems, RAG pipelines, fine-tuned models, and predictive algorithms.",
    fullDesc:
      "We architect real-world machine learning solutions that parse unstructured data, automate complex business workflows, and generate high-confidence predictions.",
    problemSolved:
      "Transforms raw enterprise data into actionable intelligence without relying on brittle generic wrappers.",
    deliverables: [
      "Custom RAG Vector Search Pipelines",
      "Fine-tuned Open & Proprietary LLMs",
      "Neural Embeddings & Semantic Indexing",
      "Autonomous Agent Workflows",
    ],
    technologies: ["PyTorch", "TensorFlow", "LangChain", "Pinecone", "FastAPI"],
    timeline: "4 – 10 Weeks",
  },
  {
    id: "ai-automation",
    number: "04",
    title: "AI AUTOMATION",
    shortDesc: "Autonomous digital agents and background pipelines that streamline operations 24/7.",
    fullDesc:
      "Automate repetitive cognitive tasks, document ingestion, customer interaction routing, and system monitoring using state-of-the-art agentic frameworks.",
    problemSolved:
      "Drastically reduces operational overhead and human error in repetitive digital processes.",
    deliverables: [
      "Multi-Agent Workflow Orchestration",
      "Document OCR & Extraction Engines",
      "Automated Alerting & Triage Bots",
      "Third-Party API Integration Bridges",
    ],
    technologies: ["Python", "FastAPI", "Docker", "Temporal", "OpenAI / Claude API"],
    timeline: "2 – 6 Weeks",
  },
  {
    id: "saas-dev",
    number: "05",
    title: "SAAS DEVELOPMENT",
    shortDesc: "Multi-tenant platforms, subscription infrastructure, and enterprise product suites.",
    fullDesc:
      "From zero to scalable SaaS: multi-tenancy, subscription billing, onboarding flows, team permissioning, and analytics dashboards built for recurring revenue.",
    problemSolved:
      "Accelerates time-to-market for software founders while ensuring enterprise-grade architecture from day one.",
    deliverables: [
      "Multi-Tenant Database Architecture",
      "Stripe / LemonSqueezy Billing & Webhooks",
      "Team Collaboration & RBAC Roles",
      "Live Usage Telemetry & Analytics",
    ],
    technologies: ["Next.js", "PostgreSQL", "Supabase", "Stripe API", "Redis"],
    timeline: "6 – 16 Weeks",
  },
  {
    id: "mobile-apps",
    number: "06",
    title: "MOBILE APPS",
    shortDesc: "Native and cross-platform iOS & Android apps with silky 60fps animations.",
    fullDesc:
      "Crafted mobile experiences that feel at home on iOS and Android with offline-first caching, biometrics, hardware integration, and push notifications.",
    problemSolved:
      "Avoids sluggish hybrid web wrappers; delivers true native feel and App Store approval readiness.",
    deliverables: [
      "Cross-Platform React Native App",
      "Offline Synchronization Engine",
      "Push Notification & Deep Linking",
      "App Store & Google Play Submission",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Node.js"],
    timeline: "6 – 12 Weeks",
  },
  {
    id: "ui-ux",
    number: "07",
    title: "UI/UX DESIGN",
    shortDesc: "Futuristic, editorial, and conversion-focused design systems in Figma and code.",
    fullDesc:
      "Design that balances cinematic visual polish with intuitive usability. We build comprehensive design systems that bridge directly to React components.",
    problemSolved:
      "Prevents generic template aesthetics and poor user drop-off across critical conversion funnels.",
    deliverables: [
      "Full Figma Tokenized Design System",
      "Interactive High-Fidelity Prototypes",
      "Micro-Interaction & Motion Specs",
      "Responsive Layout Grids & Assets",
    ],
    technologies: ["Figma", "Framer", "Protopie", "Adobe CC", "Tailwind CSS"],
    timeline: "2 – 6 Weeks",
  },
  {
    id: "ecommerce",
    number: "08",
    title: "E-COMMERCE",
    shortDesc: "High-conversion headless shopping experiences and custom checkout architectures.",
    fullDesc:
      "Custom commerce flagships that blend editorial brand storytelling with fast checkout pipelines, international multi-currency, and inventory automation.",
    problemSolved:
      "Overcomes Shopify theme limitations with headless architectures designed to increase Average Order Value.",
    deliverables: [
      "Headless Shopify / Commerce Layer",
      "Custom Filter & Discovery Systems",
      "High-Conversion 1-Click Checkout",
      "Global Inventory & ERP Sync",
    ],
    technologies: ["Shopify Storefront API", "Next.js", "Algolia", "Tailwind CSS"],
    timeline: "4 – 8 Weeks",
  },
  {
    id: "branding",
    number: "09",
    title: "BRANDING & IDENTITY",
    shortDesc: "Distinctive technical and modern brand identities that stand apart from generic tech.",
    fullDesc:
      "Logotypes, typography hierarchies, color systems, and digital brand guidelines crafted for serious technology companies aiming for global recognition.",
    problemSolved:
      "Establishes immediate credibility with investors, talent, and high-value enterprise clients.",
    deliverables: [
      "Primary & Secondary Logomarks",
      "Typography & Color Matrix Systems",
      "Digital Brand Guidelines Book",
      "Vector Iconography & 3D Assets",
    ],
    technologies: ["Illustrator", "Figma", "Blender", "After Effects"],
    timeline: "2 – 4 Weeks",
  },
  {
    id: "backend-api",
    number: "10",
    title: "API & BACKEND",
    shortDesc: "Robust microservices, GraphQL / REST endpoints, and low-latency database layers.",
    fullDesc:
      "High-throughput server architectures designed to process millions of requests with automated rate limiting, authentication layers, and caching strategies.",
    problemSolved:
      "Prevents server bottlenecks and database locks under sudden traffic surges.",
    deliverables: [
      "RESTful & GraphQL API Endpoints",
      "Redis Caching & Queue Processing",
      "Automated Swagger / OpenAPI Documentation",
      "Database Partitioning & Indexing",
    ],
    technologies: ["Node.js", "Python FastAPI", "PostgreSQL", "Redis", "Docker"],
    timeline: "3 – 8 Weeks",
  },
  {
    id: "cloud-devops",
    number: "11",
    title: "CLOUD & DEVOPS",
    shortDesc: "Automated CI/CD pipelines, container orchestration, and cloud infrastructure as code.",
    fullDesc:
      "Automated deployment infrastructure on AWS, Vercel, and Cloudflare that scales automatically with zero downtime, instant rollbacks, and security hardening.",
    problemSolved:
      "Eliminates manual deploy mishaps, single points of failure, and excessive cloud hosting bills.",
    deliverables: [
      "Infrastructure as Code (Terraform / Docker)",
      "GitHub Actions Automated CI/CD Pipelines",
      "Cloudflare CDN & DDoS Protection",
      "24/7 Sentry / Datadog Telemetry",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Vercel", "Cloudflare"],
    timeline: "2 – 6 Weeks",
  },
  {
    id: "maintenance",
    number: "12",
    title: "MAINTENANCE & SLA",
    shortDesc: "Proactive uptime monitoring, security patching, dependency upgrades, and iterative improvements.",
    fullDesc:
      "Continuous engineering support keeping your production software secure, fast, and constantly evolving alongside your growing business requirements.",
    problemSolved:
      "Ensures critical platforms never go unmonitored or fall behind current security standards.",
    deliverables: [
      "Guaranteed 99.9% SLA Response Times",
      "Monthly Security Audits & Updates",
      "Continuous Feature Engineering Sprints",
      "Dedicated Slack / Discord Dev Channel",
    ],
    technologies: ["GitHub", "Datadog", "Sentry", "AWS CloudWatch"],
    timeline: "Ongoing Retainer",
  },
];

export const techClusters = [
  {
    category: "FRONTEND",
    description: "Ultra-fast, accessible, and reactive user interfaces.",
    skills: ["React 19", "Next.js 15", "TypeScript", "JavaScript (ESNext)", "Tailwind CSS", "Three.js", "GSAP"],
  },
  {
    category: "BACKEND",
    description: "Resilient server engines, data pipelines, and relational stores.",
    skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "GraphQL"],
  },
  {
    category: "AI & MACHINE LEARNING",
    description: "Deep learning frameworks, agents, and embedding pipelines.",
    skills: ["PyTorch", "TensorFlow", "LLMs (Open & Proprietary)", "RAG Systems", "AI Agents", "Computer Vision", "LangChain", "Vector DBs"],
  },
  {
    category: "CLOUD & DEVOPS",
    description: "Global edge distribution, container clusters, and security.",
    skills: ["AWS", "Docker", "Kubernetes", "Vercel", "Cloudflare", "GitHub Actions", "Terraform"],
  },
  {
    category: "DESIGN & 3D",
    description: "Design systems, spatial geometry, and kinetic motion.",
    skills: ["Figma", "Framer", "Blender", "Adobe Suite", "WebGL", "Spline", "Design Tokens"],
  },
];

export const whyPrinciples: PrincipleItem[] = [
  {
    number: "01",
    title: "STRATEGY FIRST",
    description:
      "Technology should solve a real commercial or user problem rather than simply look impressive. We validate architecture before writing code.",
    tag: "ARCHITECTURAL_RIGOR",
  },
  {
    number: "02",
    title: "DESIGN + ENGINEERING",
    description:
      "Design and engineering are developed together without handoff friction, ensuring pixel-perfection and top-tier runtime performance.",
    tag: "ZERO_HANDOFF_LOSS",
  },
  {
    number: "03",
    title: "AI-NATIVE THINKING",
    description:
      "AI is treated as a practical technology layer and structural accelerator, not an ornamental marketing buzzword.",
    tag: "PRAGMATIC_INTELLIGENCE",
  },
  {
    number: "04",
    title: "FAST ITERATION",
    description:
      "Build, test, learn and improve quickly. We ship production prototypes in days rather than months of theoretical deliberations.",
    tag: "VELOCITY_OBSESSED",
  },
  {
    number: "05",
    title: "SCALABLE TECHNOLOGY",
    description:
      "Solutions are engineered with room to grow. Clean modular architecture that easily accommodates 10x user and data expansion.",
    tag: "FUTURE_PROOF_CORE",
  },
  {
    number: "06",
    title: "LONG-TERM PARTNERSHIP",
    description:
      "The relationship does not end when the first version launches. We evolve your digital products as your business scales.",
    tag: "LIFECYCLE_EVOLUTION",
  },
];

export const processSteps: ProcessNode[] = [
  {
    step: "01",
    name: "DISCOVER",
    phase: "Research & Systems Audit",
    description:
      "Deep dive into user pain points, commercial objectives, and technical constraints to establish the strategic baseline.",
    deliverables: ["Product Roadmap", "Tech Stack Architecture", "Scope Matrix"],
    duration: "Week 1",
  },
  {
    step: "02",
    name: "DEFINE",
    phase: "Specifications & Wireframes",
    description:
      "Establish exact API boundaries, database schemas, and UX wireframes to eliminate ambiguity before visual build.",
    deliverables: ["System Specs", "Information Architecture", "Data Models"],
    duration: "Week 1 – 2",
  },
  {
    step: "03",
    name: "DESIGN",
    phase: "Glass UI & Visual Systems",
    description:
      "Craft bespoke visual assets, tokenized design systems, and responsive interactive prototypes.",
    deliverables: ["Figma Design Library", "Motion Specs", "High-Fi Prototypes"],
    duration: "Week 2 – 4",
  },
  {
    step: "04",
    name: "BUILD",
    phase: "Frontend, AI & Backend Dev",
    description:
      "Clean modular code implementation with strict type safety, real-time pipelines, and unit tests.",
    deliverables: ["Production Codebase", "API Integration", "AI Pipelines"],
    duration: "Week 4 – 8",
  },
  {
    step: "05",
    name: "TEST",
    phase: "QA, Security & Audit",
    description:
      "Cross-browser testing, stress analysis, penetration security checks, and zero-layout-shift audits.",
    deliverables: ["QA Audit Report", "Security Hardening", "Lighthouse 95+ Score"],
    duration: "Week 8 – 9",
  },
  {
    step: "06",
    name: "LAUNCH",
    phase: "Global Cloud Deployment",
    description:
      "Zero-downtime DNS propagation, automated CI/CD deployment, and real-time monitoring setup.",
    deliverables: ["Production Cloud Live", "Telemetry Monitoring", "SSL & CDN Edge"],
    duration: "Launch Day",
  },
  {
    step: "07",
    name: "GROW",
    phase: "Telemetry & Iteration",
    description:
      "Continuous performance analysis, feature iteration, model refinement, and scaling infrastructure.",
    deliverables: ["Monthly Sprint Logs", "Performance Retros", "Scale Optimization"],
    duration: "Ongoing",
  },
];

export const resultsStats: StatItem[] = [
  {
    value: "50+",
    label: "PROJECTS COMPLETED",
    sublabel: "Delivered on time across diverse digital verticals",
  },
  {
    value: "20+",
    label: "GLOBAL CLIENTS",
    sublabel: "From visionary founders to scaling enterprise firms",
  },
  {
    value: "10+",
    label: "INDUSTRIES EMPOWERED",
    sublabel: "Fintech, AI, SaaS, Medtech, Logistics & more",
  },
  {
    value: "95%",
    label: "RETENTION & SATISFACTION",
    sublabel: "Clients who return for future product engineering",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    quote:
      "Xonant Tech did not just deliver our platform; they completely elevated how our entire business thinks about AI workflows and interface speed. The code quality is extraordinary.",
    author: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "Nexus AI Systems",
    avatarText: "ER",
    industry: "Enterprise AI",
    verified: true,
  },
  {
    id: "test-2",
    quote:
      "Their fusion of high-end design aesthetics with rock-solid full-stack architecture is rare. They built our algorithmic dashboard in record time with zero compromise.",
    author: "Marcus Vance",
    role: "Founder & CEO",
    company: "Kinetic Financial",
    avatarText: "MV",
    industry: "FinTech",
    verified: true,
  },
  {
    id: "test-3",
    quote:
      "Working with Xonant felt like having a tier-1 Silicon Valley engineering team embedded directly into our startup. They turn complex technical ideas into frictionless software.",
    author: "Aria Chen",
    role: "Head of Product",
    company: "Synapse MedTech",
    avatarText: "AC",
    industry: "Healthcare AI",
    verified: true,
  },
  {
    id: "test-4",
    quote:
      "The glassmorphic visual identity and sub-second page performance helped us close our Series A funding within 6 weeks of product relaunch.",
    author: "Devon Thorne",
    role: "Co-Founder",
    company: "Aether Cloud OS",
    avatarText: "DT",
    industry: "Cloud Infra",
    verified: true,
  },
];

export const industriesData = [
  { name: "STARTUPS", tag: "SEED TO SERIES B", desc: "Rapid MVP prototyping and venture-ready software architecture." },
  { name: "SAAS", tag: "MULTI-TENANT", desc: "Scalable subscription platforms, dashboards, and automated billing." },
  { name: "FINTECH", tag: "HIGH SECURITY", desc: "Ultra-low latency trading interfaces and compliant transaction systems." },
  { name: "HEALTHCARE", tag: "HIPAA COMPLIANT", desc: "Biomedical telemetry, patient portals, and diagnostic AI models." },
  { name: "E-COMMERCE", tag: "HIGH CONVERSION", desc: "Headless storefronts, custom checkout funnels, and inventory sync." },
  { name: "EDUCATION", tag: "INTERACTIVE EDTECH", desc: "Adaptive learning platforms, LMS integrations, and gamified portals." },
  { name: "REAL ESTATE", tag: "PROPTECH", desc: "Spatial 3D architectural showcases, listing syndication, and analytics." },
  { name: "PROFESSIONAL SERVICES", tag: "ENTERPRISE", desc: "Client client portals, automated document intake, and CRM bridges." },
  { name: "TECHNOLOGY", tag: "DEVELOPER TOOLS", desc: "APIs, developer documentation hubs, CLI tooling, and edge runtimes." },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "STARTER",
    tagline: "For individuals, early-stage founders & focused MVPs.",
    whoItsFor: "Startups needing a high-impact digital flagship or focused MVP to validate product-market fit.",
    timeline: "2 – 4 Weeks Typical",
    priceLabel: "PROJECT SCOPED",
    features: [
      "High-Performance Modern Web Interface",
      "Glassmorphic Design System & Tokens",
      "Mobile-Optimized Responsive Architecture",
      "Essential API & CMS Integrations",
      "Technical SEO & Speed Optimization",
      "Dedicated Codebase Repository & Handover",
    ],
    deliverables: ["Production Next.js Website", "Figma Design Assets", "Deployment Setup"],
    ctaText: "START WITH STARTER",
  },
  {
    id: "growth",
    name: "GROWTH",
    tagline: "For scaling businesses needing a complete digital product.",
    whoItsFor: "Companies building full-stack web applications, SaaS platforms, or custom AI-integrated software.",
    timeline: "4 – 10 Weeks Typical",
    isPopular: true,
    priceLabel: "RECOMMENDED",
    features: [
      "Complete Full-Stack Application & UI",
      "Custom Backend APIs & Database Schema",
      "AI / LLM Integration or Custom Pipeline",
      "Interactive 3D / WebGL Visual Experiences",
      "User Auth, RBAC & Subscription Billing",
      "Continuous CI/CD Automated Deployment",
      "90-Day Post-Launch Engineering Warranty",
    ],
    deliverables: ["Full-Stack App", "Database & API Cluster", "Design System", "Cloud Architecture"],
    ctaText: "START WITH GROWTH",
  },
  {
    id: "scale",
    name: "SCALE",
    tagline: "For enterprise systems & ongoing dedicated engineering.",
    whoItsFor: "Enterprises requiring proprietary software, custom AI models, or an embedded engineering squad.",
    timeline: "Ongoing Retainer / Dedicated",
    priceLabel: "CUSTOM PROPOSAL",
    features: [
      "Custom Enterprise Software & Architecture",
      "Dedicated Full-Stack & AI Engineering Squad",
      "Proprietary Model Fine-Tuning & RAG",
      "Multi-Region Edge Cloud Infrastructure",
      "24/7 SLA Uptime & Emergency Support",
      "Bi-Weekly Strategic Engineering Sprints",
      "Security Audits & Enterprise Compliance",
    ],
    deliverables: ["Custom Software Suite", "Dedicated Squad", "SLA Agreement", "Infrastructure IaC"],
    ctaText: "REQUEST CUSTOM PROPOSAL",
  },
];

export const insightsArticles: InsightItem[] = [
  {
    id: "article-1",
    category: "AI",
    title: "Architecting Production RAG: Beyond Naive Vector Search",
    description:
      "How to build high-precision retrieval systems with contextual chunking, re-ranking models, and hybrid keyword-vector indexing for enterprise datasets.",
    date: "August 2026",
    readTime: "6 min read",
    author: "Xonant Labs",
    slug: "architecting-production-rag",
  },
  {
    id: "article-2",
    category: "Technology",
    title: "The Death of Generic SaaS Dashboards: The Glassmorphic Era",
    description:
      "Why modern engineering teams are abandoning cookie-cutter template UIs in favor of restrained material depth, spatial hierarchy, and cinematic lighting.",
    date: "July 2026",
    readTime: "5 min read",
    author: "Design Systems Team",
    slug: "death-of-generic-saas-dashboards",
  },
  {
    id: "article-3",
    category: "Architecture",
    title: "Zero-Latency Micro-Frontends with Next.js & Edge Runtimes",
    description:
      "A technical walkthrough of orchestrating distributed serverless applications that render across 45 edge regions with sub-50ms Time-to-First-Byte.",
    date: "June 2026",
    readTime: "8 min read",
    author: "Cloud Engineering",
    slug: "zero-latency-micro-frontends",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of projects do you build?",
    answer:
      "We design and engineer digital products, custom web applications, SaaS platforms, AI/ML pipelines, mobile apps, and high-performance digital brand flagships. We specialize in turning complex technical ideas into polished, scalable software.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "How does a project engagement start?",
    answer:
      "Every project begins with our 7-step process starting with Discovery. We review your goals through our interactive estimator or discovery call, draft a technical roadmap with milestones and scope, and establish direct communication channels.",
    category: "Process",
  },
  {
    id: "faq-3",
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on scope. Focused landing flagships and MVPs typically take 2 to 4 weeks. Full-stack SaaS platforms and custom AI systems generally range from 4 to 12 weeks. We provide clear milestone schedules before writing code.",
    category: "Timeline",
  },
  {
    id: "faq-4",
    question: "Do you work with early-stage startups?",
    answer:
      "Yes. A significant portion of our work involves helping early-stage founders build investor-ready MVPs, scalable foundations, and modern digital identities that accelerate fundraising and user adoption.",
    category: "Startups",
  },
  {
    id: "faq-5",
    question: "Can you collaborate with an existing in-house team?",
    answer:
      "Absolutely. We frequently integrate with existing engineering teams to lead frontend modernization, architect specialized AI features, design bespoke design systems, or take over specific microservices.",
    category: "Collaboration",
  },
  {
    id: "faq-6",
    question: "Do you offer post-launch maintenance and SLA support?",
    answer:
      "Yes. We offer ongoing maintenance retainers that include 99.9% uptime SLA monitoring, continuous security upgrades, framework patching, and dedicated sprint hours for ongoing feature expansion.",
    category: "Support",
  },
  {
    id: "faq-7",
    question: "Can you build custom AI & machine learning features?",
    answer:
      "Yes. We engineer proprietary RAG pipelines, fine-tune open and commercial models, build autonomous agent workflows, and implement intelligent semantic search directly into your application.",
    category: "AI & ML",
  },
  {
    id: "faq-8",
    question: "How are projects priced?",
    answer:
      "We offer transparent, scoped milestone pricing for well-defined builds, as well as monthly dedicated squad retainers for continuous product evolution. Use our Project Estimator above to get a tailored estimate.",
    category: "Pricing",
  },
];
