import { FunctionComponent } from "react";
import { Outlet, useLocation } from "react-router";
import { motion } from "framer-motion";

interface CommonLayoutProps {}

const CommonLayout: FunctionComponent<CommonLayoutProps> = () => {
  const { pathname } = useLocation();
  return (
    <motion.div
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
    >
      <Outlet />
    </motion.div>
  );
};

export default CommonLayout;
