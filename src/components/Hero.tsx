"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Download,
  ChevronDown,
  Layers,
  Cpu,
  Bot,
  Globe,
  Terminal,
  FileCode,
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"profile" | "metrics">("profile");

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
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative section-container pt-28 pb-16 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Bio & Headings */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-6 w-fit">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Freelance & Remote Projects
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            <span className="text-white text-xl md:text-2xl font-mono font-medium block tracking-wide mb-2 text-blue-400">
              Hi, I am
            </span>
            <span className="gradient-text font-black tracking-tight block pb-1">
              Firman Maulidiansyah
            </span>
            <span className="text-slate-100 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              AI-Driven Fullstack Developer
            </span>
            <br />
            <span className="text-slate-400 text-lg md:text-xl lg:text-2xl font-semibold">
              & Digital Transformation Specialist
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed"
          >
            I engineer modern web applications, business dashboards, and digital
            systems that help enterprises work{" "}
            <span className="text-cyan-400 font-semibold">faster</span>,{" "}
            <span className="text-blue-400 font-semibold">smarter</span>, and with
            greater{" "}
            <span className="text-emerald-400 font-semibold">precision</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.button
              onClick={() => handleScrollTo("#portfolio")}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3.5 font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer"
              id="hero-view-work"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              onClick={() => handleScrollTo("#contact")}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3.5 font-semibold rounded-xl glass border border-blue-500/30 text-blue-300 hover:text-white hover:border-blue-400/50 transition-all duration-200 cursor-pointer"
              id="hero-hire-me"
            >
              Hire Me
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3.5 font-semibold rounded-xl glass border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
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
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/5 text-xs text-slate-400 hover:border-white/10 hover:bg-white/5 transition-all duration-200"
              >
                <badge.icon className="w-4.5 h-4.5 text-blue-400" />
                {badge.label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column: Interactive Code Terminal Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="glass-strong rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 glow-blue">
            {/* Terminal Header */}
            <div className="bg-[#050812] px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="text-xs font-mono text-slate-500 select-none flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                workspace - firman.dev
              </div>
              <div className="w-10" />
            </div>

            {/* Terminal Tab bar */}
            <div className="bg-[#090d19] flex border-b border-white/5">
              <button
                onClick={() => setActiveTab("profile")}
                className={`px-4 py-2.5 text-xs font-mono flex items-center gap-1.5 border-r border-white/5 transition-colors cursor-pointer ${
                  activeTab === "profile"
                    ? "bg-[#0b1022] text-cyan-400 border-b-2 border-b-cyan-500"
                    : "text-slate-500 hover:text-slate-300 hover:bg-[#070b15]"
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                Profile.ts
              </button>
              <button
                onClick={() => setActiveTab("metrics")}
                className={`px-4 py-2.5 text-xs font-mono flex items-center gap-1.5 border-r border-white/5 transition-colors cursor-pointer ${
                  activeTab === "metrics"
                    ? "bg-[#0b1022] text-cyan-400 border-b-2 border-b-cyan-500"
                    : "text-slate-500 hover:text-slate-300 hover:bg-[#070b15]"
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                Metrics.json
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs md:text-sm bg-[#0b1022] overflow-x-auto min-h-[300px] leading-relaxed select-text">
              {activeTab === "profile" ? (
                <pre className="text-slate-300">
                  <div>
                    <span className="syntax-keyword">const</span>{" "}
                    <span className="syntax-variable">developer</span> = {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="syntax-variable">name</span>:{" "}
                    <span className="syntax-string">&quot;Firman Maulidiansyah&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="syntax-variable">role</span>:{" "}
                    <span className="syntax-string">&quot;Fullstack Developer & Designer&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="syntax-variable">skills</span>: [
                  </div>
                  <div className="pl-8 text-cyan-400">
                    &quot;<span className="syntax-string">Next.js</span>&quot;, &quot;
                    <span className="syntax-string">React</span>&quot;, &quot;
                    <span className="syntax-string">Python/Flask</span>&quot;,
                  </div>
                  <div className="pl-8 text-cyan-400">
                    &quot;<span className="syntax-string">SQL/Postgres</span>&quot;, &quot;
                    <span className="syntax-string">Tailwind CSS</span>&quot;
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="syntax-variable">focus</span>:{" "}
                    <span className="syntax-string">
                      &quot;Operational Automation & Systems&quot;
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="syntax-variable">available</span>:{" "}
                    <span className="syntax-number">true</span>
                  </div>
                  <div>{"};"}</div>
                  <div className="mt-4">
                    <span className="syntax-comment">
                      // Ready to transform workflows into code...
                    </span>
                  </div>
                  <div>
                    <span className="text-cyan-400 font-bold">&gt;</span>{" "}
                    <span className="w-2 h-4 bg-cyan-400 inline-block align-middle cursor-blink" />
                  </div>
                </pre>
              ) : (
                <pre className="text-slate-300">
                  <div>{"{"}</div>
                  <div className="pl-4">
                    <span className="syntax-variable">&quot;experience&quot;</span>:{" "}
                    <span className="syntax-string">&quot;3+ Years&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="syntax-variable">&quot;deliveredProjects&quot;</span>:{" "}
                    <span className="syntax-number">5</span>,
                  </div>
                  <div className="pl-4">
                    <span className="syntax-variable">&quot;clientSatisfaction&quot;</span>:{" "}
                    <span className="syntax-string">&quot;100%&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="syntax-variable">&quot;location&quot;</span>:{" "}
                    <span className="syntax-string">&quot;Indonesia&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="syntax-variable">&quot;specialty&quot;</span>:{" "}
                    <span className="syntax-string">&quot;Enterprise Internal Workflows&quot;</span>
                  </div>
                  <div>{"}"}</div>
                  <div className="mt-4">
                    <span className="syntax-comment">
                      // Data derived from live client deliverables.
                    </span>
                  </div>
                  <div>
                    <span className="text-emerald-400 font-bold">&gt;</span>{" "}
                    <span className="w-2 h-4 bg-emerald-400 inline-block align-middle cursor-blink" />
                  </div>
                </pre>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Row */}
      <div className="relative section-container pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "5+", label: "Projects Delivered" },
            { value: "3+", label: "Years Experience" },
            { value: "10+", label: "Technologies Mastered" },
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
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 select-none pointer-events-none"
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
