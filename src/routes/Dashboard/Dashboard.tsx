import { FunctionComponent } from "react";
import ConnectionComponent from "./ConnectionComponent";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <>
      <div className="p-2">
        <ConnectionComponent />
      </div>
    </>
  );
};

export default Dashboard;
