import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AddEvent() {
  return (
    <section className="container py-6 lg:py-12 xl:py-16">
      <div className="p-4 lg:p-6">
        {/* First form content */}
        <div className="lg:flex gap-2">
          <div className="space-y-2 basis-2/5 mb-10 lg:sticky lg:top-0 ">
            <h2 className="text-2xl font-bold tracking-wider uppercase text-gray-900 dark:text-gray-50">
              <UsersIcon className="mr-2 inline-block h-6 w-6 text-gray-900 dark:text-gray-50" />
              1. ORGANIZER INFORMATION
            </h2>
            <p className="text-sm text-gray-500 md:text-base/none dark:text-gray-400">
              Enter the information of the person organizing the event.
            </p>
          </div>
          <div className="grid gap-4 basis-3/5 border rounded-3xl p-6 md:p-12 hover:border-gray-400">
            <div className="space-y-1.5 grid gap-2">
              <Label className="text-sm font-bold" htmlFor="full-name">
                Full Name
              </Label>
              <Input
                className="rounded-full px-4 py-2.5 md:p-7 text-sm font-medium  bg-white shadow-sm hover:border-blue-600 focus:ring-blue-700 focus:ring-1 focus:ring-offset-0 transition-colors  dark:bg-gray-950 dark:border-blue-50 dark:focus:border-blue-100 dark:focus:ring-blue-200"
                id="full-name"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1.5 grid gap-2">
              <Label className="text-sm font-bold" htmlFor="email">
                Email Address
              </Label>
              <Input
                className="rounded-full px-4 py-2.5 md:p-7 text-sm font-medium  bg-white shadow-sm hover:border-blue-600 focus:ring-blue-700 focus:ring-1 focus:ring-offset-0 transition-colors  dark:bg-gray-950 dark:border-blue-50 dark:focus:border-blue-100 dark:focus:ring-blue-200"
                id="email"
                placeholder="johndoe14@gmail.com"
                type="email"
              />
            </div>
            <div className="space-y-1.5 grid gap-2">
              <Label className="text-sm font-bold" htmlFor="phone">
                Phone Number
              </Label>
              <Input
                className="rounded-full px-4 py-2.5 md:p-7 text-sm font-medium  bg-white shadow-sm hover:border-blue-600 focus:ring-blue-700 focus:ring-1 focus:ring-offset-0 transition-colors dark:bg-gray-950 dark:border-blue-50 dark:focus:border-blue-100 dark:focus:ring-blue-200"
                id="phone"
                placeholder="98XXXXXXXX"
              />
            </div>
          </div>
        </div>

        {/* Second form content */}
        <div className="lg:flex gap-2 mt-12">
          <div className="space-y-2 basis-2/5 mb-10">
            <h2 className="text-2xl font-bold tracking-wider uppercase text-gray-900 dark:text-gray-50">
              <CalendarIcon className="mr-2 inline-block h-6 w-6 text-gray-900 dark:text-gray-50" />
              2. EVENT INFORMATION
            </h2>
            <p className="text-sm text-gray-500 md:text-base/none dark:text-gray-400">
              Enter the information about the event.
            </p>
          </div>

          <div className="grid gap-4 basis-3/5 border rounded-3xl p-6 md:p-12 hover:border-gray-400">
            <div className="space-y-1.5 grid gap-2">
              <Label className="text-sm font-bold" htmlFor="event-name">
                Event Name
              </Label>
              <Input
                className="rounded-full px-4 py-2.5 md:p-7 text-sm font-medium  bg-white shadow-sm hover:border-blue-600 focus:ring-blue-700 focus:ring-1 focus:ring-offset-0 transition-colors dark:bg-gray-950 dark:border-blue-50 dark:focus:border-blue-100 dark:focus:ring-blue-200"
                id="event-name"
                placeholder="MERN bootcamp"
              />
            </div>
            <div className="space-y-1.5 grid gap-2">
              <Label className="text-sm font-bold" htmlFor="location">
                Event Location
              </Label>
              <Input
                className="rounded-full px-4 py-2.5 md:p-7 text-sm font-medium  bg-white shadow-sm hover:border-blue-600 focus:ring-blue-700 focus:ring-1 focus:ring-offset-0 transition-colors dark:bg-gray-950 dark:border-blue-50 dark:focus:border-blue-100 dark:focus:ring-blue-200"
                id="location"
                placeholder="Thapathali Campus"
              />
            </div>
            <div className="space-y-1.5 grid gap-2">
              <Label className="text-sm font-bold" htmlFor="type">
                Event Type
              </Label>
              <Select
              //   id="type"
              >
                <SelectTrigger className="w-full pl-10 pr-4 py-2 rounded-md bg-white shadow-sm hover:border-blue-600 focus:ring-blue-700 focus:ring-1 focus:ring-offset-0 transition-colors dark:bg-gray-950 dark:border-blue-50 dark:focus:border-blue-100 dark:focus:ring-blue-200">
                  <SelectValue placeholder="Select Event Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in-person">In-person</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5 grid gap-2">
              <Label className="text-sm font-bold" htmlFor="info">
                Event Information
              </Label>
              <Textarea
                className="rounded-xl px-4 py-2.5 md:p-7 text-sm font-medium bg-white shadow-sm hover:border-blue-600 focus:ring-blue-700 focus:ring-1 focus:ring-offset-0 transition-colors dark:bg-gray-950 dark:border-blue-50 dark:focus:border-blue-100 dark:focus:ring-blue-200"
                id="info"
                placeholder="MERN bootcamp is a 3-day event where you will learn the basics of MERN stack."
              />
            </div>
            <div className="space-y-1.5 grid gap-2">
              <Label className="text-sm font-bold" htmlFor="schedule">
                Event Schedule
              </Label>
              <Textarea
                className="rounded-xl px-4 py-2.5 md:p-7 text-sm font-medium bg-white shadow-sm hover:border-blue-600 focus:ring-blue-700 focus:ring-1 focus:ring-offset-0 transition-colors dark:bg-gray-950 dark:border-blue-50 dark:focus:border-blue-100 dark:focus:ring-blue-200"
                id="schedule"
                placeholder="Daily at 7:00 AM - 9:00 AM"
              />
            </div>
            <div className="space-y-1.5 grid gap-2">
              <Label className="text-sm font-bold" htmlFor="category">
                Event Category
              </Label>
              <Select
              //   id="category"
              >
                <SelectTrigger className="w-full pl-10 pr-4 py-2 rounded-md bg-white shadow-sm hover:border-blue-600 focus:ring-blue-700 focus:ring-1 focus:ring-offset-0  transition-colors  dark:bg-gray-950 dark:border-blue-50 dark:focus:border-blue-100 dark:focus:ring-blue-200">
                  <SelectValue placeholder="Select Event Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="webinars">Webinars</SelectItem>
                  <SelectItem value="workshops">Workshops</SelectItem>
                  <SelectItem value="meetups">Meetups</SelectItem>
                  <SelectItem value="conferences">Conferences</SelectItem>
                  <SelectItem value="hackathons">Hackathons</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* TODO Submit Button */}
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-between mt-8">
              <Button className="w-full rounded-2xl hover:scale-95 transition-all p-4 md:p-8 md:w-auto bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                <CheckIcon className="mr-2 inline-block h-5 w-5" />
                Submit Event
              </Button>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By submitting this event, you agree to our{" "}
                <Link
                  className="underline underline-offset-2 text-blue-600 hover:text-blue-700 dark:hover:text-blue-50"
                  href="#"
                >
                  Terms & Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarIcon(props: any) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function CheckIcon(props: any) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
