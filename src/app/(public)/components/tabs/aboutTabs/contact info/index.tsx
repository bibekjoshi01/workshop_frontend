import { TabsContent } from "@/components/ui/tabs";
import ConatctInfoCard from "./ContactInfoCard";

export default function ContactInfo() {
  return (
    <TabsContent className="pt-0 mt-0" value="contact-info">
      <ConatctInfoCard />
    </TabsContent>
  );
}
