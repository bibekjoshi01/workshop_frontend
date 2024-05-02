import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { CardContent, Card } from "@/components/ui/card";

export default function MoreDetailscard() {
  interface moreDetails {
    id: number;
    title: string;
    value: string;
  }
  const moreDetails: moreDetails[] = [
    {
      id: 1,
      title: "Nickname",
      value: "mannu",
    },
    {
      id: 2,
      title: "Favourite Quote",
      value: `“Yesterday is history. Tomorrow is a mystery. But today is a gift, and that is why it’s called the present.”`,
    },
  ];
  return (
    <Card className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200 py-4 ">
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

      <CardContent className="p-3">
        <div className="space-y-2">
          {moreDetails.map((moreDetail) => (
            <div key={moreDetail.id}>
              <h1 className="text-start text-xl py-4 font-semibold">
                {moreDetail.title}
              </h1>
              <div className="flex items-center space-x-2 py-1">
                <p className="text-sm cursor-pointer font-medium ">
                  {moreDetail.value}
                </p>
              </div>
            </div>
          ))}
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
