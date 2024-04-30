import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <div className="inline-block p-8 text-white dark:text-black rounded-lg dark:bg-gray-100 px-3 py-1 text-sm bg-gray-800">
            Coming Soon
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            {"We’re preparing something great!"}
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Sign up to be notified when we launch.
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-4 space-x-2 py-8">
            <Input
              className="flex-1 border py-6 sm:py-8 sm:px-6 rounded-3xl shadow-sm bg-white hover:border-blue-400 focus:ring-blue-500 focus:ring-1 focus:ring-offset-0 transition-colors  dark:bg-gray-950 dark:border-blue-50 dark:focus:border-blue-100 dark:focus:ring-blue-200"
              placeholder="Enter your email"
              type="email"
            />
            <Button
              className="py-8 px-10 sm:py-8 sm:px-16 rounded-3xl hover:scale-95 hover:shadow-md shadow-sm transition-all"
              type="submit"
            >
              Notify Me
            </Button>
          </div>
        </div>
        <Image
          alt="Coming Soon"
          className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          height="400"
          src="/comingSoon.jpg"
          width="550"
        />
      </div>
    </section>
  );
}
