import AnimatedBackground from "@/components/AnimatedBackground";
import BlurredContainer from "@/components/BlurredContainer";
import { FunctionComponent } from "react";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <>
      <AnimatedBackground />
      <BlurredContainer header="Dashboard">Hello</BlurredContainer>;
    </>
  );
};

export default Dashboard;
