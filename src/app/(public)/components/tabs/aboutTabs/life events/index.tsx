import { TabsContent } from "@/components/ui/tabs";
import LifeEventsCard from "./LifeEventsCard";

export default function LifeEvents() {
  return (
    <TabsContent className="pt-0 mt-0" value="life-events">
      <LifeEventsCard />
    </TabsContent>
  );
}
