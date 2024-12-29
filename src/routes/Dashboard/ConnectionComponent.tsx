import BlurredContainer from "@/components/BlurredContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wifi, WifiOff } from "lucide-react";
import { FunctionComponent } from "react";

interface ConnectionComponentProps {}
const isConnected = true;

const ConnectionComponent: FunctionComponent<ConnectionComponentProps> = () => {
  return (
    <>
      <BlurredContainer title="Conexão">
        <div>
          <div
            className={`w-3 h-3 rounded-full ${
              isConnected ? "bg-positive" : "bg-destructive"
            }`}
          ></div>
          {isConnected ? (
            <Wifi className="w-8 h-8 text-positive" />
          ) : (
            <WifiOff className="w-8 h-8 text-destructive" />
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
          <Button size="sm" color="destructive">
            asdf
          </Button>
          <Button variant={"outline"}>test</Button>
          <Input placeholder="test" />
        </div>
      </BlurredContainer>
    </>
  );
};

export default ConnectionComponent;
