import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/app/context/ThemeContext";
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

export const metadata: Metadata = {
  title: "Ajay Kumar Biswal | Full Stack Developer",
  description: "Portfolio of Ajay Kumar Biswal, a Full Stack MERN & AI Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          "overflow-x-hidden",
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <ThemeProvider>
          {children}
          <CursorGlow />
        </ThemeProvider>
      </body>
    </html>
  );
}