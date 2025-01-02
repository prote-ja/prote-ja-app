import BlurredContainer from "@/components/BlurredContainer";
import { Database } from "@/types/database.types";
import { BatteryFull, Footprints, Wifi, WifiOff } from "lucide-react";
import { FunctionComponent } from "react";
import WearableIcon from "@/assets/wearable_icon.png";

interface ConnectionComponentProps {
  wearableStatus: Database["public"]["Enums"]["wearable_status"];
  lastPingTime?: Date;
  batteryLevel?: number;
  pedometer?: number;
  avatarUrl?: string;
  name: string;
}

const ConnectionComponent: FunctionComponent<ConnectionComponentProps> = ({
  wearableStatus,
  lastPingTime,
  batteryLevel,
  pedometer,
  avatarUrl,
  name,
}) => {
  const isConnected = wearableStatus === "active";

  return (
    <>
      <BlurredContainer
        title={name}
        titleBackground
        border
        className="w-full"
        preIcon={
          <img src={WearableIcon} alt="wearable-icon" className="w-8 h-8" />
        }
        clickable
        postIcon={
          <div className="flex items-center gap-1">
            <BatteryFull className="text-white" />
            <p className="text-white font-bold">{batteryLevel}%</p>
          </div>
        }
      >
        <div className="flex p-4 gap-4">
          <img
            src={avatarUrl}
            className="w-20 h-20 rounded-md object-cover backdrop-blur bg-white aspect-square"
            alt={name + " avatar"}
          />

          <BlurredContainer className="w-full">
            <div className="flex w-full h-full justify-between items-center px-2">
              <div className="flex items-center gap-2">
                {isConnected ? (
                  <Wifi className="w-8 h-8 text-positive" />
                ) : (
                  <WifiOff className="w-8 h-8 text-destructive" />
                )}
                <div>
                  <p className="text-xl font-semibold text-white">
                    {isConnected ? "Conectado" : "Desconectado"}
                  </p>
                  {lastPingTime && (
                    <p className="text-sm text-muted">
                      Ultimo ping: {lastPingTime.toLocaleTimeString()}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1 text-white">
                <Footprints />
                <p className=" font-semibold">{pedometer}</p>
              </div>
            </div>
          </BlurredContainer>
        </div>
      </BlurredContainer>
    </>
  );
};

export default ConnectionComponent;
