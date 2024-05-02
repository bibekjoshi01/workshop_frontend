import { TabsTrigger } from "@/components/ui/tabs";
export default function TabsTriggers() {
  return (
    <>
      <TabsTrigger
        className="py-4 w-full justify-start text-sm  font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all  data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 dark:text-gray-50 dark:data-[state=active]:text-white  dark:data-[state=active]:bg-gray-800"
        value="overview"
      >
        Overview
      </TabsTrigger>
      <TabsTrigger
        className="py-4 w-full justify-start text-sm  font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 dark:text-gray-50 dark:data-[state=active]:text-white  dark:data-[state=active]:bg-gray-800"
        value="contact-info"
      >
        Contact Info
      </TabsTrigger>
      {/* <TabsTrigger
        className="py-4 w-full justify-start text-sm  font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 dark:text-gray-50 dark:data-[state=active]:text-white  dark:data-[state=active]:bg-gray-800"
        value="work-and-education"
      >
        Work and Education
      </TabsTrigger> */}
      <TabsTrigger
        className="py-4 w-full justify-start text-sm  font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 dark:text-gray-50 dark:data-[state=active]:text-white  dark:data-[state=active]:bg-gray-800"
        value="life-events"
      >
        Life Events
      </TabsTrigger>
      {/* <TabsTrigger
        className="py-4 w-full justify-start text-sm  font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 dark:text-gray-50 dark:data-[state=active]:text-white  dark:data-[state=active]:bg-gray-800"
        value="places-lived"
      >
        Places Lived
      </TabsTrigger> */}

      <TabsTrigger
        className="py-4 w-full justify-start text-sm  font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 dark:text-gray-50 dark:data-[state=active]:text-white  dark:data-[state=active]:bg-gray-800"
        value="more-details"
      >
        More Details
      </TabsTrigger>
    </>
  );
}
