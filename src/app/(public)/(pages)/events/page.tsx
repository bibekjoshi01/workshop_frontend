import EventPagination from "./eventPagination";
import EventsHeader from "./eventsHeader";
import EventCard from "./eventCard";
import AllEventsSkeleton from "../../components/skeleton/all-events-skeleton";
export default function AllEvents() {
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
        <section className="w-full py-2 md:py-6">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {evenData.map((event) => (
                  <EventCard key={event?.uuid} event={event} />
                ))}
              </div>
            </div>
          </div>
          <EventPagination />
        </section>
      </>
  
  );
}
