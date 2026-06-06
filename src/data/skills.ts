export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Monitor",
    color: "from-blue-500 to-cyan-500",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "Dashboard UI",
      "Component-based Development",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "Server",
    color: "from-violet-500 to-purple-500",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "REST API",
      "Authentication",
      "Role-Based Access Control",
    ],
  },
  {
    id: "database",
    title: "Database & Data",
    icon: "Database",
    color: "from-emerald-500 to-teal-500",
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "Excel / CSV Processing",
      "Reporting Dashboards",
      "Data Validation",
    ],
  },
  {
    id: "it-support",
    title: "IT & System Support",
    icon: "Cpu",
    color: "from-orange-500 to-amber-500",
    skills: [
      "Hardware & Software Troubleshooting",
      "LAN / Network Support",
      "System Documentation",
      "IT Operations Support",
      "Deployment Support",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    icon: "Bot",
    color: "from-pink-500 to-rose-500",
    skills: [
      "AI-Assisted Workflow",
      "Business Automation",
      "Prompt Engineering",
      "AI Content / Product Tools",
      "Digital Process Optimization",
    ],
  },
];
