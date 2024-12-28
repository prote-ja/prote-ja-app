import AnimatedBackground from "@/components/AnimatedBackground";
import BlurredContainer from "@/components/BlurredContainer";

import { FunctionComponent } from "react";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <>
      <AnimatedBackground />
      <div className="p-2">
        <BlurredContainer header="Dashboard">Hello</BlurredContainer>;
      </div>
    </>
  );
};

export default Dashboard;
