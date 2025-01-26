import { FunctionComponent, useState } from "react";
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

interface NotificationPromptDialogProps {}

const NotificationPromptDialog: FunctionComponent<
  NotificationPromptDialogProps
> = () => {
  const [open, setOpen] = useState(Notification.permission !== "granted");

  if (Notification.permission === "granted") {
    return null;
  }

  // const handleAllowNotifications = async () => {
  //   try {
  //     const permission = await Notification.requestPermission();

  //     switch (permission) {
  //       case "granted":
  //         setOpen(false);
  //         break;
  //       case "denied":
  //         toast.error("Permissão negada");
  //         throw new Error("Permissão negada");
  //       default:
  //         toast.error("Erro desconhecido");
  //         throw new Error("Erro desconhecido");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   handleAllowNotifications();
  // }, []);

  if (Notification.permission === "denied") {
    return (
      <AlertDialog open={open}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Atenção, você está desprotegido(a)
            </AlertDialogTitle>
            <AlertDialogDescription>
              Parece que você negou a permissão de notificações. Ative as
              notificações do aplicativo no seu dispositivo.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setOpen(false)}>
              Entendi, vou corrigir.
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <AlertDialog open={open}>
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
          <AlertDialogCancel onClick={() => setOpen(false)}>
            Ignorar
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => setOpen(false)}>
            Já Permiti
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NotificationPromptDialog;
