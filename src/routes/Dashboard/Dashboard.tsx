import { FunctionComponent, useEffect } from "react";
import WearableConnectionComponent from "./WearableConnectionComponent";
import { getAllWearables } from "@/db/wearables";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  useEffect(() => {
    getAllWearables();
  }, []);

  return (
    <>
      <div className="p-2 flex justify-center items-center">
        <div className="grid gap-4 w-full max-w-screen-2xl grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex justify-center">
            <WearableConnectionComponent
              name="Joana Santa Maria"
              wearableStatus="active"
              avatarUrl="https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              batteryLevel={40}
              lastPingTime={new Date()}
              pedometer={23827}
            />
          </div>
          <div className="flex justify-center">
            <WearableConnectionComponent
              name="Joana Santa Maria"
              wearableStatus="active"
              avatarUrl="https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              batteryLevel={40}
              lastPingTime={new Date()}
              pedometer={23827}
            />
          </div>
          <div className="flex justify-center">
            <WearableConnectionComponent
              name="Joana Santa Maria da Silva Santos e Sousa"
              wearableStatus="active"
              avatarUrl="https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              batteryLevel={40}
              lastPingTime={new Date()}
              pedometer={23827}
            />
          </div>
          <div className="flex justify-center">
            <WearableConnectionComponent
              name="Joana Santa Maria da Silva Santos e Sousa"
              wearableStatus="active"
              avatarUrl="https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              batteryLevel={40}
              lastPingTime={new Date()}
              pedometer={23827}
            />
          </div>
          <div className="flex justify-center">
            <WearableConnectionComponent
              name="Joana Santa Maria da Silva Santos e Sousa"
              wearableStatus="active"
              avatarUrl="https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              batteryLevel={40}
              lastPingTime={new Date()}
              pedometer={23827}
            />
          </div>
          <div className="flex justify-center">
            <WearableConnectionComponent
              name="Joana Santa Maria da Silva Santos e Sousa"
              wearableStatus="active"
              avatarUrl="https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              batteryLevel={40}
              lastPingTime={new Date()}
              pedometer={23827}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
