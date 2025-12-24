import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { CustomCursor } from "@/app/components/ui/CustomCursor";
import { ScrollBackground } from "@/app/components/ui/ScrollBackground";
import { MobileStickyCTA } from "@/app/components/ui/MobileStickyCTA";
import "./globals.css";

// Inter serves as the "SF Pro" fallback
const sfPro = Inter({ 
  subsets: ["latin"],
  variable: "--font-sf-pro",
  display: 'swap',
});

// JetBrains Mono serves as the "SF Mono" fallback
const sfMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-sf-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vertex | System-Native Habit Engine",
  description: "Stop reminding. Start negotiating. Built for macOS Sequoia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sfPro.variable} ${sfMono.variable}`}>
      <body className="font-sans min-h-screen selection:bg-vertex-indigo/30">
        
        {/* Phase 7 Enhancements */}
        <ScrollBackground /> 
        <CustomCursor />
        
        <div className="relative z-10">
          {children}
        </div>

        {/* Phase 9: Mobile Sticky Button */}
        <MobileStickyCTA />
        
      </body>
    </html>
  );
}
