import ContactInfo from "./contact info";
import LifeEvents from "./life events";
import Moredetails from "./more details";
import Overview from "./overview";
import PlacesLived from "./places lived";
import WorkAndEducation from "./work and education";

export default function TabsContents() {
  return (
    <div className="bg-white  dark:bg-gray-800 grow-[12] ">
      <ContactInfo />
      <LifeEvents />
      <Moredetails />
      <Overview />
      <PlacesLived />
      <WorkAndEducation />
    </div>
  );
}
