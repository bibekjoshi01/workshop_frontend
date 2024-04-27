import { Button } from "@/components/ui/button";
import SignUp from "./(auth)/signup/page";
import Hero from "@/app/appComponents/hero";
import Header from "@/app/appComponents/header";
import Footer from "@/components/footer";
import EventsHeader from "@/app/appComponents/events";
import AllEvents from "@/app/appComponents/allEvents";
import HowItWorksCards from "./appComponents/howItWorksCards";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <EventsHeader />
      <AllEvents />
      <HowItWorksCards />
      <Footer />

      {/* <SignUp /> */}
      {/* <Button size={"lg"} variant={"outline"} >
        Button
      </Button> */}
    </div>
  );
}
