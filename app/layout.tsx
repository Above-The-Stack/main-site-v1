import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Above The Stack",
  description: "Vendor-neutral, MSP-first community and content platform shaping the future of the IT channel.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-brand-bg text-brand-text`}>
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="grid-angled absolute inset-0" />
          </div>
          <Header />
          <main className="pb-20 pt-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
