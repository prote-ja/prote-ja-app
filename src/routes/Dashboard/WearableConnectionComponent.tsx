import BlurredContainer from "@/components/BlurredContainer";
import { Database } from "@/types/database.types";
import { BatteryFull, Footprints, Wifi, WifiOff } from "lucide-react";
import { FunctionComponent } from "react";
import WearableIcon from "@/assets/wearable_icon.png";
import { getImageUrl } from "@/db/storage";
import { getInitials } from "@/lib/helpers";
import { Link } from "react-router";

interface WearableConnectionComponentProps {
  wearable: Database["public"]["Views"]["wearables_view"]["Row"];
}

const WearableConnectionComponent: FunctionComponent<
  WearableConnectionComponentProps
> = ({ wearable }) => {
  const isConnected = wearable.status === "active";

  return (
    <Link to={`/dashboard/wearable/${wearable.id}`}>
      <BlurredContainer
        title={wearable.name ?? "Sem nome"}
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
            {/* <p className="text-white font-medium">{batteryLevel}%</p> */}
          </div>
        }
      >
        <div className="flex p-2 sm:p-4 md:p-2 gap-2 sm:gap-4 md:gap-2">
          {wearable.avatar_url ? (
            <img
              src={getImageUrl(wearable.avatar_url).data.publicUrl}
              className="w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 rounded-md object-cover backdrop-blur bg-white aspect-square"
              alt={name + " avatar"}
            />
          ) : (
            <div className="w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 rounded-md border-2 aspect-square">
              <div className="flex justify-center items-center h-full text-white">
                <p className="text-3xl font-semibold ">
                  {getInitials(
                    wearable.name ? wearable.name : "Sem nome"
                  )?.slice(0, 2)}
                </p>
              </div>
            </div>
          )}

          <BlurredContainer className="w-full">
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
                  {wearable.timestamp && (
                    <p className="text-sm text-muted">
                      Ultimo ping:{" "}
                      {new Date(wearable.timestamp).toLocaleTimeString()}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1 text-white">
                <Footprints />
                {/* <p className=" font-medium">{pedometer}</p> */}
              </div>
            </div>
          </BlurredContainer>
        </div>
      </BlurredContainer>
    </Link>
  );
};

export default WearableConnectionComponent;
