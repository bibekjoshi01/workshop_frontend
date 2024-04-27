export default function HowItWorksCards() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl  text-center font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-gray-400">
              How It Works
            </h2>
            <p className="mx-auto text-center max-w-[700px] text-gray-600 md:text-xl dark:text-gray-400">
            Learn how the experience works
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-900 text-white p-2 rounded-full">
                    <SearchIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">
                    Search for events in your city
                  </h3>
                </div>
                <p className="text-md text-gray-500 dark:text-gray-400">
                  Explore a wide range of events happening in your local area.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-900 text-white p-2 rounded-full">
                    <CalendarIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">
                    Find an event that interests you
                  </h3>
                </div>
                <p className="text-md text-gray-500 dark:text-gray-400">
                  Browse through a variety of events and select the one that
                  catches your eye.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-900 text-white p-2 rounded-full">
                    <UsersIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">
                    Enjoy an event and connect with people
                  </h3>
                </div>
                <p className="text-md text-gray-500 dark:text-gray-400">
                  Attend the event, network with like-minded individuals, and
                  have a great time.
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
