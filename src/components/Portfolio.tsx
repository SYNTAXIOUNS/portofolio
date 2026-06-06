"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  TrendingUp,
  Award,
  Briefcase,
  ShoppingBag,
  Heart,
  Coffee,
  ExternalLink,
  X,
  CheckCircle2,
} from "lucide-react";
import { projects } from "@/data/portfolio";

const iconMap = {
  TrendingUp,
  Award,
  Briefcase,
  ShoppingBag,
  Heart,
  Coffee,
};

const statusLabels = {
  completed: { label: "Completed", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
  concept: { label: "Concept / Design", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
  "in-progress": { label: "In Progress", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
};

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const project = projects.find((p) => p.id === selectedProject);

  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            {"// 04. Portfolio"}`n          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            A selection of systems, applications, and digital products I&apos;ve
            built or designed — ranging from completed business tools to product
            concepts.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((proj, index) => {
            const IconComponent = iconMap[proj.icon as keyof typeof iconMap];
            const status = statusLabels[proj.status];
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 group animated-border flex flex-col"
              >
                {/* Card header gradient */}
                <div
                  className={`h-2 bg-gradient-to-r ${proj.color}`}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + status */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${proj.color} p-0.5`}
                    >
                      <div className="w-full h-full rounded-[10px] bg-[#0a0f1e] flex items-center justify-center">
                        {IconComponent && (
                          <IconComponent className="w-5 h-5 text-white" />
                        )}
                      </div>
                    </div>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border ${status.color}`}
                    >
                      {status.label}
                    </span>
                  </div>

                  {/* Category */}
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-md w-fit mb-3 ${proj.categoryColor}`}
                  >
                    {proj.category}
                  </span>

                  {/* Title + description */}
                  <h3 className="font-bold text-white text-base mb-2 leading-tight">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                    {proj.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md glass border border-white/5 text-slate-500 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.techStack.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-md glass border border-white/5 text-slate-600 font-mono">
                        +{proj.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action button */}
                  <button
                    onClick={() => setSelectedProject(proj.id)}
                    className="flex items-center gap-2 w-full justify-center py-2.5 rounded-xl text-sm font-semibold glass border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
                    id={`case-study-${proj.id}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Case Study
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="glass-strong rounded-2xl border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/50"
            >
              {/* Modal header */}
              <div className={`h-1 bg-gradient-to-r ${project.color} rounded-t-2xl`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${project.categoryColor}`}>
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">
                      {project.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-4 flex-shrink-0"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.longDescription}
                </p>

                {/* Case study sections */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                      🔴 Problem
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2">
                      💡 Solution
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-3">
                      ✅ Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-3">
                      🛠 Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-lg glass border border-white/10 text-slate-400 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                      📈 Business Impact
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {project.businessImpact}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
