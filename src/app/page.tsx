// import { Button } from "@/components/ui/button";
// import SignUp from "./(auth)/signup/page";
import React from "react";
import Hero from "./(public)/components/hero";
import Events from "./(public)/components/events";
import MeetUps from "./(public)/components/meetup";
import HowItWorksCards from "./(public)/components/howItWorks";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Events />
      <MeetUps />
      <HowItWorksCards />
      {/* <SignUp /> */}
      {/* <Button size={"lg"} variant={"outline"} >
        Button
      </Button> */}
    </React.Fragment>
  );
}
