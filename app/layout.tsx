import type { Metadata, Viewport } from "next"; // Added Viewport type
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

// 1. New Viewport Export (Fixes the themeColor/viewport warnings)
export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// 2. Updated Metadata Export
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"), // Added metadataBase
  title: "VNR DESIGN-A-THON 2026 | 24-Hour Hackathon",
  description:
    "24 hours of non-stop building and design at VNR VJIET. Join India's premier design-led hackathon.",
  authors: [{ name: "Anurag Kosuri" }], //
  openGraph: {
    title: "VNR DESIGN-A-THON 2026",
    description: "The 24-hour sprint is on at VNR VJIET. Build. Design. Ship.",
    images: ["/og-image.png"],
    type: "website",
  },
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
