import { FunctionComponent } from "react";

import { LayoutDashboard } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";
import BlurredContainer from "./BlurredContainer";

interface AlreadyAuthProps {}

const AlreadyAuth: FunctionComponent<AlreadyAuthProps> = () => {
  return (
    <BlurredContainer title="Você já está autenticado">
      <p className="text-white">
        Você já está autenticado, acesse o dashboard para continuar.
      </p>
      <Link to={"/dashboard"}>
        <Button
          type="submit"
          className="w-full bg-[#fff] text-[#7F6AFF] hover:bg-[#c2c2c2c2] mt-1"
        >
          <LayoutDashboard />
          Ir para dashboard
        </Button>
      </Link>
    </BlurredContainer>
  );
};

export default AlreadyAuth;
