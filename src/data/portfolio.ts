export interface Project {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  description: string;
  longDescription: string;
  techStack: string[];
  icon: string;
  color: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  businessImpact: string;
  status: "completed" | "concept" | "in-progress";
}

export const projects: Project[] = [
  {
    id: "profit-sharing",
    title: "Project Profit Sharing Web App",
    category: "Finance / Business System",
    categoryColor: "text-emerald-400 bg-emerald-400/10",
    description:
      "A web-based application for managing project profit-sharing reports, including Excel upload, validation, automatic calculation, dashboard visualization, and PDF/Excel export.",
    longDescription:
      "A comprehensive profit-sharing management system designed for project-based businesses. The application handles the full lifecycle from data ingestion to report generation, with a secure authentication layer and complete audit trail.",
    techStack: ["Flask", "Python", "SQLite", "Bootstrap", "Excel Processing", "PDF Export"],
    icon: "TrendingUp",
    color: "from-emerald-500 to-teal-600",
    problem:
      "The client was managing profit-sharing calculations manually using spreadsheets, leading to calculation errors, version conflicts, and time-consuming monthly reconciliation processes.",
    solution:
      "Built a centralized web application where managers can upload Excel data, validate entries, and let the system automatically calculate distribution amounts. The dashboard provides real-time visibility into all projects and their financial status.",
    keyFeatures: [
      "Secure login and role-based access control",
      "Excel file upload with validation and error reporting",
      "Automatic profit-sharing calculation engine",
      "Interactive dashboard with chart visualization",
      "One-click PDF and Excel report export",
      "Full audit log for all transactions",
    ],
    businessImpact:
      "Reduced monthly reconciliation time by approximately 70%, eliminated manual calculation errors, and gave management real-time visibility into project financial performance.",
    status: "completed",
  },
  {
    id: "mdt-certificate",
    title: "MDT Certificate Numbering System",
    category: "Government / Education System",
    categoryColor: "text-blue-400 bg-blue-400/10",
    description:
      "A role-based web application for managing certificate numbering workflows between MDT, Kankemenag, and Kanwil, including submission, verification, approval, and responsive dashboard UI.",
    longDescription:
      "A multi-institution workflow management system for Islamic education certificate numbering in Indonesia. The system coordinates document flow between three organizational levels with distinct roles and responsibilities.",
    techStack: ["Flask", "SQLite", "Bootstrap", "Role-Based Access Control"],
    icon: "Award",
    color: "from-blue-500 to-indigo-600",
    problem:
      "The certificate numbering process involved physical document handoffs between three offices, causing delays, lost documents, and lack of visibility into application status for educational institutions.",
    solution:
      "Digitized the entire workflow with a role-based system where each institution has specific permissions: MDT submits, Kankemenag verifies, and Kanwil issues the final certificate number.",
    keyFeatures: [
      "Multi-role authentication (MDT, Kankemenag, Kanwil)",
      "Digital submission and verification workflow",
      "Approval and numbering automation",
      "Status tracking for all submissions",
      "Data export and reporting dashboard",
      "Responsive UI accessible from mobile devices",
    ],
    businessImpact:
      "Eliminated physical document handoffs, reduced processing time from weeks to days, and provided complete audit trail for government compliance requirements.",
    status: "completed",
  },
  {
    id: "sppd-system",
    title: "SPPD / Employee Service System",
    category: "Enterprise Internal System",
    categoryColor: "text-violet-400 bg-violet-400/10",
    description:
      "An internal system for managing business travel and employee service processes with authentication, approval workflow, status tracking, notifications, and dashboard-based data management.",
    longDescription:
      "A comprehensive HR and travel management system designed for enterprise use. Handles the full lifecycle of employee service requests including business travel (SPPD), leave management, and operational requests.",
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "JWT", "REST API"],
    icon: "Briefcase",
    color: "from-violet-500 to-purple-600",
    problem:
      "Enterprise organizations managing business travel on paper or via email face approval bottlenecks, poor compliance tracking, and no real-time visibility into travel budgets and approvals.",
    solution:
      "Developed a full-stack web application with a React frontend and Node.js backend, featuring a multi-stage approval workflow, real-time notifications, and a management dashboard for budget monitoring.",
    keyFeatures: [
      "JWT-based authentication and session management",
      "Multi-stage approval workflow with notifications",
      "Real-time status tracking for all requests",
      "Manager dashboard with analytics",
      "Budget tracking and compliance reporting",
      "Responsive mobile-friendly interface",
    ],
    businessImpact:
      "Standardizes the approval process, improves compliance with company travel policies, and gives HR and finance teams real-time visibility into business travel expenditure.",
    status: "concept",
  },
  {
    id: "ai-marketplace",
    title: "AI Marketplace Tools Website",
    category: "AI Product / E-commerce Tools",
    categoryColor: "text-pink-400 bg-pink-400/10",
    description:
      "A digital tool platform for generating product descriptions, keyword research, competitor analysis, link bio generation, and Instagram content templates powered by AI.",
    longDescription:
      "An AI-powered toolkit specifically designed for Indonesian e-commerce sellers on marketplaces like Tokopedia, Shopee, and Lazada. The platform aggregates multiple AI tools into a single, easy-to-use interface.",
    techStack: ["Python", "Flask", "AI Prompting", "Web Scraping", "Dashboard UI"],
    icon: "ShoppingBag",
    color: "from-pink-500 to-rose-600",
    problem:
      "Small and medium e-commerce sellers spend significant time writing product descriptions, researching keywords, and creating social media content — taking time away from actual business operations.",
    solution:
      "Built a web-based tool platform where sellers can generate AI-optimized product descriptions, research trending keywords, analyze competitor listings, and create social media content templates in minutes.",
    keyFeatures: [
      "AI product description generator",
      "Keyword research and suggestion tool",
      "Competitor product analysis",
      "Link-in-bio page generator",
      "Instagram content template creator",
      "Multi-platform content optimization",
    ],
    businessImpact:
      "Helps e-commerce sellers save hours of manual content creation work per week, improve product discoverability, and maintain consistent brand messaging across platforms.",
    status: "concept",
  },
  {
    id: "glowly-app",
    title: "Glowly Self-Growth App",
    category: "Digital Wellbeing / Personal Growth",
    categoryColor: "text-amber-400 bg-amber-400/10",
    description:
      "A digital wellbeing platform for journaling, reflection, mood tracking, calm space, self-growth indicators, and personal progress analytics.",
    longDescription:
      "A personal development and wellbeing application designed to help users build consistent self-reflection habits, track emotional patterns, and monitor their personal growth journey through data-driven insights.",
    techStack: ["Web App Concept", "UI/UX", "Product Strategy", "Dashboard"],
    icon: "Heart",
    color: "from-amber-500 to-orange-600",
    problem:
      "Many people struggle with maintaining consistent journaling and self-reflection practices due to lack of structure, motivation tracking, and meaningful progress indicators.",
    solution:
      "Designed a comprehensive wellbeing platform that combines daily journaling, mood tracking, structured reflection prompts, and visual progress analytics into an engaging and calm user experience.",
    keyFeatures: [
      "Daily guided journaling with prompts",
      "Mood and energy level tracking",
      "Personal growth milestone system",
      "Calm space with breathing exercises",
      "Progress analytics and insights dashboard",
      "Habit streak tracking",
    ],
    businessImpact:
      "Designed to increase user engagement with self-improvement practices, build healthy emotional awareness habits, and provide meaningful data-driven insights for personal development.",
    status: "concept",
  },
  {
    id: "coffee-detection",
    title: "Coffee Bean Grade Detection App",
    category: "AI / Computer Vision",
    categoryColor: "text-teal-400 bg-teal-400/10",
    description:
      "A computer vision application for detecting and classifying coffee bean grades using image-based detection, bounding boxes, and machine learning workflow.",
    longDescription:
      "An AI-powered quality control application for coffee production facilities. The system uses computer vision to automatically detect, classify, and grade coffee beans from camera input, replacing time-consuming manual inspection.",
    techStack: ["Python", "Computer Vision", "Faster R-CNN", "Tkinter/Flask"],
    icon: "Coffee",
    color: "from-teal-500 to-cyan-600",
    problem:
      "Coffee bean grading is traditionally done manually by trained inspectors, which is time-consuming, subjective, and prone to human error — leading to quality inconsistency in the final product.",
    solution:
      "Developed a computer vision system using object detection algorithms to automatically identify and classify coffee beans by grade from camera images, with real-time bounding box visualization and grade reporting.",
    keyFeatures: [
      "Real-time image capture and analysis",
      "Object detection with bounding box visualization",
      "Multi-grade classification system",
      "Batch processing for large quantities",
      "Quality report generation",
      "Integration with production workflow",
    ],
    businessImpact:
      "Enables consistent, objective coffee bean grading at scale, reduces dependency on manual inspection, and improves quality control accuracy for coffee producers.",
    status: "concept",
  },
];
