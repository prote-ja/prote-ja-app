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
      <div className="p-2">
        <ConnectionComponent />
      </div>
    </>
  );
};

export default Dashboard;
