"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaShare } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GiDuration } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";
import { useRouter } from "next/navigation";

import { formatDate } from "../../utils/formatEventTime";
import { formatNumberOfAttendees } from "../../utils/formatNumber";


export default function EventCard({ event }: { event: eventDataTypes }) {
  const router = useRouter();

  const handleLearnMore = (event: eventDataTypes) => {
    router.push("/all-events/" + event.slug);
  };
  return (
    <div className="relative rounded-xl overflow-hidden border shadow-sm">
      <div className="h-60 overflow-hidden">
        <Image
          alt="Event Image"
          className="w-full h-60 object-cover hover:scale-[1.06] duration-300 transition-all "
          height="300"
          src={event.thumbnail}
          style={{
            aspectRatio: "300/200",
            objectFit: "cover",
          }}
          width="300"
        />
      </div>

      <div className=" flex items-center gap-1 absolute top-3 right-2 bg-gray-100 dark:text-white px-2 py-1 rounded-lg text-xs font-medium">
        <FiUsers size={15} />
        <span>{formatNumberOfAttendees(parseInt(event.noOfAttendees))}</span>
      </div>

      <div className="p-4 flex flex-col justify-between">
        <div className="flex flex-col my-2">
          <div className="flex mb-2 md:gap-8 items-center justify-between px-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex gap-2 items-center">
              <BsCalendar2Date size={15} />
              <span>{formatDate(event?.eventDatetime)}</span>
            </div>
            <div className="flex gap-2 items-center">
              <GiDuration size={15} />
              <span>{event?.duration}</span>
            </div>
          </div>
          <div className="mt-2 px-2 mb-1 ">
            <h3
              className="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis
            w-full  hover:text-blue-800 hover:underline cursor-pointer transition-colors "
              onClick={() => handleLearnMore(event)}
            >
              {event?.title}
            </h3>
          </div>
          <div className="text-sm px-2 text-gray-500 dark:text-gray-400">
            <span
              className="whitespace-nowrap overflow-hidden text-ellipsis
            w-full font-medium"
            >
              {event?.organizerFullName}
            </span>
          </div>
        </div>

        {/* <div className="flex items-end gap-2 py-2">
          <Button
            variant="default"
            className="hover:scale-95 transition-transform text-sm font-medium"
            onClick={handleRegister}
          >
            Register
          </Button>
          <Button
            variant="secondary"
            className=" w-full mt-4 hover:scale-[0.98] py-6 transition-transform text-sm font-medium"
            onClick={handleLearnMore}
          >
            View Details
          </Button>
          <Button
            variant="secondary"
            className="ml-auto hover:scale-95 p-6 rounded-full transition-transform"
          >
            <FaShare />
          </Button>
        </div> */}
      </div>
    </div>
  );
}
