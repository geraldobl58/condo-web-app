import type { Metadata } from "next";

import { Montserrat } from "next/font/google";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";

const font = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Condo Web App",
  description: "Condo Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
