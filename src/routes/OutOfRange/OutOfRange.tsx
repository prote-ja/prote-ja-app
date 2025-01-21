import { FunctionComponent, useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { getMyWearables } from "@/db/wearables";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import { Database } from "@/types/database.types";
import { TriangleAlert, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

import WearableConnectionComponent from "../Dashboard/WearableConnectionComponent";
import TotemConnectionComponent from "../Dashboard/TotemConnectionComponent";
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
];

interface OutOfRangeProps {}

const OutOfRange: FunctionComponent<OutOfRangeProps> = () => {
  useEffect(() => {
    getMyWearables();
  }, []);
  return (
    <div className="relative w-full max-w-screen-xl flex flex-col h-[calc(100dvh-4rem)] mx-auto text-white ">
      <AnimatedBackground isBlack={true} />
      <ElementTitleHeader
        className="text-white z-10 px-2 mb-6 mt-6"
        title="Fora de Área"
        titleAppend={
          <TriangleAlert className="stroke-black fill-red-600 animate-blink w-8 h-8" />
        }
      />
      <div className="grid px-2 gap-3 w-full max-w-screen-xl mx-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {wearables.map((wearable, index) => (
          <div key={`wearable-${index}`} className="flex justify-center">
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
      <ElementTitleHeader
        className="text-white z-10 px-2 mt-6"
        title="Localização estimada"
        description={`O totem a seguir não conseguiu localizar o usuário ${wearables[0].name}`}
      />
      <div className="h-44 flex gap-3 pb-4 px-2 mt-6">
        {totems.map((totem, index) => (
          <div key={`totem-${index}`} className="justify-center">
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
      <hr className=" z-10 " />
      <ElementTitleHeader
        className="text-white z-10 px-2 mt-6"
        title="Contato de Emergência"
        description="Dique rápido para o contato de emergência cadastrado"
      />

      <Button
        variant={"secondary"}
        className="px-2 w-44 h-auto z-10 mt-6 mx-auto sm:mx-0 sm:w-64 flex justify-center items-center"
        onClick={() => (window.location.href = "tel:+1234567890")}
      >
        <PhoneCall />
        <span className="sm:block z-10">Discar Agora</span>
      </Button>
    </div>
  );
};

export default OutOfRange;
