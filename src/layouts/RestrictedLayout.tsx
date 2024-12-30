import { useAuth } from "@/hooks/useAuth";
import { FunctionComponent } from "react";
import { Navigate, Outlet } from "react-router";

interface RestrictedLayoutProps {}

const RestrictedLayout: FunctionComponent<RestrictedLayoutProps> = () => {
  const session = useAuth();

  if (!session) {
    return <Navigate to="/not-authenticated" replace />;
  }

  return <Outlet />;
};

export default RestrictedLayout;
