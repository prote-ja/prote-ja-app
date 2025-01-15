import React, { useState } from "react";
import InformationContainer from "@/components/InformationContainer";

import { CircleHelp } from "lucide-react";
import TextInput from "./TextInput";

const MacInput: React.FC = () => {
  const [macAddress, setMacAddress] = useState("00:00:00:00:00:00");

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
  const handleSaveMacClick = () => {
    if (isValidMac(macAddress)) {
      alert("saved");
    }
  };

  return (
    <InformationContainer
      name={
        <div className="flex items-center gap-1">
          MAC
          <CircleHelp size={14} className="mb-4" />
        </div>
      }
      tooltip="O endereço MAC precisa ter o formato XX:XX:XX:XX:XX:XX cada conjunto de caracteres XX pode ser composto por números ou letras (0-9, a-f)."
      value={
        <TextInput
          valid={isValidMac(macAddress)}
          value={macAddress}
          onChange={handleMacChange}
          onSave={handleSaveMacClick}
          placeholder="Digite o endereço MAC"
          errorMessage="O endereço MAC precisa ter o formato XX:XX:XX:XX:XX:XX"
        />
      }
    />
  );
};

export default MacInput;
