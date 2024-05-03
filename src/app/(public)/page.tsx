// import { Button } from "@/components/ui/button";
import React from "react";
import Hero from "./components/hero";
import MeetUps from "./components/meetup";
import HowItWorksCards from "./components/howItWorks";
import ComingSoon from "./components/comingSoon";
import CookieModal from "./components/cookieModal";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
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
