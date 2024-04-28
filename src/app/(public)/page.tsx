// import { Button } from "@/components/ui/button";
import React from "react";
import Hero from "./components/hero";
import Events from "./components/events";
import MeetUps from "./components/meetup";
import HowItWorksCards from "./components/howItWorks";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Events />
      <MeetUps />
      <HowItWorksCards />

      {/* <CookieModal /> */}
      {/* <Button size={"lg"} variant={"outline"} >
        Button
      </Button> */}
    </React.Fragment>
  );
}