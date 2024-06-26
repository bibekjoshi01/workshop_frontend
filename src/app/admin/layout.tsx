import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Workshopify",
    default: "Workshopify",
  },
  description: "Join Us",
};

const openSans = Open_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${openSans.className} bgColor publicBody`}>
      <div className={"main"}>{children}</div>
    </div>
  );
}
