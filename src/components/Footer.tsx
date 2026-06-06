"use client";

import { motion } from "framer-motion";
import { Code2, Mail, MessageCircle, Link2, Globe, ArrowUp } from "lucide-react";

const footerLinks = {
  Navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "Web Application Development", href: "#services" },
    { label: "Business Dashboard", href: "#services" },
    { label: "Automation & Workflow", href: "#services" },
    { label: "AI-Powered Products", href: "#services" },
    { label: "IT System Support", href: "#services" },
  ],
};

const socialLinks = [
  { icon: Mail, href: "mailto:your.email@gmail.com", label: "Email", id: "footer-email" },
  { icon: MessageCircle, href: "https://wa.me/628123456789", label: "WhatsApp", id: "footer-whatsapp" },
  { icon: Link2, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn", id: "footer-linkedin" },
  { icon: Code2, href: "https://github.com/SYNTAXIOUNS", label: "GitHub", id: "footer-github" },
  { icon: Globe, href: "#", label: "Freelance", id: "footer-freelance" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/5 relative">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="section-container py-16">
        {/* Top row */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                <span className="gradient-text">Dev</span>
                <span className="text-slate-400">.ID</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
              AI-Driven Fullstack Developer & Digital Transformation Specialist
              from Indonesia — building practical digital systems that solve
              real business problems.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-blue-500/30 transition-all duration-200"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Your Name. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-700">
              Designed for international freelance platforms
            </span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-blue-500/30 transition-all duration-200"
              aria-label="Scroll to top"
              id="footer-scroll-top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
