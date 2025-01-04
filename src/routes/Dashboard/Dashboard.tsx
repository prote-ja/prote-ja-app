import { FunctionComponent, useEffect } from "react";
import WearableConnectionComponent from "./WearableConnectionComponent";
import { getAllWearables } from "@/db/wearables";
import { Button } from "@/components/ui/button";
import { Link, Plus, SatelliteDish } from "lucide-react";
import { Database } from "@/types/database.types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TotemConnectionComponent from "./TotemConnectionComponent";

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
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "inactive",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Joana Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    <div className="relative flex flex-col h-[calc(100vh-4rem)] text-white">
      {/* Top Section */}
      <div className="flex items-center justify-between p-2">
        <div className="flex gap-3 items-center">
          <h2 className="text-3xl font-semibold">Pulseiras</h2>
          <div className="flex gap-2 border rounded-md px-2 items-center text-lg font-medium">
            {wearables.length}
            <Link className="w-5 h-5" />
          </div>
        </div>
        <Button variant={"secondary"} size={"sm"}>
          Adicionar <Plus className="w-5 h-5" />
        </Button>
      </div>

      {/* Scroll indicator */}
      {/* <div className="w-full bg-secondary-foreground h-4 mb-2" /> */}

      {/* Scrollable Content Section */}
      <ScrollArea className="px-2">
        <div className="grid gap-3 w-full max-w-screen-2xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
      <div className="flex flex-col justify-between p-2 pb-0">
        <div className="flex items-center justify-between pb-2">
          <div className="flex gap-3 items-center">
            <h2 className="text-3xl font-semibold">Totems</h2>
            <div className="flex gap-2 border rounded-md px-2 items-center text-lg font-medium">
              {totems.length}
              <SatelliteDish className="w-5 h-5" />
            </div>
          </div>
          <Button variant={"secondary"} size={"sm"}>
            Adicionar <Plus className="w-5 h-5" />
          </Button>
        </div>
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
