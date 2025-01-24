import { ChangeEvent, FunctionComponent, useState } from "react";

import { CircleHelp } from "lucide-react";
import FieldContainer from "./FieldContainer/FieldContainer";
import FieldContainerInput from "./FieldContainer/FieldContainerInput";

interface MacInputProps {
  name: string;
}

const MacInput: FunctionComponent<MacInputProps> = ({ name }) => {
  const [macAddress, setMacAddress] = useState("");

  const handleMacChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleaned = value.replace(/[^0-9A-Fa-f]/g, "");
    const formatted = cleaned
      .match(/.{1,2}/g)
      ?.join(":")
      .substring(0, 17);
    setMacAddress(formatted || "");
  };

  return (
    <FieldContainer
      title={
        <div className="flex items-center gap-1">
          MAC
          <CircleHelp size={14} className="mb-4" />
        </div>
      }
      tooltip="O endereço MAC precisa ter o formato XX:XX:XX:XX:XX:XX cada conjunto de caracteres XX pode ser composto por números ou letras (0-9, a-f)."
    >
      <FieldContainerInput
        value={macAddress}
        onChange={handleMacChange}
        type="text"
        placeholder="00:00:00:00:00:00"
        name={name}
        required
        closedSize="sm"
      />
    </FieldContainer>
  );
};

export default MacInput;
