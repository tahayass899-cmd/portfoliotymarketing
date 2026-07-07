import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteUrl } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TYMarketing | Digital Marketing & AI Strategy",
    template: "%s | TYMarketing"
  },
  description:
    "Premium portfolio for TYMarketing, the Digital Marketing and AI Strategy freelance studio of Taha Yassine Moussaoui.",
  keywords: [
    "TYMarketing",
    "Taha Yassine Moussaoui",
    "Digital Marketing Morocco",
    "AI Strategy",
    "Brand Identity Design",
    "Website Development",
    "Graphic Design",
    "Advertising"
  ],
  authors: [{ name: "Taha Yassine Moussaoui" }],
  creator: "TYMarketing",
  publisher: "TYMarketing",
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      fr: "/"
    }
  },
  openGraph: {
    title: "TYMarketing | Digital Marketing & AI Strategy",
    description:
      "Premium brand identity, graphic design, websites, advertising, and AI strategy by Taha Yassine Moussaoui.",
    url: siteUrl,
    siteName: "TYMarketing",
    images: [
      {
        url: "/tymarketing-visual.svg",
        width: 1200,
        height: 900,
        alt: "TYMarketing portfolio visual"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TYMarketing | Digital Marketing & AI Strategy",
    description:
      "Premium portfolio for TYMarketing, the Digital Marketing and AI Strategy freelance studio of Taha Yassine Moussaoui.",
    images: ["/tymarketing-visual.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-brand-ink text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
