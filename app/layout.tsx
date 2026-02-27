import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

// High-energy Hackathon Metadata
export const metadata: Metadata = {
  title: "VNR DESIGN-A-THON 2026 | 24-Hour Hackathon",
  description:
    "24 hours of non-stop building, coding, and design at VNR VJIET. Join India's premier design-led hackathon to turn ideas into functional prototypes.",
  keywords: [
    "Hackathon",
    "Design-a-thon",
    "VNR VJIET",
    "Coding",
    "Software Engineering",
    "Rapid Prototyping",
    "Hyderabad Tech",
  ],
  authors: [{ name: "Anurag Kosuri" }], //

  // OpenGraph (Optimized for LinkedIn and Discord)
  openGraph: {
    title: "VNR DESIGN-A-THON 2026 | Build. Design. Ship.",
    description:
      "The 24-hour sprint is on at VNR VJIET. Compete with top technical talent to solve real-world problems through design and code.",
    url: "https://your-domain.com",
    siteName: "VNR DESIGN-A-THON",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VNR DESIGN-A-THON 2026 - 24 Hours of Innovation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter (X) Metadata
  twitter: {
    card: "summary_large_image",
    title: "VNR DESIGN-A-THON 2026 | 24h Build Sprint",
    description:
      "Are you ready to build? Join the 24-hour design-led hackathon at VNR VJIET. Compete, innovate, and ship.",
    images: ["/og-image.png"],
  },

  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceMono.variable} font-mono bg-[#050505] text-gray-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
