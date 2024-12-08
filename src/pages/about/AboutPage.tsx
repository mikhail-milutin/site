import { Separator } from "@/components/ui/separator";
import AboutFull from "@/modules/AboutFull";
import Achievments from "@/modules/Achievments";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutFullMobile from "@/modules/AboutFullMobile";
import Interesting from "@/modules/Interesting";

export default function AboutPage() {
  return (
    <div className="container lg:my-20 md:my-14 sm:my-10 ssm:my-8 my-6">
      <AboutFull />
      <AboutFullMobile />
      <Separator className="dark my-10" />
      <Tabs defaultValue="достижения" className=" dark">
        <TabsList className="w-full bg-transparent md:mb-10 mb-5">
          <TabsTrigger
            className="w-full text-xl tracking-widest data-[state=active]:bg-transparent data-[state=active]:ring-white ring-2 ring-transparent"
            value="достижения"
          >
            Достижения
          </TabsTrigger>
          <TabsTrigger
            className="w-full text-xl tracking-widest data-[state=active]:bg-transparent data-[state=active]:ring-white ring-2 ring-transparent"
            value="интересное"
          >
            Интересное
          </TabsTrigger>
        </TabsList>
        <TabsContent value="достижения">
          <Achievments />
        </TabsContent>
        <TabsContent value="интересное">
          <Interesting />
        </TabsContent>
      </Tabs>
    </div>
  );
}
