import { cn } from "@/lib/utils";
import { FunctionComponent, useState } from "react";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface WarningBannerProps {
  className?: string;
}

const WarningBanner: FunctionComponent<WarningBannerProps> = ({
  className,
}) => {
  const [hidden, setHidden] = useState(false);

  if (hidden) {
    return null;
  }

  return (
    <AlertDialog open={!hidden}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Atenção, você está desprotegido(a)
          </AlertDialogTitle>
          <AlertDialogDescription>
            Precisamos de permissão para enviar notificações.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              setHidden(true);
            }}
          >
            Ignorar
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => {}}>Permitir</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return (
    <div className={cn(className)}>
      <div
        className={`bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-1 ${className}`}
        role="alert"
      >
        <p className="font-bold">Atenção</p>
        <div>
          Você está desprotegido! Precisamos de permissão para enviar
          notificações.
        </div>
        <Button>Ignorar</Button>
      </div>
    </div>
  );
};

export default WarningBanner;
