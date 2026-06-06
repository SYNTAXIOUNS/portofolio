"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Download,
  ChevronDown,
  Layers,
  Cpu,
  Bot,
  Globe,
} from "lucide-react";

const trustBadges = [
  { icon: Layers, label: "Fullstack Development" },
  { icon: Cpu, label: "IT Systems" },
  { icon: Globe, label: "Business Automation" },
  { icon: Bot, label: "AI-Powered Solutions" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0">
        {/* Radial glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative section-container pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 text-sm font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Freelance & Remote Work
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            <span className="text-white">AI-Driven</span>
            <br />
            <span className="gradient-text">Fullstack Developer</span>
            <br />
            <span className="text-slate-300 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              & Digital Transformation
            </span>
            <br />
            <span className="text-slate-400 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
              Specialist
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed"
          >
            I build modern web applications, automation systems, and digital
            solutions that help businesses work{" "}
            <span className="text-cyan-400 font-medium">faster</span>,{" "}
            <span className="text-blue-400 font-medium">smarter</span>, and more{" "}
            <span className="text-emerald-400 font-medium">efficiently</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.button
              onClick={() => handleScrollTo("#portfolio")}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow duration-300"
              id="hero-view-work"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              onClick={() => handleScrollTo("#contact")}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 font-semibold rounded-xl glass border border-blue-500/30 text-blue-300 hover:text-white hover:border-blue-400/50 transition-all duration-200"
              id="hero-hire-me"
            >
              Hire Me
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 font-semibold rounded-xl glass border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
              id="hero-download-resume"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/5 text-sm text-slate-400"
              >
                <badge.icon className="w-4 h-4 text-blue-400" />
                {badge.label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "5+", label: "Projects Delivered" },
            { value: "3+", label: "Years Experience" },
            { value: "10+", label: "Technologies" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
