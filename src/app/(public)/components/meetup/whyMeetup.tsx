import Image from "next/image";
import Link from "next/link";

export default function WhyMeetUp() {
  return (
    <section className="w-full py-6 md:py-8 lg:py-10 bg-gradient-to-r from-[#f3f4f6] to-[#e5e7eb] dark:from-[#1f2937] dark:to-[#111827]">
      <div className="container grid items-center gap-6 px-4 pt-12 md:grid-cols-[1fr_500px] md:px-6 lg:gap-12 xl:grid-cols-[1fr_550px]">
        <Image
          alt="Meetups"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center  lg:order-last"
          height="500"
          src="/whymeetupImage.png"
          width="500"
        />
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block p-8 text-white dark:text-black rounded-lg dark:bg-gray-100 px-3 py-1 text-sm bg-gray-800">
              WHY MEETUPS
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Discover more than 3,000+ technology events
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore a wide range of technology-focused meetups and conferences
              happening in your local community and around the world.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 py-6  hover:scale-95 text-sm font-medium text-gray-50 shadow transition-transform hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Post Event
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-6 hover:scale-95 text-sm font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 transition-transform focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Browse Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}