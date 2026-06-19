import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://matheedental.com"),
  title: {
    default: "Mathee Dental Studio — Gentle & Expert Dental Care",
    template: "%s — Mathee Dental Studio",
  },
  description:
    "Mathee Dental Studio provides gentle, expert dental care including cleanings, exams, whitening, and cosmetic dentistry. Book your visit today.",
  keywords: [
    "dentist",
    "dental care",
    "teeth cleaning",
    "cosmetic dentistry",
    "teeth whitening",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  openGraph: {
    siteName: "Mathee Dental Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://matheedental.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <footer className="bg-slate-800 text-slate-300 text-center text-sm py-6 mt-auto">
          <p>&copy; {new Date().getFullYear()} Mathee Dental Studio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
