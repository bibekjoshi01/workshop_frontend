import AboutTabs from "@/app/(public)/components/tabs/aboutTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | My Profile",
};
export default function about() {
  return (
    <div className=" flex md:flex-row items-center md:items-start  rounded-xl gap-8  px-2 bg-gray-50 dark:bg-gray-800 dark:text-white ">
      <AboutTabs />
    </div>
  );
}
