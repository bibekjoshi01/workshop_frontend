// import { Button } from "@/components/ui/button";
import React from "react";
import Hero from "./components/hero";
import Events from "./components/events";
import MeetUps from "./components/meetup";
import HowItWorksCards from "./components/howItWorks";
import ComingSoon from "./components/comingSoon";
import CookieModal from "./components/cookieModal";
import AddEvent from "./components/addEvent/addEvent";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <AddEvent />
      <Events />
      <MeetUps />
      <HowItWorksCards />
      <ComingSoon />

      {/* <CookieModal /> */}
      {/* <Button size={"lg"} variant={"outline"} >
        Button
      </Button> */}
    </React.Fragment>
  );
}
