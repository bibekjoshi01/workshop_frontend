import Post from "./posts";
import About from "./about";
import Friends from "./friends";
import Skills from "./skills";
import Achievements from "./achievements";

export default function TabsContents() {
  return (
    <div className="bg-gray-100 py-6 px-2 dark:bg-gray-800 ">
      <Post />
      <About />
      <Friends />
      <Skills />
      <Achievements />
    </div>
  );
}
