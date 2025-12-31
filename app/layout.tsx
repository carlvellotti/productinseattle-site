import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Nav, Footer, GoogleAnalytics } from "@/components";
import "./globals.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://productinseattle.com"),
  title: {
    default: "Product in Seattle - Seattle's Product Community",
    template: "%s | Product in Seattle",
  },
  description:
    "Building Seattle's product community, one event at a time. Find events worth attending. Host your own and reach the community.",
  keywords: [
    "Seattle PM events",
    "Seattle product management events",
    "Seattle product manager meetup",
    "Seattle tech events",
    "Seattle product community",
    "product management Seattle",
    "PM networking Seattle",
    "Seattle tech meetups",
    "host PM event Seattle",
    "PNW tech events",
  ],
  authors: [{ name: "Carl Vellotti" }],
  creator: "Carl Vellotti",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://productinseattle.com",
    siteName: "Product in Seattle",
    title: "Product in Seattle - Seattle's Product Community",
    description:
      "Building Seattle's product community, one event at a time. Find events worth attending. Host your own and reach the community.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Product in Seattle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product in Seattle - Seattle's Product Community",
    description:
      "Building Seattle's product community, one event at a time. Find events worth attending. Host your own and reach the community.",
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
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        {GA_MEASUREMENT_ID && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
