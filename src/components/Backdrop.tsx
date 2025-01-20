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

interface BackdropProps {
  open: boolean;
  onClose: () => void;
  confirm?: boolean;
}

const Backdrop: FunctionComponent<BackdropProps> = ({ onClose, confirm }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  return (
    <>
      <div
        className="fixed top-0 left-0 bg-black/50 w-full h-full z-[10] fade-in-quick"
        onClick={() => {
          if (confirm) {
            console.log("confirm");

            setConfirmOpen(true);
          } else {
            onClose();
          }
        }}
      ></div>
      <AlertDialog onOpenChange={setConfirmOpen} open={confirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza que deseja fechar?</AlertDialogTitle>
            <AlertDialogDescription>
              Suas alterações serão perdidas.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={(e) => {
                e.preventDefault();
                setConfirmOpen(false);
              }}
            >
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                onClose();
                setConfirmOpen(false);
              }}
            >
              Continuar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Backdrop;
