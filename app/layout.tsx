import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/lib/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flyskyeurope.com'),
  title: {
    default: "FlySky Europe - Study Abroad & Visa Consultancy in Vadodara, Gujarat",
    template: "%s | FlySky Europe Vadodara",
  },
  description: "Expert study abroad and visa consultancy services in Vadodara, Gujarat. FlySky Europe helps students study in Germany, UK, USA, Canada, Australia. Free consultation available.",
  keywords: [
    "study abroad consultancy Vadodara",
    "visa consultancy Vadodara",
    "study in Germany from Vadodara",
    "study in USA from Gujarat",
    "study abroad Gujarat",
    "student visa consultants Vadodara",
    "FlySky Europe",
    "overseas education Vadodara",
    "study in Europe from India",
    "UK student visa Vadodara",
    "Canada student visa Gujarat",
    "international education consultants Vadodara"
  ],
  authors: [{ name: "FlySky Europe" }],
  creator: "FlySky Europe",
  publisher: "FlySky Europe",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://flyskyeurope.com",
    siteName: "FlySky Europe - Study Abroad Consultancy Vadodara",
    title: "FlySky Europe - Study Abroad & Visa Consultancy in Vadodara, Gujarat",
    description: "Expert study abroad and visa consultancy in Vadodara. Study in Germany, UK, USA, Canada with FlySky Europe. Free consultation. 98% visa success rate.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FlySky Europe - Study Abroad Consultancy Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlySky Europe - Study Abroad Consultancy Vadodara",
    description: "Expert study abroad and visa consultancy in Vadodara, Gujarat. Study in Europe, USA, Canada, Australia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://flyskyeurope.com',
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Vadodara',
    'geo.position': '22.3072;73.1812',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
