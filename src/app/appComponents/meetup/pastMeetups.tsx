import { CardContent, Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PastMeetUps() {
  return (
    <>
<section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Past Meetup Events</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out some of our past meetup events and see the value they can bring to your professional
                development.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="cursor-pointer bg-white scale101 transition-all dark:bg-gray-950 shadow-lg hover:shadow-xl">
              <CardContent className="space-y-4">
                <div className="inline-block rounded-lg text-white dark:text-black bg-gray-800 px-3 py-1 text-sm dark:bg-gray-100">
                  #Web Dev.
                </div>
                <h3 className="text-2xl font-bold">Building Modern Web Apps</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <CalendarIcon className="h-4 w-4" />
                  <span>April 15, 2023</span>
                  <UsersIcon className="h-4 w-4" />
                  <span>120 attendees</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Learn the latest techniques and tools for building modern web applications.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
            <Card className="cursor-pointer bg-white scale101 transition-all dark:bg-gray-950 shadow-lg hover:shadow-xl">
              <CardContent className="space-y-4">
                <div className="inline-block rounded-lg text-white dark:text-black bg-gray-800 px-3 py-1 text-sm dark:bg-gray-100">#AI/ML</div>
                <h3 className="text-2xl font-bold">Intro to Machine Learning</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <CalendarIcon className="h-4 w-4" />
                  <span>March 25, 2023</span>
                  <UsersIcon className="h-4 w-4" />
                  <span>80 attendees</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Explore the fundamentals of machine learning and how to apply it to your projects.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
            <Card className="cursor-pointer bg-white scale101 transition-all dark:bg-gray-950 shadow-lg hover:shadow-xl">
              <CardContent className="space-y-4">
                <div className="inline-block rounded-lg text-white dark:text-black bg-gray-800 px-3 py-1 text-sm dark:bg-gray-100">
                  #Entrepreneurship
                </div>
                <h3 className="text-2xl font-bold">Startup Founders Meetup</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <CalendarIcon className="h-4 w-4" />
                  <span>February 10, 2023</span>
                  <UsersIcon className="h-4 w-4" />
                  <span>100 attendees</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Connect with fellow entrepreneurs and learn from their experiences in building a startup.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
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
