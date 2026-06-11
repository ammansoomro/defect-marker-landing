import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "GitHub Defect Marker — Standardized PR review labels for GitHub",
  description:
    "A Chrome extension that enforces consistent defect labels on GitHub pull request comments. Faster reviews, cleaner tracking.",
  openGraph: {
    title: "GitHub Defect Marker — PR review labels for GitHub",
    description:
      "Classify every GitHub PR comment with one-click #Major / #Minor / #Cosmetic labels.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
