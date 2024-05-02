import Intro from "@/app/(public)/(pages)/MyProfile/posts/introCard";
import { TabsContent } from "@/components/ui/tabs";


export default function Overview() {
  return (
    <TabsContent className="pt-0 mt-0 " value="overview">
      <Intro insideOverView={true} />
    </TabsContent>
  );
}
