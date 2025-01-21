import BlurredContainer from "@/components/BlurredContainer";
import { Database } from "@/types/database.types";
import { BatteryFull, Link, Wifi, WifiOff } from "lucide-react";
import { FunctionComponent } from "react";
import TotemIcon from "@/assets/totem_icon.png";

interface TotemConnectionComponentProps {
  totem: Database["public"]["Views"]["totems_view"]["Row"];
}

const TotemConnectionComponent: FunctionComponent<
  TotemConnectionComponentProps
> = ({ totem }) => {
  const isConnected = totem.data ?? false;

  return (
    <BlurredContainer
      title={totem.name ?? "Sem nome"}
      titleBackground
      border
      className="h-full w-40 relative"
      preIcon={<img src={TotemIcon} alt="wearable-icon" className="w-8 h-8" />}
      clickable
    >
      <div className="flex flex-col w-full items-center px-2">
        {/* Connection status */}
        <div className="flex items-center gap-2 pt-2">
          {isConnected ? (
            <Wifi className="w-8 h-8 text-positive" />
          ) : (
            <WifiOff className="w-8 h-8 text-destructive" />
          )}
          <div>
            <p className="font-medium text-white">
              {isConnected ? "Conectado" : "Desconectado"}
            </p>
            {totem.timestamp && (
              <p className="text-sm text-muted">
                Ping: {new Date(totem.timestamp).toLocaleTimeString()}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between w-full px-2 gap-1 h-12 text-white absolute bottom-0">
          {/* Linked devices */}
          <div className="flex items-center gap-1">
            <Link size={18} />
            {/*TODO implement linked devices*/}
            {2}
          </div>

          <div className="flex items-center gap-1">
            <BatteryFull />
            <p className="text-white font-medium">{}%</p>
          </div>
        </div>
      </div>
    </BlurredContainer>
  );
};

export default TotemConnectionComponent;
