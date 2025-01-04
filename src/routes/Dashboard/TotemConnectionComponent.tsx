import BlurredContainer from "@/components/BlurredContainer";
import { Database } from "@/types/database.types";
import { Link, Wifi, WifiOff } from "lucide-react";
import { FunctionComponent } from "react";
import TotemIcon from "@/assets/totem_icon.png";

interface TotemConnectionComponentProps {
  totemStatus: Database["public"]["Enums"]["wearable_status"];
  lastPingTime: Date;
  batteryLevel: number;
  connections: number; // number of connections to the totem in the last 10 minutes
  name: string;
}

const TotemConnectionComponent: FunctionComponent<
  TotemConnectionComponentProps
> = ({ totemStatus, lastPingTime, batteryLevel, connections, name }) => {
  const isConnected = totemStatus === "active";

  return (
    <BlurredContainer
      title={name}
      titleBackground
      border
      className="h-full w-40"
      preIcon={<img src={TotemIcon} alt="wearable-icon" className="w-8 h-8" />}
      clickable
    >
      {batteryLevel}
      <div className="flex w-full h-full justify-between items-center px-2">
        <div className="flex items-center gap-2">
          {isConnected ? (
            <Wifi className="w-8 h-8 text-positive" />
          ) : (
            <WifiOff className="w-8 h-8 text-destructive" />
          )}
          <div>
            <p className="font-medium text-white">
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
          <Link />
          <p className="font-medium">{connections}</p>
        </div>
      </div>
    </BlurredContainer>
  );
};

export default TotemConnectionComponent;
