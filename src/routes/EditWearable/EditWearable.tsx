import { FunctionComponent, useState } from "react";
import { useSearchParams } from "react-router";
import { Button } from "@/components/ui/button";
import InformationContainer from "@/components/InformationContainer";
import { CircleUserRound, Upload } from "lucide-react";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import BirthdayInput from "@/components/BirthdayInput";
import DefaultInput from "@/components/DefaultInput";
import { AutosizeTextarea } from "@/components/AutosizeInput";
import InformationContainerVertical from "@/components/InformationContainerVertical";
import Avatar from "@/db/upload_avatar";

interface EditWearableProps {}

const EditWearable: FunctionComponent<EditWearableProps> = () => {
  const [search] = useSearchParams();

  const [userName, setUserName] = useState("Nome");

  const handleSaveName = (newName: string) => {
    setUserName(newName);
  };

  const [avatarPath, setAvatarPath] = useState<string | null>(null);

  const handleUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    filePath: string
  ) => {
    setAvatarPath(filePath);
    console.log("Arquivo enviado para o caminho:", filePath);
  };

  return (
    <div className="space-y-4">
      {/* Imagem do usuário */}
      <div className="flex flex-col items-center justify-center">
        <ElementTitleHeader className="pb-2 text-white" title={userName} />
        {avatarPath ? (
          <Avatar url={avatarPath} size={160} onUpload={handleUpload} />
        ) : (
          <CircleUserRound className="w-64 h-auto stroke-white stroke-1" />
        )}
      </div>

      {/* Campo Nome */}
      <InformationContainer
        name="Usuário"
        value={
          <DefaultInput
            inputState={userName}
            placeholder="Nome"
            onSave={handleSaveName}
          />
        }
      />

      {/* Campo Data de Nascimento */}
      <BirthdayInput />

      {/* Campo Upload */}
      <InformationContainer
        name="Foto de Perfil"
        value={
          <Button
            variant="secondary"
            className="w-32 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
            onClick={() => document.getElementById("upload-avatar")?.click()}
          >
            Upload <Upload className="stroke-white w-5 h-5" />
          </Button>
        }
      />
      <input
        id="upload-avatar"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => {
          if (e.target.files) {
            handleUpload(e, URL.createObjectURL(e.target.files[0]));
          }
        }}
      />

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
