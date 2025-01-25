import { Database } from "@/types/database.types";
import { FunctionComponent } from "react";
import { Button } from "../ui/button";
import { ChevronDown, Clock, Eye, Pencil } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "react-toastify";
import { updateTrackingPermission } from "@/db/trackingAndPermissions";
import { RotatingLines } from "react-loader-spinner";
import { cn } from "@/lib/utils";

interface SharedDeviceUserProps {
  permission: Database["public"]["Views"]["permissions_view"]["Row"];
  users: Database["public"]["Tables"]["users"]["Row"][];
  forceUpdate: () => void;
  loading: boolean;
}

const SharedDeviceUser: FunctionComponent<SharedDeviceUserProps> = ({
  permission,
  users,
  forceUpdate,
  loading,
}) => {
  const myUser = users.find((user) => user.id === permission.user);

  const editPermission = async (
    newPermission: Database["public"]["Enums"]["tracker_permition"]
  ) => {
    if (!permission.id) {
      return;
    }

    try {
      const response = await updateTrackingPermission(
        permission.id,
        newPermission
      );

      if (response.error) {
        throw new Error(response.error.message);
      }

      toast.success("Permissão atualizada com sucesso");
      forceUpdate();
    } catch (error) {
      console.error("Unexpected error updating permission:", error);
      toast.error("Algo deu errado ao atualizar a permissão");
    }
  };

  const getButtonName = () => {
    switch (permission.permission) {
      case "viewer":
        return "Apenas ver";
      case "editor":
        return "Ver e editar";
      case "pending":
        return "Aguardando";
      case "blocked":
        return "Bloqueado";
    }
  };
  return (
    <div className="text-white flex justify-between items-center p-2">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold line-clamp-1">{myUser?.name}</h3>

        {loading ? (
          <div className="flex space-x-2">
            <div className="bg-background border flex text-sm gap-1 rounded-full px-2 py-1 font-medium items-center text-muted">
              Atualizando
              <RotatingLines strokeColor="white" width="15" />
            </div>
          </div>
        ) : (
          <div className="flex space-x-2">
            {(permission.permission === "viewer" ||
              permission.permission === "editor") && (
              <div className="bg-[#7AC74F] flex text-sm rounded-full pl-2 pr-1 py-1 font-medium items-center">
                Visualizar
                <Eye className="h-4" />
              </div>
            )}
            {permission.permission === "editor" && (
              <div className="bg-[#FAA916] flex text-sm rounded-full pl-2 pr-1 py-1 font-medium items-center">
                Modificar
                <Pencil className="h-3" />
              </div>
            )}
            {permission.permission === "pending" && (
              <div className="bg-background border flex text-sm rounded-full pl-2 pr-1 py-1 font-medium items-center">
                Pendente
                <Clock className="h-3" />
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant={
                permission.permission === "pending" ? "default" : "secondary"
              }
              className={cn(
                permission.permission === "pending"
                  ? "text-primary bg-white"
                  : ""
              )}
              size={"sm"}
            >
              {getButtonName()} <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom">
            <DropdownMenuItem
              onClick={() => {
                editPermission("editor");
              }}
            >
              Ver e editar
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                editPermission("viewer");
              }}
            >
              Apenas ver
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                editPermission("pending");
              }}
            >
              Remover permissão
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                editPermission("blocked");
              }}
            >
              Bloquear
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SharedDeviceUser;
