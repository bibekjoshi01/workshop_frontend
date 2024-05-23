import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { CardContent, Card } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements | My Profile",
};
export default function Achievements() {
  interface achievementsType {
    id: number;
    title: string;
    description: string;
  }
  const achievements: achievementsType[] = [
    {
      id: 1,
      title: "Design Excellence Award",
      description:
        "Celebrating mastery in creating user-centric interfaces with React, Next.js, and versatile design tools.",
    },
    {
      id: 2,
      title: "Design Excellence Award",
      description:
        "Celebrating mastery in creating user-centric interfaces with React, Next.js, and versatile design tools.",
    },
  ];
  return (
    <Card className="py-8 rounded-xl px-2 bg-gray-50 dark:bg-gray-800 dark:text-white ">
      <div className="flex items-baseline justify-between w-full">
        <h1 className="text-start text-2xl p-4 font-semibold">
          My achievements
        </h1>

        {/* drop down icon ||  DOTS */}
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
      </div>

      <CardContent className="p-3">
        {achievements.map((achievement) => (
          <div className="space-y-2" key={achievement.id}>
            <h1 className="text-start text-xl py-4 font-semibold">
              {" "}
              {achievement.title}
            </h1>
            <div className="flex items-center space-x-2 py-1">
              <p className="text-sm cursor-pointer">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
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
