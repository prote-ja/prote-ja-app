import NotAuthenticated from "@/components/NotAuthenticated";
import { useAuth } from "@/hooks/useAuth";
import { FunctionComponent } from "react";
import { Outlet } from "react-router";

interface RestrictedLayoutProps {}

const RestrictedLayout: FunctionComponent<RestrictedLayoutProps> = () => {
  const session = useAuth();

  return <>{session ? <Outlet /> : <NotAuthenticated />}</>;
};

export default RestrictedLayout;
