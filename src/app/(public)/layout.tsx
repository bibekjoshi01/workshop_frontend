import Footer from "./layout/footer";
import Header from "./layout/header";
import { Open_Sans } from "next/font/google";

export const metadata = {
  title: "Workshop",
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
      <Header />
      <div className={"main"}>{children}</div>
      <Footer />
    </div>
  );
}
