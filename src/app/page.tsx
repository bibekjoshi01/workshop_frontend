import { Button } from "@/components/ui/button";
import Hero from "@/components/ui/hero";
import Header from "@/components/ui/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
      {/* <Button size={"lg"} variant={"outline"}>
        Button
      </Button> */}
    </div>
  );
}
