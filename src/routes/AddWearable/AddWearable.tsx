import { FunctionComponent, useState } from "react";
import { useSearchParams } from "react-router";

import { Link } from "lucide-react";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import MacInput from "@/components/MacInput";
import HardwarePassword from "@/components/HardwarePassword";

interface AddWearableProps {}

const AddWearable: FunctionComponent<AddWearableProps> = () => {
  const [search] = useSearchParams();

  return (
    <div className="space-y-4">
      {/* Imagem do Totem */}

      <div className="flex flex-col items-center">
        <ElementTitleHeader
          className="pb-2 text-white"
          title="Pulseira"
          titleAppend={
            <div className="flex gap-2 border rounded-md px-2 items-center text-lg font-medium leading-none h-7">
              <Link className="stroke-white w-5 h-5" />
            </div>
          }
        />

        <img
          src="src\assets\wristband_300.png"
          alt="Totem"
          className="w-64 h-auto"
        />
      </div>

      {/* Campo MAC */}
      <MacInput />

      {/* Campo Senha */}
      <HardwarePassword />
    </div>
  );
};

export default AddWearable;
