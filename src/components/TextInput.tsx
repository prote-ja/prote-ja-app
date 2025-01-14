import { FunctionComponent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Save } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface TextInputProps {}

const TextInput: FunctionComponent<TextInputProps> = () => {
  const [macAddress, setMacAddress] = useState("00:00:00:00:00:00");
  const [editing, setEditing] = useState(false);

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
      setEditing(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-1.5">
      <Input
        value={macAddress}
        onChange={(e) => handleMacChange(e.target.value)}
        placeholder="Digite o endereço MAC"
        className="w-64 sm:w-64"
        onFocus={(e) => {
          setEditing(true);
        }}
        onBlur={(e) => {
          setEditing(false);
        }}
      />
      {editing && (
        <>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="secondary"
                onClick={handleSaveMacClick}
                disabled={!isValidMac(macAddress)}
                size={"icon"}
              >
                <Check />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {!isValidMac(macAddress) && (
                <span className="text-red-500 text-sm mt-2">
                  O endereço MAC precisa ter o formato XX:XX:XX:XX:XX:XX
                </span>
              )}
            </TooltipContent>
          </Tooltip>
        </>
      )}
    </div>
  );
};
export default TextInput;
