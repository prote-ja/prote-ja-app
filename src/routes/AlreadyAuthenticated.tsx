import { ThumbsUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { FunctionComponent } from "react";

interface AlreadyAuthenticatedProps {}

const AlreadyAuthenticated: FunctionComponent<
  AlreadyAuthenticatedProps
> = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <ThumbsUp className="h-5 w-5 text-positive" />
            Você já está autenticado
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Você já está autenticado e não pode acessar esta página.
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link to={"/dashboard"}>Ir para dashboard</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AlreadyAuthenticated;
