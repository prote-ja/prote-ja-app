import { FunctionComponent, useState } from "react";
import InformationContainer from "@/components/InformationContainer";
import { SatelliteDish } from "lucide-react";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import MacInput from "@/components/MacInput";
import HardwarePassword from "@/components/HardwarePassword";
import Totem300 from "@/assets/totem_300.png";
import TextInput from "@/components/TextInput";
interface AddTotemProps {}

const AddTotem: FunctionComponent<AddTotemProps> = () => {
  const [totemName, setTotemName] = useState("");
  const handleTotemNameChange = (value: string) => {
    setTotemName(value);
  };
  return (
    <div className="space-y-4 max-w-lg mx-auto py-4">
      {/* Imagem do Totem */}

      <div className="flex flex-col items-center">
        <ElementTitleHeader
          className="pb-2 text-white"
          title="Totem"
          titleAppend={
            <div className="flex gap-2 border rounded-md px-2 items-center text-lg font-medium leading-none h-7">
              <SatelliteDish className="stroke-white w-5 h-5" />
            </div>
          }
        />

        <img src={Totem300} alt="Totem" className="w-64 h-auto" />
      </div>

      {/* Campo Nome */}
      <InformationContainer
        name="Nome"
        value={
          <TextInput
            value={totemName}
            placeholder="Nome do Totem"
            onChange={handleTotemNameChange}
            errorMessage={"Número de telefone inválido."}
            valid={true}
          />
        }
      />
      {/* Campo MAC */}
      <MacInput name="mac" />

      {/* Campo Senha */}
      <HardwarePassword name="password" />
    </div>
  );
};

export default AddTotem;
