import {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Save, Upload } from "lucide-react";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import { useParams } from "react-router";
import { useWearable } from "@/hooks/useWearable";
import FieldContainer from "@/components/FieldContainer/FieldContainer";
import { RotatingLines } from "react-loader-spinner";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials, formatToDate } from "@/lib/helpers";
import { Database } from "@/types/database.types";
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

interface EditWearableProps {}

const EditWearable: FunctionComponent<EditWearableProps> = () => {
  const { id } = useParams();
  const fileRef = useRef<HTMLInputElement>(null);

  const { wearable, loading } = useWearable(id);
  const [uploadingProfilePicture, setUploadingProfilePicture] = useState(false);

  const [wearableLocalCopy, setWearableLocalCopy] = useState<
    Database["public"]["Views"]["wearables_view"]["Row"] | undefined
  >(undefined);

  // DD/MM/YYYY
  const [birthdayString, setBirthdayString] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (!wearable) return;

    setWearableLocalCopy(wearable);
    setBirthdayString(
      wearable.birthday
        ? new Date(wearable.birthday).toLocaleDateString("pt-BR")
        : undefined
    );
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

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="space-y-3">
      {/* Imagem do usuário */}
      <div className="flex flex-col items-center justify-center">
        <ElementTitleHeader
          className="text-white"
          title={wearableLocalCopy?.name ? wearableLocalCopy?.name : "Sem nome"}
        />
        <Avatar className="h-36 w-36 mt-6 mb-3">
          <AvatarImage src={wearableLocalCopy?.avatar_url ?? undefined} />
          <AvatarFallback className="text-white text-7xl font-semibold bg-white/10 border-4 border-white">
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
        <Button
          variant={"secondary"}
          size={"sm"}
          onClick={handleUploadPfp}
          disabled={uploadingProfilePicture}
        >
          {uploadingProfilePicture ? (
            <>
              Enviando <RotatingLines strokeColor="white" />
            </>
          ) : (
            <>
              Enviar Foto
              <Upload />
            </>
          )}
        </Button>
      </FieldContainer>

      {/* <input
        id="upload-avatar"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => {
          if (e.target.files) {
            handleUpload(e, URL.createObjectURL(e.target.files[0]));
          }
        }}
      /> */}

      {/* Informações Adicionais */}
      <FieldContainer title="Informações Adicionais">
        <FieldContainerInputTextArea placeholder="Informações sobre dificuldades físicas." />
      </FieldContainer>

      <div className="flex justify-end pt-4">
        <Button className="bg-white text-primary">
          Salvar <Save />
        </Button>
      </div>
    </div>
  );
};

export default EditWearable;
