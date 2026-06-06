# Personal Branding Portfolio Website

A premium personal branding portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** — designed for an AI-Driven Fullstack Developer & Digital Transformation Specialist from Indonesia.

## 🚀 Live Demo

> Deploy to Vercel and replace this section with your live URL.

## 📋 Features

- **Premium Dark UI** — Dark navy/black background with glassmorphism cards
- **11 Sections** — Hero, About, Skills, Services, Portfolio, Why Me, Work Process, Testimonials, Contact, Footer
- **Case Study Modal** — Click-through project details with Problem → Solution → Impact structure
- **Framer Motion Animations** — Scroll-triggered reveals, hover effects, smooth transitions
- **Fully Responsive** — Mobile, tablet, and desktop optimized
- **SEO Optimized** — Meta tags, Open Graph, Twitter Cards, semantic HTML
- **Contact Form** — Ready for Formspree / EmailJS integration
- **TypeScript** — Full type safety across all components

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel |

## 📁 Project Structure

```
src/
  app/
    page.tsx          # Main page (assembles all sections)
    layout.tsx        # Root layout + SEO metadata
    globals.css       # Global styles, CSS variables, utilities
  components/
    Navbar.tsx        # Sticky nav with mobile menu
    Hero.tsx          # Hero section with CTA + trust badges
    About.tsx         # About + professional story
    Skills.tsx        # Categorized skill cards
    Services.tsx      # Service offering cards
    Portfolio.tsx     # Project grid + case study modal
    WhyMe.tsx         # Value proposition cards
    WorkProcess.tsx   # 5-step process timeline
    Testimonials.tsx  # Client testimonial cards
    Contact.tsx       # Contact links + form
    Footer.tsx        # Footer with navigation
  data/
    skills.ts         # Skill categories data
    portfolio.ts      # Project data + case study details
    services.ts       # Services data
    testimonials.ts   # Testimonial data
  lib/
    utils.ts          # Utility functions
```

## 🏃 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SYNTAXIOUNS/portofolio.git
cd portofolio

# Switch to the development branch
git checkout feature/personal-branding-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## 🌐 Deployment (Vercel)

1. Push your branch to GitHub
2. Connect your repository at [vercel.com](https://vercel.com)
3. Set branch to `feature/personal-branding-website` (or merge to `main`)
4. Click **Deploy** — Vercel auto-detects Next.js

## ✏️ Placeholder Data to Replace

| Location | Replace |
|----------|---------|
| `src/app/layout.tsx` | `[Your Name]` in metadata title |
| `src/components/Hero.tsx` | Name, tagline (if customizing) |
| `src/components/Footer.tsx` | `Your Name` in copyright |
| `src/data/testimonials.ts` | Real client testimonials |
| `src/components/Contact.tsx` | Email, WhatsApp, LinkedIn, GitHub, Freelance profile URLs |
| `public/resume.pdf` | Upload your actual resume PDF |
| `src/app/layout.tsx` | Replace `yourwebsite.com` with your domain |

## 🎨 Customization

### Colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --accent-blue: #3b82f6;    /* Primary accent */
  --accent-cyan: #06b6d4;    /* Secondary accent */
  --accent-emerald: #10b981; /* Success/highlight */
  --accent-purple: #8b5cf6;  /* Alt accent */
}
```

### Adding Projects
Edit `src/data/portfolio.ts` to add or modify projects.

### Contact Form Integration
Replace the `handleSubmit` function in `src/components/Contact.tsx` with:
- **Formspree**: `fetch('https://formspree.io/f/YOUR_ID', {...})`
- **EmailJS**: `emailjs.send(...)`
- **Your own API endpoint**: `fetch('/api/contact', {...})`

## 📄 License

Personal use. All rights reserved.

---

Built with ❤️ for international freelance platforms — Upwork, Fiverr, Outlier, LinkedIn, and remote opportunities.
