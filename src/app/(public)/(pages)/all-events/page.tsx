"use client";
import { useState } from "react";
import ConfirmRegistration from "../../components/modal/confirmRegistration";
import EventPagination from "./eventPagination";
import EventsHeader from "./eventsHeader";
import EventCard from "./eventCard";
import { useRouter } from "next/navigation";

export default function AllEvents() {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const router = useRouter();

  const handleRegister = () => {
    setOpenRegisterModal(true);
  };
  const handleLearnMore = (event: eventDataTypes) => {
    router.push("/all-events/" + event.slug)
  };

  const evenData: eventDataTypes[] = [
    {
      uuid: "3fa85f64-5717-4262-b3fc-2c963f66afa6",
      slug: "bI5yNZtyLvaJ3fLUWAVXmt__ADAxhTULSH2_l",
      thumbnail: "/eventImage.png",
      organizerFullName: "Art Club",
      title:
        "Test Based Nutrition Master Class (Multiple dates and times available)",
      categoryName: "art",
      eventType: "remote",
      eventDatetime: "Sat, Jun 8, 2024 10:00 AM",
      location: "Kathmandu",
      duration: "2 hours",
      noOfAttendees: "100",
    },
    {
      uuid: "3fa85f64-5717-45162-b3fc-2c963f66afa6",
      slug: "bI5yNZtyLvaJ3fLUWAVXmt__ADAxhTULSH2_l",
      thumbnail: "/eventImage.png",
      organizerFullName: "Manish Joshi",
      title: "Digital Art Showcase",
      categoryName: "art",
      eventType: "remote",
      eventDatetime: "Sat, Jun 8, 2024 10:00 AM",
      location: "Kathmandu",
      duration: "2 hours",
      noOfAttendees: "100",
    },
    {
      uuid: "3fa85f64-5717-4562-b3dc-2c963f66afa6",
      slug: "bI5yNZtyLvaJ3fLUWAVXmt__ADAxhTULSH2_l",
      thumbnail: "/eventImage.png",
      organizerFullName: "Art Club",
      title: "Digital Art Showcase",
      categoryName: "art",
      eventType: "remote",
      eventDatetime: "Sat, Jun 8, 2024 10:00 AM",
      location: "Kathmandu",
      duration: "2 hours",
      noOfAttendees: "100",
    },
    {
      uuid: "3fa85f64-5717-4562-b32fc-2c963f66afa6",
      slug: "bI5yNZtyLvaJ3fLUWAVXmt__ADAxhTULSH2_l",
      thumbnail: "/eventImage.png",
      organizerFullName: "Adity Sindey",
      title: "Digital Art Showcase",
      categoryName: "art",
      eventType: "remote",
      eventDatetime: "Sat, Jun 8, 2024 10:00 AM",
      location: "Kathmandu",
      duration: "2 hours",
      noOfAttendees: "100",
    },
  ];

  return (
    <>
      <EventsHeader />
      <ConfirmRegistration
        open={openRegisterModal}
        close={() => setOpenRegisterModal(false)}
      />
      <section className="w-full py-2 md:py-6">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {evenData.map((event) => (
                <EventCard
                  key={event?.uuid}
                  event={event}
                  handleRegister={handleRegister}
                  handleLearnMore={() => handleLearnMore(event)}
                />
              ))}
            </div>
          </div>
        </div>
        <EventPagination />
      </section>
    </>
  );
}
