import {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { CircleUserRound, Save, Upload } from "lucide-react";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import { AutosizeTextarea } from "@/components/AutosizeInput";
import InformationContainerVertical from "@/components/InformationContainerVertical";
import { useParams } from "react-router";
import { useWearable } from "@/hooks/useWearable";
import FieldContainer from "@/components/FieldContainer/FieldContainer";
import FieldContainerInputText from "@/components/FieldContainer/FieldContainerInputText";
import { RotatingLines } from "react-loader-spinner";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/helpers";
import { Database } from "@/types/database.types";
import { Textarea } from "@/components/ui/textarea";

interface EditWearableProps {}

const EditWearable: FunctionComponent<EditWearableProps> = () => {
  const { id } = useParams();
  const fileRef = useRef<HTMLInputElement>(null);

  const { wearable, loading } = useWearable(id);
  const [uploadingProfilePicture, setUploadingProfilePicture] = useState(false);

  const [wearableLocalCopy, setWearableLocalCopy] = useState<
    Database["public"]["Views"]["wearables_view"]["Row"] | undefined
  >(undefined);

  useEffect(() => {
    if (!wearable) return;

    setWearableLocalCopy(wearable);
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
          className="pb-2 text-white"
          title={wearableLocalCopy?.name ?? "Sem nome"}
        />
        <Avatar className="h-36 w-36 my-6">
          <AvatarImage src={wearableLocalCopy?.avatar_url ?? undefined} />
          <AvatarFallback className="text-white text-7xl font-semibold bg-transparent border-4 border-white">
            {getInitials(wearableLocalCopy?.name ?? "Minha Pulseira")}
          </AvatarFallback>
        </Avatar>
      </div>

      <FieldContainer title="Nome">
        <FieldContainerInputText
          value={wearableLocalCopy?.name ?? "Sem Nome"}
          onConfirm={handleNameChange}
        />
      </FieldContainer>

      <FieldContainer title="Data de Nascimento">
        <FieldContainerInputText
          value={wearableLocalCopy?.name ?? "Sem Nome"}
          onConfirm={handleNameChange}
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
        <Textarea className="w-full max-w-sm" />
      </FieldContainer>
      {/* <InformationContainerVertical
        name="Informações Adicionais"
        value={
          
        }
      /> */}
      <div className="flex justify-end pt-4">
        <Button className="bg-white text-primary">
          Salvar <Save />
        </Button>
      </div>
    </div>
  );
};

export default EditWearable;
