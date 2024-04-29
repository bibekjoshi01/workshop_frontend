import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import Image from "next/image";
import EventPagination from "./eventPagination";

export default function AllEvents() {
  const events = new Array(4).fill(1);
  return (
    <>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className=" relative rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    alt="Event Image"
                    className="w-full h-48 object-cover hover:scale-[1.04] duration-300 transition-all"
                    height="200"
                    src="/eventImage.png"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="absolute top-2 left-2 bg-gray-900 text-white px-2 py-1 rounded-lg text-xs font-medium">
                    #Art
                  </div>
                  <div className="absolute top-2 left-14 bg-gray-900 text-white px-2 py-1 rounded-lg text-xs font-medium">
                    #Remote
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="text-sm text-gray-500">
                      Nov 20, 2023 - kathmandu
                    </div>
                    <h3 className="text-lg font-semibold">
                      Digital Art Showcase
                    </h3>
                    <div className="flex gap-2 py-2">
                      <Button variant="default" className="hover:scale-95 transition-transform">
                        Learn More
                      </Button>
                      <Button variant="secondary" className="hover:scale-95 transition-transform">
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <EventPagination />
      </section>
    </>
  );
}
