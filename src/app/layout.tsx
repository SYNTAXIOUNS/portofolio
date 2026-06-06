import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Firman Maulidiansyah — AI-Driven Fullstack Developer & Digital Transformation Specialist",
  description:
    "Professional fullstack developer and IT specialist from Indonesia specializing in web applications, dashboards, automation systems, and AI-powered digital products.",
  keywords: [
    "Firman Maulidiansyah",
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
  authors: [{ name: "Firman Maulidiansyah" }],
  creator: "Firman Maulidiansyah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://firman.dev",
    title: "Firman Maulidiansyah — AI-Driven Fullstack Developer & Digital Transformation Specialist",
    description:
      "Professional fullstack developer and IT specialist from Indonesia specializing in web applications, dashboards, automation systems, and AI-powered digital products.",
    siteName: "Firman Maulidiansyah — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firman Maulidiansyah — AI-Driven Fullstack Developer & Digital Transformation Specialist",
    description:
      "Professional fullstack developer and IT specialist from Indonesia specializing in web applications, dashboards, automation systems, and AI-powered digital products.",
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
