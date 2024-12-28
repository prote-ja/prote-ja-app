import { Wifi, WifiOff } from "lucide-react";
import { FunctionComponent } from "react";
import { Button } from "./ui/button";

interface BlurredContainerProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

const isConnected = true;

const BlurredContainer: FunctionComponent<BlurredContainerProps> = ({
  header,
  children,
}) => {
  return (
    <div className=" p-6 dashboard-item border rounded-lg backdrop-blur bg-background">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white text-shadow">{header}</h2>
        <div
          className={`w-3 h-3 rounded-full ${
            isConnected ? "bg-green-400" : "bg-red-400"
          }`}
        ></div>
      </div>
      <div className="flex items-center space-x-4">
        {isConnected ? (
          <Wifi className="w-8 h-8 text-green-400" />
        ) : (
          <WifiOff className="w-8 h-8 text-red-400" />
        )}
        <div>
          <p className="text-xl font-semibold text-white">
            {isConnected ? "Connected" : "Disconnected"}
          </p>
          {/* {lastPingTime && (
              <p className="text-sm text-white/70">
                Last ping: {lastPingTime.toLocaleTimeString()}
              </p>
            )} */}
        </div>
        <Button color="primary" size="sm">
          asdf
        </Button>
        {children}
      </div>
    </div>
  );
};

export default BlurredContainer;
