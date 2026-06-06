import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[Your Name] — AI-Driven Fullstack Developer & Digital Transformation Specialist",
  description:
    "Professional fullstack developer from Indonesia specializing in web applications, dashboards, automation systems, and AI-powered digital products.",
  keywords: [
    "fullstack developer Indonesia",
    "web application developer",
    "digital transformation specialist",
    "AI developer",
    "business automation",
    "React developer",
    "Next.js developer",
    "Flask developer",
    "dashboard development",
    "remote developer",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "[Your Name] — AI-Driven Fullstack Developer & Digital Transformation Specialist",
    description:
      "Professional fullstack developer from Indonesia specializing in web applications, dashboards, automation systems, and AI-powered digital products.",
    siteName: "Your Name — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "[Your Name] — AI-Driven Fullstack Developer & Digital Transformation Specialist",
    description:
      "Professional fullstack developer from Indonesia specializing in web applications, dashboards, automation systems, and AI-powered digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#080c1a] text-slate-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
