import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { MdOutlineComputer } from "react-icons/md";

export default function WorkAndEducationCard() {
  return (
    <Card className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200 ">
      <div className="flex items-baseline justify-between w-full">
        <h1 className="text-start text-2xl p-4 font-semibold">Work</h1>
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

      {/* <CardHeader className="flex items-center p-3 border-b dark:border-gray-700">
        <Avatar className="w-8 h-8">
          <AvatarImage alt="Manish" src="/userImage.jpg" />
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>
        <div className="ml-2 flex-1 ">
          <div className="font-medium text-sm">
            {`“Without ambition one starts nothing. Without work one finishes nothing. The prize will not be sent to you. You have to win it.”`}
            <p className="text-end py-2"> ―– Ralph Waldo Emerson ❤️❤️</p>
          </div>
        </div>
      </CardHeader> */}

      <CardContent className="p-3">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 py-1">
            <MdOutlineComputer className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <p className="text-sm cursor-pointer">
              Working at
              <span className="font-semibold hover:underline "> Infosys</span>
            </p>
          </div>
          <h1 className="text-start text-2xl py-4 font-semibold">Education</h1>
          <div className="flex items-center space-x-2 py-1">
            <SchoolIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <p className="text-sm cursor-pointer">
              Studies at
              <span className="font-semibold hover:underline ">
                {" "}
                Institute of Engineering, Thapathali Campus
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-2 py-1">
            <SchoolIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <p className="text-sm cursor-pointer">
              Studied at{" "}
              <span className="font-semibold hover:underline ">
                {" "}
                Little Buddha Academy, Mahendranagar
              </span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function LocateIcon(props: any) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
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

function SchoolIcon(props: any) {
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
      <path d="m4 6 8-4 8 4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 5v17" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}
