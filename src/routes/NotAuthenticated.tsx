import { AlertCircle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router";
import { FunctionComponent, useMemo } from "react";

interface NotAuthenticatedProps {}

const NotAuthenticated: FunctionComponent<NotAuthenticatedProps> = () => {
  const [searchParams] = useSearchParams();
  const searchParamRedirectTo = searchParams.get("redirect_to");

  const loginLink = useMemo(() => {
    return searchParamRedirectTo
      ? `/login?redirect_to=${searchParamRedirectTo}`
      : "/login";
  }, [searchParamRedirectTo]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-300 to-zinc-200 dark:from-gray-900 dark:to-gray-800 text-[#273C4E]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#273C4E]">
            <AlertCircle className="h-5 w-5 text-yellow-500" />
            Não Autenticado
          </CardTitle>
          <CardDescription className="text-[#273C4E]">
            Você precisa estar logado para acessar esta página.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-[#273C4E]">
            Por favor, faça login para acessar este conteúdo e utilizar todas as
            funcionalidades do Rman.
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full bg-[#273C4E] hover:bg-[#1c2d3d]">
            <Link to={loginLink}>Fazer Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotAuthenticated;
