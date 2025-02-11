import { FunctionComponent, useEffect, useState } from "react";
import { Save } from "lucide-react";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import { useNavigate, useParams } from "react-router";
import { useTotem } from "@/hooks/useTotem";
import FieldContainer from "@/components/FieldContainer/FieldContainer";
import { RotatingLines } from "react-loader-spinner";
import { Button } from "@/components/ui/button";
import { getInitials } from "@/lib/helpers";
import FieldContainerInput from "@/components/FieldContainer/FieldContainerInput";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "react-toastify";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import { updateTotem } from "@/db/totems";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import HorizontalDivider from "@/components/HorizontalDivider";
import SharedDeviceUsersList from "@/components/SharedDevice/SharedDeviceUsersList";

interface TotemsEditProps {}

const TotemEdit: FunctionComponent<TotemsEditProps> = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const { totem, loading } = useTotem(id);
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    if (!totem) return;
    setName(totem.name);
  }, [totem]);

  const navigate = useNavigate();

  if (!id) {
    return <div className="text-white">Totem não encontrado</div>;
  }
  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!totem) {
    return <div className="text-white">Totem não encontrado</div>;
  }

  const handleNameChange = async (v: string) => {
    setName(v);
  };

  const handleSave = async () => {
    if (!name) {
      return;
    }
    if (!id) return;

    setIsLoading(true);

    try {
      await updateTotem(id, {
        name,
      });

      toast.success("Totem atualizado com sucesso");
      navigate("/totems");
    } catch (error) {
      console.error("Error updating totem:", error);
      toast.error("Erro ao atualizar o totem");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-3 text-white">
      <div className="flex flex-col items-center justify-center">
        <ElementTitleHeader
          className="text-white"
          title={name ? name : "Sem nome"}
        />
        <Avatar className="h-36 w-36 mt-6 mb-3 border-2 border-white shadow-md">
          <AvatarFallback className="text-white text-7xl font-semibold bg-white/10">
            {getInitials(name ? name : "Sem nome")?.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <Tooltip>
          <TooltipTrigger
            onClick={() => {
              navigator.clipboard.writeText(id ?? "");
              toast.success(
                "Endereço MAC copiado para a área de transferência"
              );
            }}
          >
            <div className="flex items-center justify-center border rounded-md px-2 text-white ">
              {id}
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Endereço MAC</p>
            <TooltipArrow className="stroke-white fill-white" />
          </TooltipContent>
        </Tooltip>
      </div>

      <HorizontalDivider className="my-7" />

      <FieldContainer title="Nome">
        <FieldContainerInput
          value={name ?? "Sem Nome"}
          onChange={(e) => handleNameChange(e.target.value)}
          type="text"
          placeholder="Totem Padrão"
        />
      </FieldContainer>

      <HorizontalDivider className="mt-8" />
      <ElementTitleHeader
        title="Compartilhamento"
        description="Aqui estão as pessoas com quem você compartilhou este totem."
      />

      <SharedDeviceUsersList id={id} />

      <div className="flex justify-end pt-2">
        <Button
          className="bg-white text-primary"
          onClick={handleSave}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              Atualizando <RotatingLines strokeColor="#4b33be" />
            </>
          ) : (
            <>
              Salvar <Save />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default TotemEdit;
