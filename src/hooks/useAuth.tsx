import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
