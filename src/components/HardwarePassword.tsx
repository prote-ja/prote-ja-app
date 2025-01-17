import React, { useState } from "react";
import InformationContainer from "@/components/InformationContainer";
import { CircleHelp } from "lucide-react";
import TextInput from "./TextInput";

const HardwarePassword: React.FC = () => {
  const [password, setPassword] = useState("Senha1");

  const isValidPassword = (password: string): boolean => {
    const passwordRegex = /^[a-zA-Z0-9]{6}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (value: string) => {
    const cleaned = value.replace(/[^a-zA-Z0-9]/g, "");
    setPassword(cleaned.substring(0, 6));
  };

  const handleSavePasswordClick = () => {
    if (isValidPassword(password)) {
      alert("Password saved");
    } else {
      alert("Password must be exactly 6 alphanumeric characters.");
    }
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
          valid={isValidPassword(password)}
          value={password}
          onChange={handlePasswordChange}
          onSave={handleSavePasswordClick}
          placeholder="Digite sua Senha"
          errorMessage="A senha precisa ter exatamente 6 caracteres alfanuméricos."
        />
      }
    />
  );
};

export default HardwarePassword;
