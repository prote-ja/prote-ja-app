import { useAuth } from "@/hooks/useAuth";
import { FunctionComponent } from "react";
import { Navigate } from "react-router";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const auth = useAuth();

  if (!auth.session) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to="/dashboard" replace />;
};

export default Home;
