import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Toaster } from "@/components/ui/sonner";

// Primary font - elegant serif for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

// Secondary font - clean sans-serif for body text
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Reeta Madaan | Luxury Indian Fashion Boutique",
  description: "Where Tradition Meets Modern Elegance. Discover handcrafted, artisanal clothing with timeless appeal and contemporary style.",
  keywords: "Reeta Madaan, luxury fashion, Indian fashion, handcrafted clothing, artisanal clothing, punjabi suits, anarkali, traditional clothing, modern fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <ClientBody>
        {children}
        <Toaster />
      </ClientBody>
    </html>
  );
}
