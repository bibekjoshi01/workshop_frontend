// import { Button } from "@/components/ui/button";
// import SignUp from "./(auth)/signup/page";
import Hero from "./(public)/components/hero";
import Events from "./(public)/components/events";
import MeetUps from "./(public)/components/meetup";
import HowItWorksCards from "./(public)/components/howItWorks";

export default function Home() {
  return (
    <div>
      <Hero />
      <Events />
      <MeetUps/>
      <HowItWorksCards />

      {/* <SignUp /> */}
      {/* <Button size={"lg"} variant={"outline"} >
        Button
      </Button> */}
    </div>
  );
}
