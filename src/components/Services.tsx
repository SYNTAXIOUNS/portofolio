"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Code2, BarChart3, Zap, Sparkles, Settings } from "lucide-react";
import { services } from "@/data/services";

const iconMap = {
  Code2,
  BarChart3,
  Zap,
  Sparkles,
  Settings,
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">
            {"// 03. Services"}`n          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I{" "}
            <span className="gradient-text">Deliver</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            From custom web applications to business automation systems — I
            provide end-to-end development services tailored to your operational
            needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group animated-border flex flex-col"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-5`}
                >
                  <div className="w-full h-full rounded-[11px] bg-[#080c1a] flex items-center justify-center">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-bold text-white text-base mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="text-xs text-slate-500 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action link */}
                <button className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group-hover:gap-2.5 duration-200">
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
