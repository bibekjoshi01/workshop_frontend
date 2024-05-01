import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { CardHeader, CardContent, Card } from "@/components/ui/card";

export default function MoreDetailscard() {
  return (
    <Card className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200 ">
      <div className="flex items-baseline justify-between w-full">
        <h1 className="text-start text-2xl p-4 font-semibold">More about me</h1>

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
          <h1 className="text-start text-xl py-4 font-semibold">Nickname</h1>
          <div className="flex items-center space-x-2 py-1">
            <p className="text-sm cursor-pointer">
              People love to call me{" "}
              <span className="font-semibold hover:underline "> Mannu</span>
            </p>
          </div>
          <h1 className="text-start text-xl py-4 font-semibold">
            Favourite Quote
          </h1>
          <div className="flex items-center space-x-2 py-1">
            <p className="text-sm cursor-pointer">
              <span className="font-semibold hover:underline ">
                {" "}
                {`“Yesterday is history. Tomorrow is a mystery. But today is a gift, and that is why it’s called the present.”`}
              </span>
              <p className="text-end py-2"> ― Joan Rivers ❤️❤️</p>
            </p>
          </div>
        </div>
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
