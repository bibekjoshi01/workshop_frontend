import { TabsTrigger } from "@/components/ui/tabs";
export default function TabsTriggers() {
  return (
    <>
      <TabsTrigger
        className="py-4 font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all  data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:text-gray-900 dark:text-gray-50 dark:data-[state=active]:text-white  data-[state=active]:border-blue-500"
        value="posts"
      >
        Posts
      </TabsTrigger>
      <TabsTrigger
        className="py-4 font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:text-gray-900 dark:text-gray-50 dark:data-[state=active]:text-white  data-[state=active]:border-blue-500"
        value="about"
      >
        About
      </TabsTrigger>
      <TabsTrigger
        className="py-4 font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:text-gray-900 dark:text-gray-50 dark:data-[state=active]:text-white  data-[state=active]:border-blue-500"
        value="friends"
      >
        Friends
      </TabsTrigger>
      <TabsTrigger
        className="py-4 font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:text-gray-900 dark:text-gray-50 dark:data-[state=active]:text-white  data-[state=active]:border-blue-500"
        value="skills"
      >
        Skills
      </TabsTrigger>
      <TabsTrigger
        className="py-4 font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:text-gray-900 dark:text-gray-50 dark:data-[state=active]:text-white  data-[state=active]:border-blue-500"
        value="achievements"
      >
        Achievements
      </TabsTrigger>
    </>
  );
}
