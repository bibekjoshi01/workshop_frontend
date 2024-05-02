import { TabsContent } from "@/components/ui/tabs";
import PostCard from "./postCard";
import Intro from "./itroCard";

export default function Post() {
  return (
    <TabsContent
      className="pt-8 flex flex-col md:flex-row items-center md:items-start gap-8 "
      value="posts"
    >
      <div className="grow-[3] flex gap-8 flex-col mb-16">
        <Intro />
        {/* FIXME STICKY NOT WORKING   */}
       <div className="sticky top-0">
       <Intro />
       </div>
       
      </div>
      <div className="grow-[5] flex gap-8 flex-col mb-16 ">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </TabsContent>
  );
}