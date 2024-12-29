import Header from "@/components/Header";
import { FunctionComponent } from "react";
import { Outlet } from "react-router";
import AnimatedBackground from "@/components/AnimatedBackground";

interface MainLayoutProps {}

const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  // const { pathname } = useLocation();
  return (
    <>
      <AnimatedBackground />
      <Header />
      {/* <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={{
          initial: {
            opacity: 0,
          },
          in: {
            opacity: 1,
          },
          out: {
            opacity: 0,
          },
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          duration: 0.3,
        }}
      > */}
      <Outlet />
      {/* </motion.div> */}
    </>
  );
};

export default MainLayout;
