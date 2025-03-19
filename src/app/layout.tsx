import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import ClientBody from "./ClientBody";
import { Toaster } from "@/components/ui/sonner";
import ThirdPartyScripts from "./third-party-scripts";

// Primary font - elegant serif for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: 'swap',
  preload: true,
});

// Secondary font - clean sans-serif for body text
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Reeta Madaan | Luxury Indian Fashion Boutique",
  description: "Where Tradition Meets Modern Elegance. Discover handcrafted, artisanal clothing with timeless appeal and contemporary style.",
  keywords: "Reeta Madaan, luxury fashion, Indian fashion, handcrafted clothing, artisanal clothing, punjabi suits, anarkali, traditional clothing, modern fashion",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://reeta-madaan-boutique.vercel.app',
  },
  openGraph: {
    title: "Reeta Madaan | Luxury Indian Fashion Boutique",
    description: "Where Tradition Meets Modern Elegance. Discover handcrafted, artisanal clothing with timeless appeal and contemporary style.",
    url: 'https://reeta-madaan-boutique.vercel.app',
    siteName: 'Reeta Madaan Boutique',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Reeta Madaan | Luxury Indian Fashion Boutique",
    description: "Where Tradition Meets Modern Elegance. Discover handcrafted, artisanal clothing with timeless appeal and contemporary style.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#A14D36"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#A14D36" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/logo.png" />
      </head>
      <ClientBody>
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
        <ThirdPartyScripts />
      </ClientBody>
    </html>
  );
}
