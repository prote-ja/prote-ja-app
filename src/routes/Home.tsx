import { useAuth } from "@/hooks/useAuth";
import { FunctionComponent } from "react";
import { Navigate } from "react-router";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const { session } = useAuth();
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to="/dashboard" replace />;
};

export default Home;
