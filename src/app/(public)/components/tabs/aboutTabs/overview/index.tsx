import { TabsContent } from "@/components/ui/tabs";
import Intro from "../../profileTabs/posts/itroCard";

export default function Overview() {
  return (
    <TabsContent className="pt-0 mt-0 " value="overview">
      <Intro insideOverView={true} />
    </TabsContent>
  );
}
