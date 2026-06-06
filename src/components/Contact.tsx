"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MessageCircle,
  Link2,
  Code2,
  Globe,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@gmail.com",
    href: "mailto:your.email@gmail.com",
    color: "from-blue-500 to-cyan-500",
    border: "border-blue-500/20",
    id: "contact-email",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 812-3456-7890",
    href: "https://wa.me/628123456789",
    color: "from-emerald-500 to-teal-500",
    border: "border-emerald-500/20",
    id: "contact-whatsapp",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
    color: "from-blue-600 to-indigo-600",
    border: "border-indigo-500/20",
    id: "contact-linkedin",
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "github.com/SYNTAXIOUNS",
    href: "https://github.com/SYNTAXIOUNS",
    color: "from-slate-500 to-slate-700",
    border: "border-slate-500/20",
    id: "contact-github",
  },
  {
    icon: Globe,
    label: "Upwork / Freelance",
    value: "View Freelance Profile",
    href: "#",
    color: "from-violet-500 to-purple-500",
    border: "border-violet-500/20",
    id: "contact-freelance",
  },
];

const projectTypes = [
  "Web Application Development",
  "Business Dashboard & Reporting",
  "Automation & Workflow Digitalization",
  "AI-Powered Tool Development",
  "IT System Support",
  "Other",
];

const budgetRanges = [
  "< $500",
  "$500 – $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000+",
  "Let's discuss",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your actual form submission logic (Formspree, EmailJS, etc.)
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
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
            {"// 08. Contact"}`n          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Impactful</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Let&apos;s build something useful, scalable, and impactful. Tell me about your project and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactLinks.map((link) => (
              <a
                key={link.id}
                id={link.id}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 glass rounded-xl border ${link.border} hover:border-opacity-50 transition-all duration-200 group animated-border`}
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.color} p-0.5 flex-shrink-0`}
                >
                  <div className="w-full h-full rounded-[9px] bg-[#080c1a] flex items-center justify-center">
                    <link.icon className="w-4.5 h-4.5 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">{link.label}</div>
                  <div className="text-sm text-slate-300 group-hover:text-white transition-colors font-medium">
                    {link.value}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-6 md:p-8 border border-white/5">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="contact-email-input"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-project-type" className="block text-xs font-semibold text-slate-400 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm focus:outline-none focus:border-blue-500/50 transition-all duration-200 appearance-none"
                    >
                      <option value="" disabled className="bg-[#0a0f1e]">
                        Select a project type
                      </option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#0a0f1e]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-budget" className="block text-xs font-semibold text-slate-400 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm focus:outline-none focus:border-blue-500/50 transition-all duration-200 appearance-none"
                    >
                      <option value="" className="bg-[#0a0f1e]">
                        Select budget range (optional)
                      </option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-[#0a0f1e]">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-400 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, challenges, and what you're looking to build..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.99 }}
                    id="contact-submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>

                  <p className="text-xs text-slate-600 text-center">
                    * Replace form action with Formspree or EmailJS for production use.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
