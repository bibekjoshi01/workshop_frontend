import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GiDuration } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { CiMicrophoneOn } from "react-icons/ci";
import AttendButton from "./AttendButton";

export default function Event() {
  return (
    <>
   
    <div className=" container mx-auto flex flex-col items-center space-y-8 px-4 py-6 md:px-6 md:py-12 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-8 mb-">
      
      <div className="flex flex-col space-y-4 w-full max-w-3xl ">
        <Image
          alt="Chess pieces"
          className="w-full rounded-t-lg md:rounded-t-none md:rounded-l-lg"
          height="300"
          src="/eventImage.png"
          style={{
            aspectRatio: "600/300",
            objectFit: "cover",
          }}
          width="600"
        />
        <div className="bg-white dark:bg-gray-900 p-4 rounded-b-lg shadow md:rounded-b-none md:rounded-r-lg">
          <h2 className="text-xl font-semibold">
            In this The DAVID & GOLIATH framework for growing a Service-based
            business.
          </h2>
          <p className="text-sm font-medium  my-2">
            Event by <span> Obi Umenze (Cobe)</span>
          </p>
          <p className="text-sm  flex items-center gap-2 my-1">
            <BsCalendar2Date size={15} /> Sat, Jun 8, 2024, 8:45 PM - 10:45 PM
            (your local time)
          </p>
          <div className="flex items-center justify-between py-2">
            <p className="text-sm  flex items-center gap-2 ">
              {" "}
              <CiMicrophoneOn size={15} />
              Audio event
            </p>
            <p className="text-sm  flex items-center gap-2 ">
              {" "}
              <GiDuration size={15} /> 2 hours{" "}
            </p>
            <p className="text-sm  flex items-center gap-2 ">
              <FiUsers size={15} /> 9,220 attendees
            </p>
            <div className="flex space-x-2">
              {/* need to use useState inside this button */}
              <AttendButton />
              <Button
                variant="outline"
                className="p-6 hover:scale-95 transition-all"
              >
                Share
              </Button>

              <div className="rotate-90">
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
                    <DropdownMenuItem className="cursor-pointer">
                      Save
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Report
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className="flex border-t pt-2">
            <Button className="text-blue-600" variant="ghost">
              Details
            </Button>
            <Button className="text-gray-500" variant="ghost">
              Comments
            </Button>
          </div>
          <div className="pt-4">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-sm text-gray-500">
              In this 2-hr audio seminar (here on Workshopify) you will
              understand $100,000 Blueprint to accelerate any service based
              business especially in this tough economy.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-start space-y-4 w-full  lg:max-w-xs">
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">
            Host an event on Workshopify and invite your network
          </h3>
          <Button
            className=" mt-4 mb-2 p-6 hover:scale-95 transition-all"
            variant="default"
          >
            Create event
          </Button>
        </div>
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Other events for you</h3>
            <Button className="text-blue-600" variant="ghost">
              See all
            </Button>
          </div>
          <div className="space-y-4 mt-4">
            <div className="flex space-x-4">
              <Image
                alt="Event thumbnail"
                className="w-20 h-20 rounded-lg"
                height="80"
                src="/eventImage.png"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <div>
                <h4 className="text-sm font-semibold mb">
                  Mobility Meetings - 7th of May 2024
                </h4>
                <p className="text-xs text-gray-500">Mobility Makers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}

function EllipsisVerticalIcon(props: any) {
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
