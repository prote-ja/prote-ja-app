import BlurredContainer from "@/components/BlurredContainer";
import { Database } from "@/types/database.types";
import { BatteryFull, LinkIcon, Wifi, WifiOff } from "lucide-react";
import { FunctionComponent } from "react";
import TotemIcon from "@/assets/totem_icon.png";
import { Link } from "react-router";

interface TotemConnectionComponentProps {
  totem: Database["public"]["Views"]["totems_view"]["Row"];
}

const TotemConnectionComponent: FunctionComponent<
  TotemConnectionComponentProps
> = ({ totem }) => {
  const isConnected = totem.data ?? false;

  return (
    <Link to={`/totems/edit/${totem.id}`}>
      <BlurredContainer
        title={totem.name ?? "Sem nome"}
        titleBackground
        border
        className="h-full w-full relative hover:scale-[1.02] transition-transform"
        preIcon={
          <img
            src={TotemIcon}
            alt="totem-icon"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        }
        clickable
      >
        <div className="flex flex-col w-full justify-between p-2">
          {/* Connection Status */}
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start">
            <div className="shrink-0">
              {isConnected ? (
                <Wifi className="w-6 h-6 sm:w-8 sm:h-8 text-positive" />
              ) : (
                <WifiOff className="w-6 h-6 sm:w-8 sm:h-8 text-destructive" />
              )}
            </div>

            <div className="text-center sm:text-left space-y-1">
              <p className="text-sm sm:text-base font-medium text-white">
                {isConnected ? "Conectado" : "Desconectado"}
              </p>
              {totem.timestamp && (
                <p className="text-xs sm:text-sm text-muted truncate">
                  {new Date(totem.timestamp).toLocaleTimeString()}
                </p>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-2 sm:mt-4">
            {/* Linked Devices */}
            <div className="flex items-center gap-1 text-sm sm:text-base">
              <LinkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{2}</span>
            </div>

            {/* Battery Status */}
            <div className="flex items-center gap-1 text-sm sm:text-base">
              <BatteryFull className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{}%</span>
            </div>
          </div>
        </div>
      </BlurredContainer>
    </Link>
  );
};

export default TotemConnectionComponent;
