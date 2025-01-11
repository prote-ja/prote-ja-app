import BlurredContainer from "@/components/BlurredContainer";
import { Button } from "@/components/ui/button";
import { FunctionComponent } from "react";
import { useRouteError } from "react-router";

interface ErrorProps {}

const Error: FunctionComponent<ErrorProps> = () => {
  const error = useRouteError();

  console.log("Error", error);

  return (
    <BlurredContainer title="Algo deu errado">
      <div className="p-4">
        <p className="text-white">
          Você já está autenticado, acesse o dashboard para continuar.
        </p>
        <Button className="w-full">Recarregar</Button>
      </div>
    </BlurredContainer>
  );
};

export default Error;
