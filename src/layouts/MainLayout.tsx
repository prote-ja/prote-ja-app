import Header from "@/components/Header";
import { FunctionComponent } from "react";
import { Outlet } from "react-router";
import AnimatedBackground from "@/components/AnimatedBackground";

interface MainLayoutProps {}

const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  return (
    <>
      <AnimatedBackground />
      <Header />

      <Outlet />
    </>
  );
};

export default MainLayout;
