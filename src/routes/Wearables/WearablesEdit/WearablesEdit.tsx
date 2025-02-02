import {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Save, Trash, Upload } from "lucide-react";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import { useNavigate, useParams } from "react-router";
import { useWearable } from "@/hooks/useWearable";
import FieldContainer from "@/components/FieldContainer/FieldContainer";
import { RotatingLines } from "react-loader-spinner";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials, formatToDate } from "@/lib/helpers";
import FieldContainerInput from "@/components/FieldContainer/FieldContainerInput";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "react-toastify";
import HorizontalDivider from "@/components/HorizontalDivider";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import FieldContainerInputTextArea from "@/components/FieldContainer/FieldContainerInputTextArea";
import { Database } from "@/types/database.types";
import { updateWearable } from "@/db/wearables";
import BlurredContainer from "@/components/BlurredContainer";
import WearableRefreshRate from "@/components/Sliders/WearableRefreshRate";
import { getImageUrl, uploadAvatar } from "@/db/storage";
import SharedDeviceUsersList from "@/components/SharedDevice/SharedDeviceUsersList";

interface WearablesEditProps {}

const WearablesEdit: FunctionComponent<WearablesEditProps> = () => {
  const { id } = useParams();
  const fileRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const { wearable, loading } = useWearable(id);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [wearableLocalCopy, setWearableLocalCopy] = useState<
    Database["public"]["Views"]["wearables_view"]["Row"] | undefined
  >(undefined);

  const [birthdayString, setBirthdayString] = useState<string | undefined>(
    undefined
  );

  const [refreshDelay, setRefreshDelay] = useState<number | undefined>(
    undefined
  );

  const [pfpFile, setPfpFile] = useState<File | undefined>();

  const navigate = useNavigate();

  useEffect(() => {
    if (!wearable) return;

    setWearableLocalCopy(wearable);
    setBirthdayString(
      wearable.birthday
        ? new Date(wearable.birthday).toLocaleDateString("pt-BR")
        : undefined
    );

    if (wearable.avatar_url) {
      setProfilePicture(getImageUrl(wearable.avatar_url).data.publicUrl);
    }

    if (wearable.refresh_delay) {
      setRefreshDelay(wearable.refresh_delay);
    }
  }, [wearable]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!wearable) {
    return <div className="text-white">Pulseira não encontrado</div>;
  }

  const handleNameChange = async (v: string) => {
    setWearableLocalCopy((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        name: v,
      };
    });
  };

  const handleUploadPfp = () => {
    fileRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setPfpFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setProfilePicture(result);
      };
      reader.onerror = () => {
        toast.error("Erro ao carregar foto de perfil.");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePfp = () => {
    setProfilePicture(null);
    setPfpFile(undefined);
    toast.info("Foto de perfil removida.");
  };

  const handleSave = async () => {
    if (!wearableLocalCopy) return;
    if (!birthdayString) {
      toast.error("Data de nascimento inválida.");
      return;
    }
    if (!wearableLocalCopy.name) {
      toast.error("Nome inválido.");
      return;
    }

    if (!wearableLocalCopy.id) {
      toast.error("ID inválido.");
      return;
    }

    if (!refreshDelay) {
      toast.error("Taxa de atualização inválida.");
      return;
    }

    setIsLoading(true);

    let avatarPath: string | null = null;

    try {
      if (pfpFile) {
        const { data, error } = await uploadAvatar(
          wearableLocalCopy.id,
          pfpFile
        );

        if (error) {
          throw error;
        }

        if (data) {
          avatarPath = data.path;
        }
      }
      try {
        const updatedData: Partial<
          Database["public"]["Tables"]["wearables"]["Row"]
        > = {
          name: wearableLocalCopy.name,
          birthday: new Date(birthdayString).toISOString(),
          other_info: wearableLocalCopy.other_info,
          refresh_delay: refreshDelay,
        };

        if (avatarPath) {
          updatedData.avatar_url = avatarPath;
        }

        const { error } = await updateWearable(
          wearableLocalCopy.id,
          updatedData
        );

        if (error) {
          throw error;
        }

        toast.success("Dados salvos com sucesso.");

        navigate(`/wearables/view/${wearableLocalCopy.id}`);
      } catch (error) {
        console.error(error);
        toast.error("Erro ao salvar dados.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao salvar foto de perfil.");
    }

    setIsLoading(false);
  };

  return (
    <div className="space-y-3 text-white">
      <div className="flex flex-col items-center justify-center">
        <ElementTitleHeader
          className="text-white"
          title={wearableLocalCopy?.name ? wearableLocalCopy?.name : "Sem nome"}
        />
        <Avatar className="h-36 w-36 mt-6 mb-3 border-2 border-white shadow-md">
          <AvatarImage
            src={profilePicture || undefined}
            className="object-cover "
          />
          <AvatarFallback className="text-white text-7xl font-semibold bg-white/10">
            {getInitials(
              wearableLocalCopy?.name ? wearableLocalCopy?.name : "Sem nome"
            )?.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <Tooltip>
          <TooltipTrigger
            onClick={() => {
              navigator.clipboard.writeText(wearableLocalCopy?.id ?? "");
              toast.success(
                "Endereço MAC copiado para a área de transferência"
              );
            }}
          >
            <div className="flex items-center justify-center border rounded-md px-2 text-white ">
              {wearableLocalCopy?.id}
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
          value={wearableLocalCopy?.name ?? "Sem Nome"}
          onChange={(e) => handleNameChange(e.target.value)}
          type="text"
          placeholder="Fulano da Silva"
        />
      </FieldContainer>

      <FieldContainer title="Data de Nascimento">
        <FieldContainerInput
          value={birthdayString}
          placeholder="Dia/Mês/Ano"
          onChange={(e) => {
            const parsedDate = formatToDate(e.target.value);

            setBirthdayString(parsedDate);
          }}
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={10}
        />
      </FieldContainer>

      <FieldContainer title="Foto de Perfil">
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
          ref={fileRef}
        />
        {!profilePicture ? (
          <Button variant={"secondary"} size={"sm"} onClick={handleUploadPfp}>
            Enviar Foto
            <Upload />
          </Button>
        ) : (
          <Button variant={"secondary"} size={"sm"} onClick={handleRemovePfp}>
            Remover Foto
            <Trash />
          </Button>
        )}
      </FieldContainer>

      <FieldContainer title="Informações Adicionais">
        <FieldContainerInputTextArea
          placeholder="Informações sobre dificuldades físicas."
          value={wearableLocalCopy?.other_info ?? ""}
          onChange={(e) => {
            setWearableLocalCopy((prev) => {
              if (!prev) return prev;

              return {
                ...prev,
                other_info: e.target.value,
              };
            });
          }}
        />
      </FieldContainer>

      <HorizontalDivider className="mt-8" />
      <ElementTitleHeader
        title="Configuração da pulseira"
        description="Defina as configurações da pulseira."
      />

      <BlurredContainer title="Taxa de atualização" titleBackground border>
        <div className="px-6 py-4 text-white">
          <WearableRefreshRate
            defaultValue={wearableLocalCopy?.refresh_delay || undefined}
            onChangeComplete={(v) => {
              setRefreshDelay(v);
            }}
          />
        </div>
      </BlurredContainer>

      <HorizontalDivider className="mt-8" />
      <ElementTitleHeader
        title="Compartilhamento"
        description="Aqui estão as pessoas com quem você compartilhou esta pulseira."
      />

      <SharedDeviceUsersList id={wearable.id} />

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

export default WearablesEdit;
