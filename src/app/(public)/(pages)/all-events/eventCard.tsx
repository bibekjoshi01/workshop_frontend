import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaShare } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GiDuration } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";

import { formatDate } from "../../utils/formatEventTime";
import { formatNumberOfAttendees } from "../../utils/formatNumber";

export default function EventCard({ event, handleRegister, handleLearnMore }: any) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <Image
        alt="Event Image"
        className="w-full h-60 object-cover hover:scale-[1.04] duration-300 transition-all"
        height="300"
        src={event.thumbnail}
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
        }}
        width="300"
      />

      <div className=" flex items-center gap-1 absolute top-2 right-2 bg-gray-100 dark:text-white px-2 py-1 rounded-lg text-xs font-medium">
        <FiUsers size={15} />
        <span>{formatNumberOfAttendees(event.noOfAttendees)}</span>
      </div>

      <div className="p-4 flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex mb-2 md:gap-8 items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex gap-2 items-center">
              <BsCalendar2Date size={15} />
              <span>{formatDate(event?.eventDatetime)}</span>
            </div>
            <div className="flex gap-2 items-center">
              <GiDuration size={15} />
              <span>{event?.duration}</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{event?.title}</h3>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span>{event?.organizerFullName}</span>
          </div>
        </div>

        <div className="flex items-end gap-2 py-2">
          <Button
            variant="default"
            className="hover:scale-95 transition-transform text-sm font-medium"
            onClick={handleRegister}
          >
            Register
          </Button>
          <Button
            variant="graybg"
            className="hover:scale-95 transition-transform text-sm font-medium"
            onClick={handleLearnMore}
          >
            View Details
          </Button>
          <Button
            variant="secondary"
            className="ml-auto hover:scale-95 rounded-full transition-transform"
          >
            <FaShare />
          </Button>
        </div>
      </div>
    </div>
  );
}
