import { FunctionComponent, useEffect } from "react";
import ConnectionComponent from "./ConnectionComponent";
import { getAllWearables } from "@/db/wearables";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  useEffect(() => {
    getAllWearables();
  }, []);

  return (
    <>
      <div className="p-2 space-y-3">
        <ConnectionComponent
          name="Joana Santa Maria"
          wearableStatus="active"
          avatarUrl="https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          batteryLevel={40}
          lastPingTime={new Date()}
          pedometer={23827}
        />
        <ConnectionComponent
          name="Joana Santa Maria"
          wearableStatus="active"
          avatarUrl="https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          batteryLevel={40}
          lastPingTime={new Date()}
          pedometer={23827}
        />
        <ConnectionComponent
          name="Joana Santa Maria da Silva Santos e Sousa"
          wearableStatus="active"
          avatarUrl="https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          batteryLevel={40}
          lastPingTime={new Date()}
          pedometer={23827}
        />
      </div>
    </>
  );
};

export default Dashboard;
