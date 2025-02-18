import NotAuthenticated from "@/components/NotAuthenticated";
import { DevicesProvider } from "@/contexts/devicesContext";
import { useAuth } from "@/hooks/useAuth";
import { FunctionComponent } from "react";
import { Outlet } from "react-router";

interface AuthenticatedLayoutProps {}

const AuthenticatedLayout: FunctionComponent<AuthenticatedLayoutProps> = () => {
  const { session } = useAuth();
  return (
    <>
      {session ? (
        <DevicesProvider>
          <Outlet />
        </DevicesProvider>
      ) : (
        <div className="px-3">
          <NotAuthenticated />
        </div>
      )}
    </>
  );
};

export default AuthenticatedLayout;
