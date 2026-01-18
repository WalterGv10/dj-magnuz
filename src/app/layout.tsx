import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import LightPillar from "@/components/ui/LightPillar";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechnoIdentity Platform 2025",
  description: "High-performance techno artist website with MCP content management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="fixed inset-0 z-0 pointer-events-none">
          <LightPillar
            topColor="#FF0033"
            bottomColor="#000000"
            intensity={1.5}
            pillarWidth={30}
            noiseIntensity={0.85}
            interactive={true}
            rotationSpeed={0.2}
            className="h-full w-full"
          />
        </div>
        <div className="relative z-10 w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
