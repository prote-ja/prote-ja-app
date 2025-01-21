import { FunctionComponent, useEffect, useMemo, useState } from "react";
import WearableConnectionComponent from "./WearableConnectionComponent";
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
import { useDevices } from "@/hooks/useDevices";
import BlurredContainer from "@/components/BlurredContainer";
import { RotatingLines } from "react-loader-spinner";

interface DashboardProps {}

type ViewType = "personal" | "shared";

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const [currentWearableView, setCurrentWearableView] =
    useState<ViewType>("personal");
  const [currentTotemView, setCurrentTotemView] =
    useState<ViewType>("personal");
  const { user, loading, setUser } = useAuth();
  const navigate = useNavigate();

  const { wearables, totems } = useDevices();

  const sharedWearables = useMemo(() => {
    return wearables.filter((wearable) => wearable.owner !== user?.id);
  }, [wearables, user]);
  const myWearables = useMemo(() => {
    return wearables.filter((wearable) => wearable.owner === user?.id);
  }, [wearables, user]);

  const sharedTotems = useMemo(() => {
    return totems.filter((totem) => totem.owner !== user?.id);
  }, [totems, user]);
  const myTotems = useMemo(() => {
    return totems.filter((totem) => totem.owner === user?.id);
  }, [totems, user]);

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
                  <Link
                    key={`wearable-${index}`}
                    className="flex justify-center"
                    to={`/dashboard/wearable/wearable-${index}`}
                  >
                    <WearableConnectionComponent wearable={wearable} />
                  </Link>
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
                  <Link
                    key={`wearableShared-${index}`}
                    className="flex justify-center"
                    to={`/dashboard/wearable/wearable-${index}`}
                  >
                    <WearableConnectionComponent wearable={wearable} />
                  </Link>
                ))}
              </>
            )}
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
              {myTotems.map((totem, index) => (
                <div key={`totem-${index}`} className="justify-center">
                  <TotemConnectionComponent totem={totem} />
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        ) : (
          <ScrollArea>
            <div className="h-40 sm:h-44 flex gap-2 sm:gap-3 p-1 pb-4">
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
  );
};

export default Dashboard;
