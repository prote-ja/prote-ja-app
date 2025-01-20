import { useAuth } from "@/hooks/useAuth";
import { FunctionComponent } from "react";
import { Navigate } from "react-router";
import { RotatingLines } from "react-loader-spinner";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const { session, loading } = useAuth();
  if (loading) {
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold text-white">Carregando</h1>
          <RotatingLines width="32" strokeColor="white" />
        </div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to="/dashboard" replace />;
};

export default Home;
