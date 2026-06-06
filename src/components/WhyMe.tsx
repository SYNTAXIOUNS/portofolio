"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Wrench,
  MessageSquare,
  FileText,
  Rocket,
} from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "Business + Technical Mindset",
    description:
      "I don't just write code — I understand the business problem first. This helps me build systems that are aligned with real operational needs, not just technical requirements.",
    color: "from-blue-500 to-cyan-500",
    border: "border-blue-500/20",
  },
  {
    icon: Wrench,
    title: "Practical Systems, Not Just Pretty Interfaces",
    description:
      "My focus is on systems that work reliably in real environments — dashboards that reflect real data, automation that handles real workflows, and tools that people actually use daily.",
    color: "from-emerald-500 to-teal-500",
    border: "border-emerald-500/20",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "I communicate technical concepts in plain language, provide regular updates, and make sure you understand what's being built and why — no black box development.",
    color: "from-violet-500 to-purple-500",
    border: "border-violet-500/20",
  },
  {
    icon: FileText,
    title: "Documented & Maintainable Work",
    description:
      "Every project comes with clear documentation: code comments, user guides, and technical notes — so your team can understand, maintain, and extend the system after delivery.",
    color: "from-orange-500 to-amber-500",
    border: "border-orange-500/20",
  },
  {
    icon: Rocket,
    title: "From Requirements to Working App",
    description:
      "I can take a structured requirement document or a rough idea, translate it into technical planning, and deliver a usable application — end to end.",
    color: "from-pink-500 to-rose-500",
    border: "border-pink-500/20",
  },
];

export default function WhyMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-me" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase">
            {"// 05. Why Work With Me"}`n          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Sets Me{" "}
            <span className="gradient-text">Apart</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            Beyond writing code — I bring a problem-solving mindset, business
            context awareness, and a commitment to delivering systems that
            genuinely work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`glass rounded-2xl p-6 border ${reason.border} animated-border group hover:shadow-lg transition-all duration-300`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.color} p-0.5 mb-5`}
              >
                <div className="w-full h-full rounded-[11px] bg-[#080c1a] flex items-center justify-center">
                  <reason.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-white text-sm mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass rounded-2xl p-6 border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-bold text-white text-sm mb-3">
                Ready to Work Together?
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Let&apos;s discuss your project requirements and find the best
                approach to build what your business needs.
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-5 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
            >
              Start a Conversation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
