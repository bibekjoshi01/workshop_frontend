import AboutTabs from "@/app/(public)/components/tabs/aboutTabs";

export default function about() {
  return (
    <div className=" flex md:flex-row items-center md:items-start  rounded-xl gap-8  px-2 bg-white dark:bg-gray-800 ">
      <AboutTabs />
    </div>
  );
}
