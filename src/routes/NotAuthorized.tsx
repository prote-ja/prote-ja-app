import { ShieldAlert } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FunctionComponent } from "react";
import { Link } from "react-router";

interface NotAuthorizedProps {}

const NotAuthorized: FunctionComponent<NotAuthorizedProps> = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#273C4E]">
            <ShieldAlert className="h-5 w-5 text-red-500" />
            Acesso Negado!
          </CardTitle>
          <CardDescription className="text-[#273C4E]">
            Você não tem permissão para acessar esta página.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-[#273C4E]">
            Se você acredita que isso é um erro, por favor, contate o
            administrador ou retorne à página inicial.
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full bg-[#273C4E] hover:bg-[#1c2d3d]">
            <Link to="/">Retornar à Página Inicial</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotAuthorized;
