import { FunctionComponent, useState } from "react";
import { CircleUserRound, Upload } from "lucide-react";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import { AutosizeTextarea } from "@/components/AutosizeInput";
import InformationContainerVertical from "@/components/InformationContainerVertical";
import { useParams } from "react-router";
import { useWearable } from "@/hooks/useWearable";
import FieldContainer from "@/components/FieldContainer/FieldContainer";
import FieldContainerInputText from "@/components/FieldContainer/FieldContainerInputText";
import { RotatingLines } from "react-loader-spinner";
import { Input } from "@/components/ui/input";

interface EditWearableProps {}

const EditWearable: FunctionComponent<EditWearableProps> = () => {
  const { id } = useParams();

  const { wearable, loading } = useWearable(id);
  const [uploadingProfilePicture, setUploadingProfilePicture] = useState(false);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!wearable) {
    return <div className="text-white">Pulseira não encontrado</div>;
  }

  const handleNameChange = async (v: string) => {};

  const handleUploadPfp = async () => {};

  return (
    <div className="space-y-4">
      {/* Imagem do usuário */}
      <div className="flex flex-col items-center justify-center">
        <ElementTitleHeader
          className="pb-2 text-white"
          title={wearable.name ?? "Sem nome"}
        />
        {wearable.avatar_url ? (
          <img
            src={wearable.avatar_url}
            alt="Avatar"
            className="avatar image w-32 h-32 rounded-full"
          />
        ) : (
          <CircleUserRound className="w-32 stroke-white stroke-1" />
        )}
      </div>

      <FieldContainer title="Nome">
        <FieldContainerInputText
          value={wearable.name ?? "Sem Nome"}
          onConfirm={handleNameChange}
        />
      </FieldContainer>

      <FieldContainer title="Data de Nascimento">
        <FieldContainerInputText
          value={wearable.name ?? "Sem Nome"}
          onConfirm={handleNameChange}
        />
      </FieldContainer>

      <FieldContainer title="Foto de Perfil">
        {/* <Button
          variant={"secondary"}
          size={"sm"}
          onClick={handleUploadPfp}
          disabled={uploadingProfilePicture}
          type="file"
        >
          {uploadingProfilePicture ? (
            <>
              Enviando <RotatingLines strokeColor="white" />
            </>
          ) : (
            <>
              Alterar senha
              <Upload />
            </>
          )}
        </Button> */}
        <Input id="picture" type="file" />
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
      <InformationContainerVertical
        name="Informações Adicionais"
        value={
          <AutosizeTextarea
            placeholder="Digite informações adicionais sobre o usuário"
            className="w-full"
          />
        }
      />
    </div>
  );
};

export default EditWearable;
