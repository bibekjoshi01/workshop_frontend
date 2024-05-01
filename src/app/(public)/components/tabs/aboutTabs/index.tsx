import { TabsTrigger, TabsList, Tabs } from "@/components/ui/tabs";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import TabsTriggers from "./tabsTriggers";
import TabsContents from "./tabsContents";

export default function AboutTabs() {
  return (
    <Tabs className="w-full px-0 -mt-8 py-16 " defaultValue="overview">
       <h1 className="text-start text-xl p-4 font-semibold">About</h1>
      <div className=" w-full flex flex-col sm:flex-row justify-between items-start gap-4 ">
        <TabsList className="flex h-auto flex-col  gap-2 items-start bg-transparent w-full sm:w-auto sm:grow border-r rounded-none ">
          {/* TabsTriggers handle tab openings */}
          <TabsTriggers />
        </TabsList>
        {/* TabsContents handle tab data */}
        <TabsContents />
      </div>
    </Tabs>
  );
}

// function DropDownMenuIcon() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           className="text-gray-500 dark:text-gray-400"
//           size="icon"
//           variant="ghost"
//         >
//           <Dots className="w-4 h-4" />
//           <span className="sr-only">More options</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem>Edit</DropdownMenuItem>
//         <DropdownMenuItem>Delete</DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

// function Dots(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="1" />
//       <circle cx="12" cy="5" r="1" />
//       <circle cx="12" cy="19" r="1" />
//     </svg>
//   );
// }
