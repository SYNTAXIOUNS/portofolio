"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Palette,
  Code2,
  TestTube2,
  PackageCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Requirement Analysis",
    description:
      "I start by understanding your business context, operational challenges, and technical requirements. We align on the problem before touching any code.",
    details: [
      "Requirements gathering session",
      "Business workflow mapping",
      "Technical feasibility assessment",
      "Project scope definition",
    ],
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/20",
  },
  {
    number: "02",
    icon: Palette,
    title: "UI/UX Planning",
    description:
      "I plan the user interface, information architecture, and interaction flows — ensuring the system is intuitive for the people who will use it daily.",
    details: [
      "Wireframing key screens",
      "User flow mapping",
      "Component planning",
      "Design system decisions",
    ],
    color: "from-violet-500 to-purple-500",
    glow: "shadow-violet-500/20",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development & Integration",
    description:
      "I build the application iteratively, focusing on clean architecture, maintainable code, and proper integration between frontend, backend, and database layers.",
    details: [
      "Frontend + backend development",
      "API design and integration",
      "Database schema and queries",
      "Authentication and authorization",
    ],
    color: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
  },
  {
    number: "04",
    icon: TestTube2,
    title: "Testing & Optimization",
    description:
      "I test the system thoroughly across different scenarios, fix bugs, optimize performance, and make sure the application is stable before delivery.",
    details: [
      "Functional testing all features",
      "Edge case and error handling",
      "Performance optimization",
      "Cross-device responsiveness check",
    ],
    color: "from-orange-500 to-amber-500",
    glow: "shadow-orange-500/20",
  },
  {
    number: "05",
    icon: PackageCheck,
    title: "Delivery, Documentation & Support",
    description:
      "I deliver the final system with complete documentation, provide handover training, and offer post-delivery support to ensure a smooth transition.",
    details: [
      "Deployment and final handover",
      "Technical documentation",
      "User guide preparation",
      "Post-delivery support period",
    ],
    color: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/20",
  },
];

export default function WorkProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-xs font-mono font-semibold tracking-widest text-violet-400 uppercase">
            {"// 06. Work Process"}`n          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How I{" "}
            <span className="gradient-text-purple">Work</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            A structured, transparent process that keeps you informed at every
            stage — from the first conversation to final delivery.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden xl:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="relative"
              >
                {/* Step card */}
                <div className="glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300 h-full animated-border">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} p-0.5 flex-shrink-0 shadow-lg ${step.glow}`}
                    >
                      <div className="w-full h-full rounded-[10px] bg-[#080c1a] flex items-center justify-center">
                        <step.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <span className={`text-2xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-sm mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <ul className="space-y-1.5">
                    {step.details.map((detail) => (
                      <li key={detail} className="text-xs text-slate-500 flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-slate-600 flex-shrink-0 mt-1.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
