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
    default: "Dentist in Somerset West | Mathee Dental Studio",
    template: "%s | Mathee Dental Studio",
  },
  description:
    "Mathee Dental Studio is your trusted dentist in Somerset West and Firgrove, Helderberg. We provide gentle, expert dental care including cleanings, exams, whitening, and cosmetic dentistry. Book your visit today.",
  keywords: [
    "dentist Somerset West",
    "dental care Helderberg",
    "teeth cleaning Firgrove",
    "cosmetic dentistry Somerset West",
    "teeth whitening Somerset West",
    "dentist Strand",
    "dental implants Helderberg",
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
        <footer className="bg-slate-800 text-slate-300 text-center text-sm py-8 mt-auto space-y-3">
          <p>
            Serving patients in Somerset West, Strand, Gordon&rsquo;s Bay, Firgrove, and the
            broader Helderberg basin since 2010.
          </p>
          <p>
            <a
              href="https://www.facebook.com/MatheeDentalStudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              Facebook
            </a>
            &nbsp;|&nbsp;
            <a
              href="https://maps.google.com/?cid=2023782324485113225"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              Google Maps
            </a>
            &nbsp;|&nbsp;
            <a href="/contact" className="text-teal-400 hover:underline">
              Contact &amp; Directions
            </a>
            &nbsp;|&nbsp;
            <a href="/book-appointment" className="text-teal-400 hover:underline">
              Book an Appointment
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} Mathee Dental Studio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
