import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { MdOutlineLocalPhone } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import Link from "next/link";

export default function ConatctInfoCard() {
  interface contactInfoTypes {
    id: number;
    title: string;
    value: string;
  }
  const contactInfo: contactInfoTypes[] = [
    {
      id: 1,
      title: "Contact",
      value: "98XXXXXXXX",
    },
    {
      id: 2,
      title: "Social Links",
      value: "https://manis-beta.vercel.app/",
    },
    {
      id: 3,
      title: "Social Links",
      value: "https://github.com/ManishJoc14",
    },
    {
      id: 4,
      title: "Social Links",
      value: "www.linkedin.com/in/manish-joshi-9762b2304",
    },
    {
      id: 5,
      title: "Social Links",
      value: "https://www.facebook.com/profile.php?id=100028545702525",
    },
  ];
  return (
    <Card className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200 ">
      <div className="flex items-baseline justify-between w-full">
        <h1 className="text-start text-2xl p-4 font-semibold">Contact Info</h1>
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
        {/* Only show Contact Details */}
        <div className="space-y-2">
          {contactInfo.map(
            (contact) =>
              contact.title.toLowerCase() === "contact" && (
                <div
                  key={contact.id}
                  className="flex items-center space-x-2 py-1"
                >
                  <MdOutlineLocalPhone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <p className="text-sm cursor-pointer">
                    Contact :{" "}
                    <span className="font-semibold hover:underline ">
                      {contact.value}
                    </span>
                  </p>
                </div>
              )
          )}

          {/* Only show Social links  */}
          <h1 className="text-start text-2xl py-4 font-semibold">
            Social Links
          </h1>
          {contactInfo.map(
            (contact, i) =>
              contact.title.toLowerCase() === "social links" && (
                <div key={i} className="flex items-center space-x-2 py-1">
                  {/* FIXME - how to store icons  */}
                  <TbWorld className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <p className="text-sm cursor-pointer">
                    <span className="font-semibold hover:underline ">
                      {" "}
                      <Link href={contact.value} target="_blank">
                        {contact.value}
                      </Link>
                    </span>
                  </p>
                </div>
              )
          )}
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

