"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor,
  Server,
  Database,
  Cpu,
  Bot,
  CheckCircle2,
} from "lucide-react";
import { skillCategories } from "@/data/skills";

const iconMap = {
  Monitor,
  Server,
  Database,
  Cpu,
  Bot,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container" ref={ref}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-xs font-mono font-semibold tracking-widest text-purple-400 uppercase">
            {"// 02. Skills"}`n          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical{" "}
            <span className="gradient-text-purple">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            A broad technical skill set covering the full development stack —
            from frontend interfaces to backend systems, databases, IT
            infrastructure, and AI-assisted workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group animated-border"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}
                  >
                    <div className="w-full h-full rounded-[10px] bg-[#080c1a] flex items-center justify-center">
                      {IconComponent && (
                        <IconComponent className="w-4.5 h-4.5 text-white" />
                      )}
                    </div>
                  </div>
                  <h3 className="font-semibold text-white text-sm">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 text-sm text-slate-400 group-hover:text-slate-300 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
