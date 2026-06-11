import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
});
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
    <html lang="en" className={`${plexSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
