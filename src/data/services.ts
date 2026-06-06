export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: "web-app",
    icon: "Code2",
    title: "Custom Web Application Development",
    description:
      "I build web applications tailored to business needs, from admin dashboards to internal management systems. Every project is built with scalability, security, and usability in mind.",
    features: [
      "Admin & Internal Dashboards",
      "Role-Based Access Systems",
      "CRUD & Data Management",
      "REST API Integration",
      "Authentication & Authorization",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "dashboard",
    icon: "BarChart3",
    title: "Business Dashboard & Reporting System",
    description:
      "I create dashboards that help teams monitor data, reports, performance, and operational activity in real time — turning raw data into meaningful business insights.",
    features: [
      "Real-Time Data Visualization",
      "KPI & Performance Tracking",
      "Export to PDF / Excel",
      "Filterable & Sortable Reports",
      "Multi-User Dashboard Access",
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "automation",
    icon: "Zap",
    title: "Automation & Workflow Digitalization",
    description:
      "I help businesses reduce manual work by turning repetitive processes into automated digital workflows — saving time, reducing errors, and improving operational efficiency.",
    features: [
      "Process Flow Automation",
      "Excel / Form Data Processing",
      "Approval Workflow Systems",
      "Scheduled Task Automation",
      "Notification & Alert Systems",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "ai-product",
    icon: "Sparkles",
    title: "AI-Powered Digital Product Development",
    description:
      "I build digital tools that use AI to assist content creation, productivity, analysis, and business operations — bridging the gap between AI capabilities and real-world use cases.",
    features: [
      "AI Content Generation Tools",
      "Prompt Engineering & Integration",
      "AI-Assisted Workflow Tools",
      "Product Description Generators",
      "Intelligent Data Analysis",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "it-support",
    icon: "Settings",
    title: "IT System Support & Optimization",
    description:
      "I support IT operations, troubleshooting, documentation, and technical implementation — ensuring your systems run smoothly and your team stays productive.",
    features: [
      "Hardware & Software Troubleshooting",
      "Network & LAN Support",
      "IT Documentation & SOPs",
      "System Deployment Support",
      "Technical Problem Resolution",
    ],
    color: "from-orange-500 to-amber-500",
  },
];
