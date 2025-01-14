import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DefaultInputProps {
  inputState: string;
  placeholder: string;
  onSave: (newValue: string) => void;
}

const DefaultInput: React.FC<DefaultInputProps> = ({
  inputState,
  placeholder,
  onSave,
}) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(inputState);
  const [error, setError] = useState("");

  // Regex para verificar se o texto tem mais de 32 caracteres
  const maxLengthRegex = /^.{0,32}$/;

  const handleSaveClick = () => {
    if (value.length > 32) {
      setError("O valor não pode exceder 32 caracteres.");
    } else {
      setError("");
      onSave(value);
      setEditing(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (maxLengthRegex.test(newValue)) {
      setValue(newValue);
      setError(""); // Limpar erro se o valor for válido
    } else {
      setError("O valor não pode exceder 32 caracteres.");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-1.5">
      {editing ? (
        <div className="flex items-center gap-1.5">
          <Input
            value={value}
            onChange={handleChange} // Usando a função de mudança com regex
            placeholder={placeholder}
            className="w-64 sm:w-64"
          />
          <Button
            variant="secondary"
            onClick={handleSaveClick}
            className="w-full sm:w-auto"
          >
            Salvar
          </Button>
        </div>
      ) : (
        <Button
          variant="secondary"
          onClick={() => setEditing(true)}
          className="w-32 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {value}
        </Button>
      )}
      {error && <span className="text-red-500 text-sm">{error}</span>}{" "}
      {/* Mensagem de erro em vermelho */}
    </div>
  );
};

export default DefaultInput;
