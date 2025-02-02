import BorderWrapper from "@/components/BorderWrapper";
import { FunctionComponent } from "react";
import { Outlet, useLocation } from "react-router";

interface BorderLayoutProps {}

const BorderLayout: FunctionComponent<BorderLayoutProps> = () => {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="fade-in-container">
      <BorderWrapper>
        <Outlet />
      </BorderWrapper>
    </div>
  );
};
export default BorderLayout;
