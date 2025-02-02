import { FunctionComponent, useMemo, useState } from "react";
import WearableConnectionComponent from "../../components/WearableConnectionComponent";
import { Link as LinkIcon } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";
import { useDevices } from "@/hooks/useDevices";
import BlurredContainer from "@/components/BlurredContainer";
import { RotatingLines } from "react-loader-spinner";
type ViewType = "personal" | "shared";

interface WearablesProps {}

const Wearables: FunctionComponent<WearablesProps> = () => {
  const [currentWearableView, setCurrentWearableView] =
    useState<ViewType>("personal");
  const { user, loading } = useAuth();
  const { wearables } = useDevices();
  const sharedWearables = useMemo(() => {
    return wearables.filter((wearable) => wearable.owner !== user?.id);
  }, [wearables, user]);
  const myWearables = useMemo(() => {
    return wearables.filter((wearable) => wearable.owner === user?.id);
  }, [wearables, user]);

  return (
    <>
      <div className="text-white mb-16 md:mb-0">
        {/* Top Section */}
        <ElementTitleHeader
          className="pb-2"
          title="Pulseiras"
          titleAppend={
            <div className="flex gap-2 border rounded-md px-2 items-center text-lg font-medium">
              {wearables.length}
              <LinkIcon className="w-5 h-5" />
            </div>
          }
        />
        <Tabs
          defaultValue={"personal" as ViewType}
          onValueChange={(value) => {
            if (value === "personal" || value === "shared")
              setCurrentWearableView(value);
            else setCurrentWearableView("personal");
          }}
          value={currentWearableView}
          className="pb-2"
        >
          <TabsList className="w-full flex justify-center">
            <TabsTrigger value={"personal" as ViewType}>Minhas</TabsTrigger>
            <TabsTrigger value={"shared" as ViewType}>
              Compartilhados
            </TabsTrigger>
          </TabsList>
        </Tabs>
        {/* Scrollable Content Section */}
        {currentWearableView === "personal" ? (
          <ScrollArea scrollHideDelay={500} className="h-full">
            <div className="grid gap-2 sm:gap-3 grid-cols-1 p-1 sm:grid-cols-1 md:grid-cols-2">
              {loading ? (
                <BlurredContainer title="Carregando...">
                  <div className="flex items-center p-4 gap-4">
                    Aguarde{" "}
                    <RotatingLines
                      ariaLabel="loading-spinner"
                      strokeColor="white"
                      width="24"
                    />
                  </div>
                </BlurredContainer>
              ) : (
                <>
                  {myWearables.map((wearable, index) => (
                    <WearableConnectionComponent
                      wearable={wearable}
                      key={`persona-wearable-${index}`}
                    />
                  ))}
                </>
              )}
            </div>
            <ScrollBar />
          </ScrollArea>
        ) : (
          <ScrollArea scrollHideDelay={500} className="h-full">
            <div className="grid gap-2 sm:gap-3 grid-cols-1 p-1 sm:grid-cols-1 md:grid-cols-2">
              {loading ? (
                <BlurredContainer title="Carregando...">
                  <div className="flex items-center p-4 gap-4">
                    Aguarde{" "}
                    <RotatingLines
                      ariaLabel="loading-spinner"
                      strokeColor="white"
                      width="24"
                    />
                  </div>
                </BlurredContainer>
              ) : (
                <>
                  {sharedWearables.map((wearable, index) => (
                    <WearableConnectionComponent
                      wearable={wearable}
                      key={`wearableShared-${index}`}
                    />
                  ))}
                </>
              )}
            </div>
            <ScrollBar />
          </ScrollArea>
        )}
      </div>
    </>
  );
};

export default Wearables;
