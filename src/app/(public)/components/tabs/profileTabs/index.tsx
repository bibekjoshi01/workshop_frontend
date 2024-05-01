import { TabsTrigger, TabsList, Tabs } from "@/components/ui/tabs";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import TabsTriggers from "./tabsTriggers";
import TabsContents from "./tabsContents";
import { Button } from "@/components/ui/button";

export default function ProfileTabs() {
  return (
    <Tabs className="border-b container px-0" defaultValue="posts">
      <div className="container border-b flex justify-between items-baseline overflow-x-scroll hideScrollbar mx-auto px-4 py-4  ">
       {/* FIXME WHILE SCROLLING POSTS IS NOT SEEN  */}
        <TabsList className="flex h-[4rem] space-x-6 bg-transparent  hideScrollbar ">
          {/* TabsTriggers handle tab openings */}
          <TabsTriggers />
        </TabsList>
        <DropDownMenuIcon />
      </div>
      {/* TabsContents handle tab data */}
      <TabsContents />
    </Tabs>
  );
}

function DropDownMenuIcon() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="text-gray-500 dark:text-gray-400"
          size="icon"
          variant="ghost"
        >
          <Dots className="w-4 h-4" />
          <span className="sr-only">More options</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Dots(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}
