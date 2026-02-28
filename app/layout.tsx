import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://your-temporary-url.netlify.app"), // Update this when you get a custom domain
  title: {
    default: "VNR DESIGNATHON 2026 | 4th Edition | VNRVJIET",
    template: "%s | VNR DESIGNATHON 2026",
  },
  description:
    "Join the 4th Edition of VNR DESIGNATHON at VNRVJIET, Hyderabad. A premier 24-hour design and innovation hackathon happening March 24-25, 2026. Initiate registration and bypass design limits.",
  keywords: [
    "Designathon",
    "VNRVJIET Hackathon",
    "VNR Vignana Jyothi",
    "Hackathon Hyderabad",
    "UI/UX Hackathon India",
    "Tech Event Hyderabad 2026",
    "VNRVJIET Events",
    "Designathon 4th Edition",
  ],
  authors: [
    { name: "Anurag Kosuri", url: "https://your-portfolio-or-github.com" },
  ],
  creator: "VNRVJIET",
  publisher: "VNRVJIET",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN", // Crucial for regional SEO in India
    url: "/",
    title: "VNR DESIGNATHON 2026 | 4th Edition | VNRVJIET",
    description:
      "A premier 24-hour design and innovation hackathon at VNRVJIET, Hyderabad. March 24-25, 2026. Will you accept the directive?",
    siteName: "VNR DESIGNATHON",
  },
  twitter: {
    card: "summary_large_image",
    title: "VNR DESIGNATHON 2026 | 4th Edition",
    description:
      "A premier 24-hour design and innovation hackathon at VNRVJIET, Hyderabad.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#050505] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
