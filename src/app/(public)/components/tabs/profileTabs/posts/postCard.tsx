import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function PostCard() {
  return (
    <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200 ">
      <div className="flex items-center p-3 border-b dark:border-gray-700">
        <Avatar className="w-8 h-8 cursor-pointer">
          <AvatarImage alt="Jane Doe" src="/placeholder-avatar.jpg" />
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>
        <div className="ml-2 flex-1">
          <div className="font-semibold text-lg hover:underline cursor-pointer">Manish Joshi</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            2 hours ago
          </div>
        </div>
        {/* post edit / delete options*/}
        {/* dots */}
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
      <div className="p-3">
        <p className="text-sm font-medium py-2">
          Hey everyone! Just wanted to share this amazing sunset I captured
          today. What do you think?
        </p>
        <div className="mt-3 rounded-lg overflow-hidden">
          <Image
            alt="Sunset"
            className="w-full h-auto object-cover"
            height={338}
            src="/postImage.png"
            style={{
              aspectRatio: "600/338",
              objectFit: "cover",
            }}
            width={600}
          />
        </div>
      </div>
      <div className="flex items-center justify-between p-3 border-t dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <Button
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            size="icon"
            variant="ghost"
          >
            <HeartIcon className="w-4 h-4" />
            <span className="sr-only">Like</span>
          </Button>
          <Button
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            size="icon"
            variant="ghost"
          >
            <MessageCircleIcon className="w-4 h-4" />
            <span className="sr-only">Comment</span>
          </Button>
          <Button
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            size="icon"
            variant="ghost"
          >
            <ShareIcon className="w-4 h-4" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          123 likes • 45 comments
        </div>
      </div>
    </div>
  );
}

function HeartIcon(props: any) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MessageCircleIcon(props: any) {
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
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
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

function ShareIcon(props: any) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}
function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function ReplyIcon(props: any) {
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
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}
