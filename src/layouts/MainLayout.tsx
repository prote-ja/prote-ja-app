import Header from "@/components/Header";
import { FunctionComponent } from "react";
import { Outlet } from "react-router";
import AnimatedBackground from "@/components/AnimatedBackground";
import { toast } from "react-toastify";
import { onMessage } from "firebase/messaging";
import { messaging } from "@/firebase";
import BottomNavBar from "@/components/BottomNavBar";

interface MainLayoutProps {}

const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  console.log("MainLayout");

  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    toast.success(payload.notification?.title);
    toast(payload.notification?.body);
  });

  return (
    <>
      <AnimatedBackground />
      <Header />

      <Outlet />
      <BottomNavBar />
    </>
  );
};

export default MainLayout;
