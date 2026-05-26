import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { CursorGlow } from "@/components/shared/CursorGlow";

// Configure Inter for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Configure Space Grotesk for headings
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Configure JetBrains Mono for terminal/coding elements
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ajay Kumar Biswal | Full Stack Developer",
  description: "Portfolio of Ajay Kumar Biswal, a Full Stack MERN & AI Developer",
  icons: {
    icon: "/ajaybiswal.png",
    shortcut: "/ajaybiswal.png",
    apple: "/ajaybiswal.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          "overflow-x-hidden",
          inter.variable,
          spaceGrotesk.variable,
          jetbrainsMono.variable
        )}
      >
        {children}
        <CursorGlow />
      </body>
    </html>
  );
}