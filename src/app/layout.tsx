import type { Metadata } from "next";
import { Source_Serif_4, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marknesbitt.info"),
  title: {
    default: "The Vape Digest — UK vaping news and regulation, explained",
    template: "%s | The Vape Digest",
  },
  description:
    "UK vaping news and regulatory explainers. The Vape Digest tracks law changes, Trading Standards issues and what they mean for adult vapers and retailers.",
  openGraph: {
    title: "The Vape Digest",
    description:
      "UK vaping news and regulation, explained. Regulatory explainers for adult vapers and retailers.",
    url: "https://marknesbitt.info",
    siteName: "The Vape Digest",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vape Digest",
    description: "UK vaping news and regulation, explained.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${sourceSerif.variable} ${plexSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-off-white text-navy antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "The Vape Digest",
            url: "https://marknesbitt.info",
            description:
              "UK vaping news and regulatory explainers, tracking law changes, Trading Standards issues and what they mean practically for adult vapers and retailers.",
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-brick focus:text-off-white focus:px-4 focus:py-2 focus:z-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
