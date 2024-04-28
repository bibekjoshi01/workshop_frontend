import React from "react";
import Hero from "./components/hero";
import EventsHeader from "./components/events";
import AllEvents from "./components/allEvents";
import HowItWorksCards from "./components/howItWorksCards";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <EventsHeader />
      <AllEvents />
      <HowItWorksCards />
    </React.Fragment>
  );
}
