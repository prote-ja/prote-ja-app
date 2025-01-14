import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InformationContainer from "@/components/InformationContainer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { CircleHelp } from "lucide-react";

const HardwarePassword: React.FC = () => {
  const [hardwarePassword, setHardwarePassword] = useState("Senha");
  const [editingPassword, setEditingPassword] = useState(false);

  // Validação: apenas 6 caracteres alfanuméricos
  const isValidPassword = (password: string): boolean => {
    const passwordRegex = /^[A-Za-z0-9]{6}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (value: string) => {
    // Limita apenas caracteres alfanuméricos e restringe a 6 caracteres
    const cleaned = value.replace(/[^A-Za-z0-9]/g, "").substring(0, 6);
    setHardwarePassword(cleaned || "");
  };

  const handleEditPasswordClick = () => setEditingPassword(true);
  const handleSavePasswordClick = () => {
    if (isValidPassword(hardwarePassword)) {
      setEditingPassword(false);
    }
  };

  return (
    <div className="space-y-4">
      <InformationContainer
        name={
          <div className="flex items-center gap-1">
            <span>Senha</span>
            <Popover>
              <PopoverTrigger>
                <CircleHelp
                  size={14}
                  className="stroke-white translate-y-[-5px] cursor-pointer hover:scale-110 transition-transform duration-200"
                />
              </PopoverTrigger>
              <PopoverContent align="start" side="bottom" className="p-2">
                A senha de hardware deve conter exatamente 6 caracteres, podendo
                ser números ou letras (A-Z, a-z, 0-9).
              </PopoverContent>
            </Popover>
          </div>
        }
        value={
          editingPassword ? (
            <div className="flex flex-col sm:flex-row items-center gap-1.5">
              <Input
                value={hardwarePassword}
                onChange={(e) => handlePasswordChange(e.target.value)}
                placeholder={""}
                className="w-64 sm:w-64"
              />
              <Button
                variant="secondary"
                onClick={handleSavePasswordClick}
                className="w-full sm:w-auto"
                disabled={!isValidPassword(hardwarePassword)}
              >
                Salvar
              </Button>
              {!isValidPassword(hardwarePassword) && (
                <span className="text-red-500 text-sm mt-2">
                  A senha precisa conter exatamente 6 caracteres alfanuméricos.
                </span>
              )}
            </div>
          ) : (
            <Button
              variant="secondary"
              onClick={handleEditPasswordClick}
              className="w-32 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
              title={hardwarePassword}
            >
              {hardwarePassword}
            </Button>
          )
        }
      />
    </div>
  );
};

export default HardwarePassword;
