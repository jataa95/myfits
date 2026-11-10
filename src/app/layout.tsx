import type { Metadata, Viewport } from "next";
import { Anton, Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const anton = Anton({ variable: "--font-anton", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "MyFits — Clothing Manufacturer for Brands in Lagos",
    template: "%s | MyFits",
  },
  description: site.description,
  keywords: [
    "clothing manufacturer Lagos",
    "clothing manufacturer Nigeria",
    "t-shirt production Lagos",
    "jersey production Nigeria",
    "embroidery Lagos",
    "sublimation printing Lagos",
    "cut and sew Nigeria",
    "fashion training Lagos",
    "tailoring school Lagos",
    "streetwear manufacturer",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: site.name,
    title: "MyFits — We make clothing for your brand",
    description:
      "Send in your design. We cut, sew, print, embroider and package it. Clothing production + training in Apapa, Lagos.",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.legalName,
  alternateName: site.name,
  description: site.description,
  url: site.url,
  telephone: `+${site.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Apapa",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  areaServed: "NG",
  sameAs: [site.tiktok],
  knowsAbout: [
    "Clothing manufacturing",
    "Cut and sew",
    "Embroidery",
    "Sublimation printing",
    "Fashion design training",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased`}
    >
      <body className="min-h-dvh font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
