import { FunctionComponent, useMemo, useState } from "react";
import { SatelliteDish } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";
import { useDevices } from "@/hooks/useDevices";
import BottomNavBar from "@/components/BottomNavBar";
import TotemConnectionComponent from "./TotemConnectionComponent";

type ViewType = "personal" | "shared";

interface TotemsProps {}

const Totems: FunctionComponent<TotemsProps> = () => {
  const [currentTotemView, setCurrentTotemView] =
    useState<ViewType>("personal");
  const { user } = useAuth();
  const { totems } = useDevices();

  const sharedTotems = useMemo(() => {
    const filtered = totems.filter((totem) => totem.owner !== user?.id);
    const repeated = Array.from({ length: 32 }, () => filtered).flat();
    return repeated;
  }, [totems, user]);

  const myTotems = useMemo(() => {
    const filtered = totems.filter((totem) => totem.owner === user?.id);
    const repeated = Array.from({ length: 32 }, () => filtered).flat();
    return repeated;
  }, [totems, user]);

  return (
    <>
      <div className="text-white mb-16 md:mb-0">
        {/* Bottom Section */}
        <div className="flex flex-col justify-between">
          <ElementTitleHeader
            className="pb-2"
            title="Totems"
            titleAppend={
              <div className="flex gap-2 border rounded-md px-2 items-center text-lg font-medium">
                {totems.length}
                <SatelliteDish className="w-5 h-5" />
              </div>
            }
          />

          <Tabs
            defaultValue={"personal" as ViewType}
            onValueChange={(value) => {
              if (value === "personal" || value === "shared")
                setCurrentTotemView(value);
              else setCurrentTotemView("personal");
            }}
            value={currentTotemView}
            className="pb-2"
          >
            <TabsList className="w-full flex justify-center">
              <TabsTrigger value={"personal" as ViewType}>Meus</TabsTrigger>
              <TabsTrigger value={"shared" as ViewType}>
                Compartilhados
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {currentTotemView === "personal" ? (
            <ScrollArea>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 p-1 pb-4">
                {myTotems.map((totem, index) => (
                  <div key={`totem-${index}`} className="justify-center">
                    <TotemConnectionComponent totem={totem} />
                  </div>
                ))}
              </div>
              <ScrollBar />
            </ScrollArea>
          ) : (
            <ScrollArea>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 p-1 pb-4">
                {sharedTotems.map((totem, index) => (
                  <div key={`totemShared-${index}`} className="justify-center">
                    <TotemConnectionComponent totem={totem} />
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          )}
        </div>
      </div>
      <BottomNavBar />
    </>
  );
};

export default Totems;
