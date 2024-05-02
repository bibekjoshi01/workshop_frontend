import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "../../../globals.css";
import UserProfile from "./userProfile";
import TabLits from "./tablist";

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
      <div className={"main"}>
        <UserProfile />
        <div className="container my-6 md:my-0 mx-auto border-b px-0 p-1 text-muted-foreground overscroll-x-scroll hideScrollbar">
            <TabLits />
        </div>
        <div className="container mx-auto bg-gray-50 dark:bg-gray-800 dark:text-white">{children}</div>
      </div>
    </div>
  );
}
