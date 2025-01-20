import { FunctionComponent, useEffect, useState } from "react";
import WearableConnectionComponent from "./WearableConnectionComponent";
import { getAllWearables } from "@/db/wearables";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon, Plus, SatelliteDish } from "lucide-react";
import { Database } from "@/types/database.types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TotemConnectionComponent from "./TotemConnectionComponent";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import { Link, useNavigate } from "react-router";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HorizontalDivider from "@/components/HorizontalDivider";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-toastify";
import { updateUser } from "@/db/users";

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
];

const wearablesShared: WearablesType[] = [
  {
    name: "Miramanha Santa Maria",
    wearableStatus: "inactive",
    avatarUrl:
      "https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Miramanha Santa Maria",
    wearableStatus: "active",
    avatarUrl:
      "https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
  {
    name: "Miramanha Santa Maria",
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
const totemsShared: TotemType[] = [
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
];

type ViewType = "personal" | "shared";

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const [currentWearableView, setCurrentWearableView] =
    useState<ViewType>("personal");
  const [currentTotemView, setCurrentTotemView] =
    useState<ViewType>("personal");
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getAllWearables();
  }, []);

  useEffect(() => {
    const checkFirstLogin = async () => {
      if (!user) {
        return;
      }
      if (user.first_login) {
        try {
          const response = await updateUser(user.id, { first_login: false });

          if (response.error) {
            throw new Error(response.error.message);
          }

          console.log("return from edit", response.data[0]);

          console.log("user before set", user);

          setUser(response.data[0]);

          navigate("/first-login", {
            replace: true,
          });
        } catch (error) {
          console.error(error);

          toast.error("Erro ao atualizar status de primeiro login");
        }
      }
    };

    checkFirstLogin();
  }, [user]);

  return (
    <div className="relative w-full flex flex-col min-h-[38rem] h-[calc(100dvh-4.2rem)] md:h-[calc(100dvh-11rem)] md:-my-1 -my-6 text-white pt-3 sm:pt-5 md:pt-0">
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
          <TabsTrigger value={"shared" as ViewType}>Compartilhados</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Scrollable Content Section */}

      {currentWearableView === "personal" ? (
        <ScrollArea scrollHideDelay={500} className="h-full">
          <div className="grid gap-2 sm:gap-3 grid-cols-1 p-1 sm:grid-cols-1 md:grid-cols-2">
            {wearables.map((wearable, index) => (
              <Link
                key={`wearable-${index}`}
                className="flex justify-center"
                to={`/dashboard/wearable/wearable-${index}`}
              >
                <WearableConnectionComponent
                  name={wearable.name}
                  wearableStatus={wearable.wearableStatus}
                  avatarUrl={wearable.avatarUrl}
                  batteryLevel={wearable.batteryLevel}
                  lastPingTime={wearable.lastPingTime}
                  pedometer={wearable.pedometer}
                />
              </Link>
            ))}
          </div>
          <ScrollBar />
        </ScrollArea>
      ) : (
        <ScrollArea scrollHideDelay={500} className="h-full">
          <div className="grid gap-2 sm:gap-3 grid-cols-1 p-1 sm:grid-cols-1 md:grid-cols-2">
            {wearablesShared.map((wearable, index) => (
              <div
                key={`wearableShared-${index}`}
                className="flex justify-center"
                onClick={() =>
                  navigate(`/dashboard/wearable/wearableShared-${index}`)
                }
              >
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
      )}

      <HorizontalDivider className="my-3" />

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
          endElement={
            <Link to={"/dashboard/add-totem"}>
              <Button variant={"secondary"} size={"sm"}>
                Registrar <Plus />
              </Button>
            </Link>
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
            <div className="h-40 sm:h-44 flex gap-2 sm:gap-3 p-1 pb-4">
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
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        ) : (
          <ScrollArea>
            <div className="h-40 sm:h-44 flex gap-2 sm:gap-3 p-1 pb-4">
              {totemsShared.map((totem, index) => (
                <div key={`totemShared-${index}`} className="justify-center">
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
        )}
      </div>
    </div>
  );
};

export default Dashboard;
