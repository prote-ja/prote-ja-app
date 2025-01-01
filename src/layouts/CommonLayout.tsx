import { FunctionComponent } from "react";
import { Outlet, useLocation } from "react-router";

interface CommonLayoutProps {}

const CommonLayout: FunctionComponent<CommonLayoutProps> = () => {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="fade-in-container">
      <Outlet />
    </div>
  );
};
export default CommonLayout;
