import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Mathee Dental Studio — Gentle & Expert Dental Care",
    template: "%s — Mathee Dental Studio",
  },
  description:
    "Mathee Dental Studio provides gentle, expert dental care including cleanings, exams, whitening, and cosmetic dentistry. Book your visit today.",
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
