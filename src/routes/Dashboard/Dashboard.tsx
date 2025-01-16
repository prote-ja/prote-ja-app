import { FunctionComponent, useEffect } from "react";
import WearableConnectionComponent from "./WearableConnectionComponent";
import { getAllWearables } from "@/db/wearables";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon, Plus, SatelliteDish } from "lucide-react";
import { Database } from "@/types/database.types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TotemConnectionComponent from "./TotemConnectionComponent";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import { Link } from "react-router";

interface DashboardProps {}

type WearablesType = {
  name: string;
  wearableStatus: Database["public"]["Enums"]["wearable_status"];
  avatarUrl: string;
  batteryLevel: number;
  lastPingTime: Date;
  pedometer: number;
};

const wearables: WearablesType[] = [
  {
    name: "Joana Santa Maria",
    wearableStatus: "inactive",
    avatarUrl:
      "https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "inactive",
    avatarUrl:
      "https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
];

type TotemType = {
  name: string;
  totemStatus: Database["public"]["Enums"]["wearable_status"];
  lastPingTime: Date;
  batteryLevel: number;
  connections: number;
};

const totems: TotemType[] = [
  {
    name: "Sala",
    totemStatus: "active",
    lastPingTime: new Date(),
    batteryLevel: 40,
    connections: 10,
  },
  {
    name: "Cozinha",
    totemStatus: "active",
    lastPingTime: new Date(),
    batteryLevel: 99,
    connections: 7,
  },
  {
    name: "Quarto",
    totemStatus: "inactive",
    lastPingTime: new Date(),
    batteryLevel: 0,
    connections: 2,
  },
  {
    name: "Sala",
    totemStatus: "active",
    lastPingTime: new Date(),
    batteryLevel: 40,
    connections: 10,
  },
  {
    name: "Cozinha",
    totemStatus: "active",
    lastPingTime: new Date(),
    batteryLevel: 99,
    connections: 7,
  },
  {
    name: "Quarto",
    totemStatus: "inactive",
    lastPingTime: new Date(),
    batteryLevel: 0,
    connections: 2,
  },
];

const Dashboard: FunctionComponent<DashboardProps> = () => {
  useEffect(() => {
    getAllWearables();
  }, []);

  return (
    <div className="relative w-full flex flex-col h-[calc(100dvh-4rem)] text-white">
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
        endElement={
          <Link to={"/dashboard/add-wearable"}>
            <Button variant={"secondary"} size={"sm"}>
              Registrar <Plus />
            </Button>
          </Link>
        }
      />

      {/* Scroll indicator */}
      {/* <div className="w-full bg-secondary-foreground h-4 mb-2" /> */}

      {/* Scrollable Content Section */}
      <ScrollArea scrollHideDelay={500}>
        <div className="grid gap-3 w-full max-w-screen-xl grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          {wearables.map((wearable, index) => (
            <div key={index} className="flex justify-center">
              <WearableConnectionComponent
                name={wearable.name}
                wearableStatus={wearable.wearableStatus}
                avatarUrl={wearable.avatarUrl}
                batteryLevel={wearable.batteryLevel}
                lastPingTime={wearable.lastPingTime}
                pedometer={wearable.pedometer}
              />
            </div>
          ))}
        </div>
        <ScrollBar />
      </ScrollArea>

      {/* Bottom Section */}
      <div className="flex flex-col justify-between pt-2">
        <ElementTitleHeader
          className="pb-2"
          title="Totems"
          titleAppend={
            <div className="flex gap-2 border rounded-md items-center text-lg font-medium">
              {totems.length}
              <SatelliteDish className="w-5 h-5" />
            </div>
          }
          endElement={
            <Link to={"/dashboard/add-totem"}>
              <Button variant={"secondary"} size={"sm"}>
                Registrar <Plus />
              </Button>
            </Link>
          }
        />

        <ScrollArea>
          <div className="h-44 flex gap-3 pb-4">
            {totems.map((totem, index) => (
              <div key={index} className="justify-center">
                <TotemConnectionComponent
                  name={totem.name}
                  totemStatus={totem.totemStatus}
                  lastPingTime={totem.lastPingTime}
                  batteryLevel={totem.batteryLevel}
                  connections={totem.connections}
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default Dashboard;
