import React from "react";
import Hero from "./components/hero";
import MeetUps from "./components/meetup";
import HowItWorksCards from "./components/howItWorks";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <MeetUps />
      <HowItWorksCards />
    </React.Fragment>
  );
}
