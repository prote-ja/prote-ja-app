import { FunctionComponent, useState } from "react";
import InformationContainer from "@/components/InformationContainer";

import { CircleHelp } from "lucide-react";
import TextInput from "./TextInput";
import { checkValidMac } from "@/lib/helpers";

interface MacInputProps {
  name: string;
}

const MacInput: FunctionComponent<MacInputProps> = ({ name }) => {
  const [macAddress, setMacAddress] = useState("");

  const handleMacChange = (value: string) => {
    const cleaned = value.replace(/[^0-9A-Fa-f]/g, "");
    const formatted = cleaned
      .match(/.{1,2}/g)
      ?.join(":")
      .substring(0, 17);
    setMacAddress(formatted || "");
  };
  const handleSaveMacClick = () => {
    if (checkValidMac(macAddress)) {
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
    >
      <TextInput
        valid={checkValidMac(macAddress)}
        value={macAddress}
        onChange={handleMacChange}
        onSave={handleSaveMacClick}
        placeholder="00:00:00:00:00:00"
        errorMessage="O endereço MAC precisa ter o formato XX:XX:XX:XX:XX:XX"
        name={name}
        required
      />
    </InformationContainer>
  );
};

export default MacInput;
