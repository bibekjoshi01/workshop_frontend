import { TabsContent } from "@/components/ui/tabs";
import WorkAndEducationCard from "./workAndEducationCard";
import Intro from "../../profileTabs/posts/itroCard";

export default function WorkAndEducation() {
  return (
    <TabsContent className="pt-0 mt-0" value="work-and-education">
      <WorkAndEducationCard />
    </TabsContent>
  );
}
