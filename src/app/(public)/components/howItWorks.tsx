export default function HowItWorksCards() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#f3f4f6] to-[#e5e7eb] dark:from-[#1f2937] dark:to-[#111827]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-10 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Learn how the experience works
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover events, connect with people, and enjoy your city.
            </p>
          </div>
          <div className="grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3 overflow-clip">
            <div className="flex flex-col items-center space-y-4">
              <div className="mx-auto mb-4 hidden sm:block hover:animate-animateicon cursor-pointer">
                <MicroscopeIcon className="h-20 w-20 text-blue-500" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-xl font-bold text-gray-50 dark:bg-gray-50 dark:text-gray-900 relative after:right-full after:z-10 after:absolute after:min-w-36 after:rounded-sm before:rounded-sm  after:h-1 after:bg-black before:left-full before:z-10 before:absolute before:min-w-36  before:h-1 before:bg-black after:hidden before:hidden sm:before:block">
                01
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-lg font-semibold">
                  Search for events in your city
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Discover a wide range of events happening in your local area.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="mx-auto mb-4 hidden sm:block hover:animate-animateicon cursor-pointer">
                <CalendarIcon className="h-20 w-20 text-purple-500" />
              </div>
              <div className=" relative after:right-full after:z-10 after:absolute after:min-w-36 before:rounded-sm  after:h-1 after:bg-black before:left-full before:z-10 before:absolute before:min-w-36  before:h-1 before:bg-black flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-xl font-bold text-gray-50 dark:bg-gray-50 dark:text-gray-900 after:hidden before:hidden sm:after:block sm:before:block">
                02
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-lg font-semibold">
                  Find an event that interests you
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Browse through a variety of events and find one that fits your
                  interests.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="mx-auto mb-4 hidden sm:block hover:animate-animateicon cursor-pointer">
                <PartyPopperIcon className="h-20 w-20 text-blue-500" />
              </div>
              <div className=" relative after:right-full after:z-10 after:absolute after:min-w-36 after:rounded-sm before:rounded-sm  after:h-1 after:bg-black flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-xl font-bold text-gray-50 dark:bg-gray-50 dark:text-gray-900 before:left-full before:z-10 before:absolute before:min-w-36  before:h-1 before:bg-black after:hidden before:hidden sm:after:block">
                03
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-lg font-semibold">
                  Enjoy events & meet peoples
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Attend the event, meet new people, and have a great time.
                </p>
              </div>
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

function MicroscopeIcon(props: any) {
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
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

function PartyPopperIcon(props: any) {
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
      <path d="M5.8 11.3 2 22l10.7-3.79" />
      <path d="M4 3h.01" />
      <path d="M22 8h.01" />
      <path d="M15 2h.01" />
      <path d="M22 20h.01" />
      <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
      <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" />
      <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" />
      <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
    </svg>
  );
}
