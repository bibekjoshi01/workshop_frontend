import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#f3f4f6] to-[#e5e7eb] dark:from-[#1f2937] dark:to-[#111827]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl/none dark:text-gray-50">
                Make real connections with Meetups
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-400">
                Discover new interests, learn from experts, and build meaningful
                relationships through local Meetup events.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center  md:flex-row md:justify-center gap-4 ">
            <Link
              className="inline-flex md:h-16 items-center justify-center rounded-lg bg-gray-900 px-8 py-4 text-sm font-medium text-gray-50 shadow hover:shadow-sm transition-all hover:bg-gray-900/90 hover:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Post a Event
            </Link>
            <Link
              className="inline-flex md:h-16 items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-4 text-sm font-medium shadow-sm transition-all hover:bg-gray-100 hover:scale-95 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Browse Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
