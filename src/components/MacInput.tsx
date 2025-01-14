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

const MacInput: React.FC = () => {
  const [macAddress, setMacAddress] = useState("00:00:00:00:00:00");
  const [editingMac, setEditingMac] = useState(false);

  const isValidMac = (mac: string): boolean => {
    const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return macRegex.test(mac);
  };

  const handleMacChange = (value: string) => {
    const cleaned = value.replace(/[^0-9A-Fa-f]/g, "");
    const formatted = cleaned
      .match(/.{1,2}/g)
      ?.join(":")
      .substring(0, 17);
    setMacAddress(formatted || "");
  };

  const handleEditMacClick = () => setEditingMac(true);
  const handleSaveMacClick = () => {
    if (isValidMac(macAddress)) {
      setEditingMac(false);
    }
  };

  return (
    <div className="space-y-4">
      <InformationContainer
        name={
          <div className="flex items-center gap-1">
            <span>MAC</span>
            <Popover>
              <PopoverTrigger>
                <CircleHelp
                  size={14}
                  className="stroke-white translate-y-[-5px] cursor-pointer hover:scale-110 transition-transform duration-200"
                />
              </PopoverTrigger>
              <PopoverContent align="start" side="bottom" className="p-2">
                O endereço MAC precisa ter o formato XX:XX:XX:XX:XX:XX cada
                conjunto de caracteres XX pode ser composto por números ou
                letras (0-9, a-f) .
              </PopoverContent>
            </Popover>
          </div>
        }
        value={
          editingMac ? (
            <div className="flex flex-col sm:flex-row items-center gap-1.5">
              <Input
                value={macAddress}
                onChange={(e) => handleMacChange(e.target.value)}
                placeholder="Digite o endereço MAC"
                className="w-64 sm:w-64"
              />
              <Button
                variant="secondary"
                onClick={handleSaveMacClick}
                className="w-full sm:w-auto"
                disabled={!isValidMac(macAddress)}
              >
                Salvar
              </Button>
              {!isValidMac(macAddress) && (
                <span className="text-red-500 text-sm mt-2">
                  O endereço MAC precisa ter o formato XX:XX:XX:XX:XX:XX
                </span>
              )}
            </div>
          ) : (
            <Button
              variant="secondary"
              onClick={handleEditMacClick}
              className="w-32 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
              title={macAddress}
            >
              {macAddress}
            </Button>
          )
        }
      />
    </div>
  );
};

export default MacInput;
