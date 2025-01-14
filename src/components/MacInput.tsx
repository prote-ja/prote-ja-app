import React from "react";
import InformationContainer from "@/components/InformationContainer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { CircleHelp } from "lucide-react";
import TextInput from "./TextInput";

const MacInput: React.FC = () => {
  return (
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
              conjunto de caracteres XX pode ser composto por números ou letras
              (0-9, a-f) .
            </PopoverContent>
          </Popover>
        </div>
      }
      value={<TextInput />}
    />
  );
};

export default MacInput;
