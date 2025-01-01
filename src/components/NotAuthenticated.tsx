import { FunctionComponent } from "react";

import { LogIn } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";
import BlurredContainer from "./BlurredContainer";

interface NotAuthenticatedProps {}

const NotAuthenticated: FunctionComponent<NotAuthenticatedProps> = () => {
  return (
    <BlurredContainer
      border
      className="max-w-lg mx-auto h-full mt-8"
      title="Não autenticado"
    >
      <div className="p-6">
        <p className="text-white">
          Você precisa estar logado para acessar esta página. Por favor, faça
          login para acessar este conteúdo.
        </p>
        <Link to={"/login"}>
          <Button
            type="submit"
            className="w-full bg-[#fff] text-[#7F6AFF] hover:bg-[#c2c2c2c2] mt-1"
          >
            <LogIn />
            Fazer Login
          </Button>
        </Link>
      </div>
    </BlurredContainer>
  );
};

export default NotAuthenticated;
