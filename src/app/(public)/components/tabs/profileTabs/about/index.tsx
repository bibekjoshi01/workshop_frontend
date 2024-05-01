import { TabsContent } from "@/components/ui/tabs";
import AboutTabs from "../../aboutTabs";

export default function About() {
  return (
    <TabsContent
      className=" flex md:flex-row items-center md:items-start gap-8  py-6 px-2 bg-white dark:bg-gray-800 "
      value="about"
    >
      <AboutTabs />
    </TabsContent>
  );
}
