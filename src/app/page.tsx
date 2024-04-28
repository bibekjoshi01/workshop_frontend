// import { Button } from "@/components/ui/button";
// import SignUp from "./(auth)/signup/page";
import Header from "@/app/appComponents/header";
import Hero from "@/app/appComponents/hero";
import Events from "./appComponents/events";
import MeetUps from "./appComponents/meetup";
import HowItWorksCards from "./appComponents/howItWorks";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Events />
      <MeetUps/>
      <HowItWorksCards />
      <Footer />

      {/* <SignUp /> */}
      {/* <Button size={"lg"} variant={"outline"} >
        Button
      </Button> */}
    </div>
  );
}
