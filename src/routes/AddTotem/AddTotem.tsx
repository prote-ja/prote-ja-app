import { FunctionComponent, useState } from "react";
import { useSearchParams } from "react-router";
import InformationContainer from "@/components/InformationContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SatelliteDish } from "lucide-react";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import MacInput from "@/components/MacInput";
import HardwarePassword from "@/components/HardwarePassword";
import DefaultInput from "@/components/DefaultInput";
interface AddTotemProps {}

const AddTotem: FunctionComponent<AddTotemProps> = () => {
  const [search] = useSearchParams();

  const [editingName, setEditingName] = useState(false);
  const [totemName, setTotemName] = useState("Nome do Totem");

  return (
    <div className="space-y-4">
      {/* Imagem do Totem */}

      <div className="flex flex-col items-center">
        <ElementTitleHeader
          className="pb-2 text-white"
          title="Totem"
          titleAppend={
            <div className=" flex gap-2 border rounded-md px-2 items-center text-lg font-medium leading-none h-7">
              <SatelliteDish className=" stroke-white w-5 h-5" />
            </div>
          }
        />
        <img
          src="src\assets\totem_300.png"
          alt="Totem"
          className="w-64 h-auto"
        />
      </div>

      {/* Campo Nome */}
      <InformationContainer
        name="Nome"
        value={
          <DefaultInput
            inputState={totemName}
            placeholder="Nome do Totem"
            onSave={setTotemName}
          />
        }
      />

      {/* Campo MAC */}
      <MacInput />

      {/* Campo Senha */}
      <HardwarePassword />
    </div>
  );
};

export default AddTotem;
