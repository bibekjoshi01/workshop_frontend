import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";

export default function EventsHeader() {
  return (
    <section className="w-full py-2 md:py-6">
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            All Events
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full pl-10 pr-4 py-2 rounded-md bg-white shadow-sm hover:border-blue-600 focus:ring-blue-700 focus:ring-1 focus:ring-offset-0 transition-colors dark:bg-gray-950 dark:border-blue-50 dark:focus:border-blue-100 dark:focus:ring-blue-200"
                placeholder="Search for events"
                type="text"
              />
            </div>
            <div className="relative">
              <CatIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <Select>
                <SelectTrigger className="w-full pl-10 pr-4 py-2 rounded-md bg-white shadow-sm hover:border-blue-600 focus:ring-blue-700 focus:ring-1 focus:ring-offset-0 transition-colors dark:bg-gray-950 dark:border-blue-50 dark:focus:border-blue-100 dark:focus:ring-blue-200">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem className="cursor-pointer" value="music">
                      Music
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="art">
                      Art
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="technology">
                      Technology
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="sports">
                      Sports
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="relative">
              <LocateIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <Select>
                <SelectTrigger className="w-full pl-10 pr-4 py-2 rounded-md bg-white shadow-sm hover:border-blue-600 focus:ring-blue-700 focus:ring-1 focus:ring-offset-0 transition-colors dark:bg-gray-950 dark:border-blue-50 dark:focus:border-blue-100 dark:focus:ring-blue-200">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem className="cursor-pointer" value="new-york">
                      New York
                    </SelectItem>
                    <SelectItem
                      className="cursor-pointer"
                      value="san-francisco"
                    >
                      San Francisco
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="london">
                      London
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="tokyo">
                      Tokyo
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <Select>
                <SelectTrigger className="w-full pl-10 pr-4 py-2 rounded-md bg-white shadow-sm hover:border-blue-600 focus:ring-blue-700 focus:ring-1 focus:ring-offset-0 transition-colors  dark:bg-gray-950 dark:border-blue-50 dark:focus:border-blue-100 dark:focus:ring-blue-200">
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem className="cursor-pointer" value="remote">
                      Remote
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="in-person">
                      In-Person
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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

function CatIcon(props: any) {
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
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
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

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
