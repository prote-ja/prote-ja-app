import BorderWrapper from "@/components/BorderWrapper";
import { FunctionComponent } from "react";
import { Outlet, useLocation } from "react-router";

interface CommonLayoutProps {}

const CommonLayout: FunctionComponent<CommonLayoutProps> = () => {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="fade-in-container">
      <BorderWrapper>
        <Outlet />
      </BorderWrapper>
    </div>
  );
};
export default CommonLayout;
