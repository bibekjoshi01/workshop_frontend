import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import getFirstLetters from "@/app/(public)/utils/getFirstLetters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Friends | My Profile",
};
export default function Friends() {
  interface friends {
    id: number;
    name: string;
    image: string;
    subTitle: string;
    mutualFriends: number;
  }
  const friends : friends[] = [
    {
      id: 1,
      name: "John Doe",
      image: "/userImage.png",
      subTitle: "Software Engineer",
      mutualFriends: 3,
    },
    {
      id: 2,
      name: "John Doe",
      image: "/userImage.png",
      subTitle: "Software Engineer",
      mutualFriends: 3,
    },
    {
      id: 3,
      name: "John Doe",
      image: "/userImage.png",
      subTitle: "Software Engineer",
      mutualFriends: 3,
    },
    {
      id: 4,
      name: "John Doe",
      image: "/userImage.png",
      subTitle: "Software Engineer",
      mutualFriends: 3,
    },
    {
      id: 5,
      name: "John Doe",
      image: "/userImage.png",
      subTitle: "Software Engineer",
      mutualFriends: 3,
    },
  ];
  return (
    <div className="rounded-xl my-2 bg-gray-50 dark:bg-gray-800 dark:text-white">
      <h1 className="text-start text-lg p-4 font-semibold">Friends</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2">
        {friends.map((friend, index) => (
          <Card className="w-full max-w-sm" key={index}>
            <CardContent className="flex items-center justify-between gap-4 p-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage alt="John Doe" src={friend.image} />
                  <AvatarFallback>
                    {getFirstLetters(friend.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-medium">{friend.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {friend.subTitle}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {friend.mutualFriends} mutual friends
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
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
                    <DropdownMenuItem>Add friend</DropdownMenuItem>
                    <DropdownMenuItem>Remove friend</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
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
