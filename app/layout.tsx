import type { Metadata } from "next";
import { Geist_Mono, Georama } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGradients from "@/components/BackgroundGradients";

const georama = Georama({
  variable: "--font-georama",
  weight: "variable",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AuthConfirm",
  description: "AuthConfirm is a manual authentication/verification system for Scratch JP that allows you to verify members without relying on Scratch cloud variables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${georama.variable} ${geistMono.variable} antialiased`}
    >
      <body className="relative bg-background overflow-x-hidden font-sans selection:bg-brand-500/30">
        <BackgroundGradients />
        
        <Navbar />
        
        <main className="min-h-screen flex flex-col">
          {children}  
        </main>

        <Footer />
      </body>
    </html>
  );
}
