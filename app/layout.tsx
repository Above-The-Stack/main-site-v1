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
      <body className={`${inter.variable} bg-background text-white`}> 
        <div className="min-h-screen bg-gradient-to-b from-background via-[#0F1423] to-[#0B0F1A]">
          <Header />
          <main className="pb-16 pt-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
