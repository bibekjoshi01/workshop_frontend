import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./(public)/layout/header";
import Footer from "./(public)/layout/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Workshopify",
    default: "Workshopify",
  },
  description: "Join Us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
