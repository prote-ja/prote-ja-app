import { FunctionComponent, useState } from "react";
import InformationContainer from "@/components/InformationContainer";
import { CircleHelp } from "lucide-react";
import TextInput from "./TextInput";

interface HardwarePasswordProps {
  name?: string;
}

const HardwarePassword: FunctionComponent<HardwarePasswordProps> = ({
  name,
}) => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSavePasswordClick = () => {
    alert("Password saved");
  };

  return (
    <InformationContainer
      name={
        <div className="flex items-center gap-1">
          Senha
          <CircleHelp size={14} className="mb-4" />
        </div>
      }
      tooltip="A senha precisa conter exatamente 6 caracteres alfanuméricos (letras e números)."
      value={
        <TextInput
          value={password}
          onChange={handlePasswordChange}
          onSave={handleSavePasswordClick}
          placeholder="Digite sua Senha"
          name={name}
          maxLength={6}
          minLength={6}
          required
        />
      }
    />
  );
};

export default HardwarePassword;
