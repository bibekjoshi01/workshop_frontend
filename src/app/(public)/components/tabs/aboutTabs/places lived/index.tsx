import { TabsContent } from "@/components/ui/tabs";
import PlacesLivedCard from "./placesLivedCard";

export default function PlacesLived() {
  return (
    <TabsContent className="pt-0 mt-0" value="places-lived">
      <PlacesLivedCard />
    </TabsContent>
  );
}
