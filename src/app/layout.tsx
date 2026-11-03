import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "PROP MARK — Street-Level Australian Property Intelligence & Suburb Investment Engine",
  description: "Reverse-engineered Australian property intelligence platform combining 25 years of settlement records, G-NAF addresses, ABS Census data, school catchments, and planning registers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#fefcf5] text-[#3c3a39] antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
