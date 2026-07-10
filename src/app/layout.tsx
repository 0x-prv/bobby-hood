import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/cinematic/SmoothScroll";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "$BOBBY | The First Meme Outlaw",
  description:
    "Meet Bobby Hood, the forgotten cousin, failed archer, and first meme outlaw of the new forest.",
  openGraph: {
    title: "$BOBBY | The First Meme Outlaw",
    description:
      "Meet Bobby Hood, the forgotten cousin, failed archer, and first meme outlaw of the new forest.",
    images: ["/og-bobby.jpg"],
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
      className={`${instrumentSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-forest-black text-warm-ivory">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}