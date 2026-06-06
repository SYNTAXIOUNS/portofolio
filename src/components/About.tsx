"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, Target, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "IT Professional",
    description: "Experienced in IT support, infrastructure, troubleshooting, and system documentation.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Target,
    title: "Fullstack Developer",
    description: "Building internal business systems, dashboards, role-based apps, and reporting tools.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Lightbulb,
    title: "Business Thinker",
    description: "Combining technical execution with business understanding to solve real operational problems.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container" ref={ref}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase">
            {"// 01. About"}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Developer who understands{" "}
              <span className="gradient-text">both code and business</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-slate-400 leading-relaxed"
            >
              <p>
                I&apos;m a fullstack developer and IT professional from{" "}
                <span className="inline-flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  Indonesia
                </span>
                , with a background that bridges technical implementation and
                business operations. My work spans IT support, infrastructure
                management, and modern web application development.
              </p>
              <p>
                I specialize in building{" "}
                <span className="text-white font-medium">
                  practical digital systems
                </span>{" "}
                — not just beautiful interfaces. Whether it&apos;s an internal
                management dashboard, a workflow automation system, or a
                reporting tool, my focus is always on solving real operational
                problems with reliable, well-documented solutions.
              </p>
              <p>
                Having worked across IT support, business process digitalization,
                and web development, I understand the full picture: from user
                requirements and business logic to deployment and technical
                documentation. This lets me build systems that are not just
                functional — but genuinely useful to the people who use them.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {["Web Development", "IT Infrastructure", "Business Systems", "Automation", "Documentation"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-medium rounded-full glass border border-white/10 text-slate-400"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Right: Highlight cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
                className={`flex gap-4 p-5 rounded-xl glass border ${item.border} animated-border group hover:shadow-lg transition-all duration-300`}
              >
                <div
                  className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 border ${item.border}`}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <h3 className={`font-semibold text-white mb-1 ${item.color} text-sm`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Brand message card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.56 }}
              className="p-5 rounded-xl bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20"
            >
              <p className="text-sm text-slate-300 leading-relaxed italic">
                &ldquo;I help businesses transform ideas, workflows, and manual processes
                into modern, scalable, and user-friendly digital systems.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
