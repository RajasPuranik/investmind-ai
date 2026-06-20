import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "InvestMind AI | Cyberpunk Investment Mentor",
  description: "AI Investment Mentor Chatbot by Rajas Puranik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <body className="min-h-screen flex flex-col relative bg-cyber-bg text-gray-200">
        <ParticleBackground />
        <Navbar />
        <main className="flex-1 z-10 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
