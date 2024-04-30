"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import EventPagination from "./eventPagination";

import { useState } from "react";
import ConfirmRegistration from "../modal/confirmRegistration";

export default function AllEvents() {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const events = new Array(4).fill(1);
  const handleRegister = () => {
    setOpenRegisterModal(true);
  };
  return (
    <>
      <ConfirmRegistration
        open={openRegisterModal}
        close={() => setOpenRegisterModal(false)}
      />
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
                  <div className="absolute top-2 left-2 bg-gray-100 dark:text-white px-2 py-1 rounded-lg text-xs font-medium">
                    #Art
                  </div>
                  <div className="absolute top-2 left-14 bg-gray-100 dark:text-white px-2 py-1 rounded-lg text-xs font-medium">
                    #Remote
                  </div>
                  <div className=" flex items-center absolute top-2 right-2 bg-gray-100 dark:text-white px-2 py-1 rounded-lg text-xs font-medium">
                    <UsersIcon className="h-4 w-4" />
                    <span>100</span>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className=" mt-1 mb-3 flex items-center justify-between space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4" />
                        <span>Feb 10, 2023</span>
                      </div>
                      <div className="flex items-center">
                        <LocateIcon className="h-4 w-4" />
                        <span>Kathmandu </span> {/* OR Online */}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold">
                      Digital Art Showcase
                    </h3>
                    <div className="flex gap-2 py-2">
                      <Button
                        variant="default"
                        className="hover:scale-95 transition-transform"
                      >
                        Learn More
                      </Button>
                      <Button
                        variant="secondary"
                        className="hover:scale-95 transition-transform"
                        onClick={handleRegister}
                      >
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
