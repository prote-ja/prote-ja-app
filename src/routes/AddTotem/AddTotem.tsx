import { FunctionComponent, useState } from "react";
import { useSearchParams } from "react-router";
import InformationContainer from "@/components/InformationContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { CircleHelp, SatelliteDish } from "lucide-react";
import ElementTitleHeader from "@/components/ElementTitleHeader";

interface AddTotemProps {}

const AddTotem: FunctionComponent<AddTotemProps> = () => {
  const [search] = useSearchParams();

  const [editingName, setEditingName] = useState(false);
  const [totemName, setTotemName] = useState("Nome do Totem");

  const [editingMac, setEditingMac] = useState(false);
  const [macAddress, setMacAddress] = useState("00:00:00:00:00:00");

  const [editingPassword, setEditingPassword] = useState(false);
  const [password, setPassword] = useState("Senha");
  const handleEditNameClick = () => setEditingName(true);
  const handleSaveNameClick = () => setEditingName(false);

  const handleEditMacClick = () => setEditingMac(true);
  const handleSaveMacClick = () => setEditingMac(false);

  const handleEditPasswordClick = () => setEditingPassword(true);
  const handleSavePasswordClick = () => setEditingPassword(false);

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
          editingName ? (
            <div className="flex flex-col sm:flex-row items-center gap-1.5">
              <Input
                value={totemName}
                onChange={(e) => setTotemName(e.target.value)}
                placeholder="Digite o nome do Totem"
                className="w-64 sm:w-64"
              />
              <Button
                variant="secondary"
                onClick={handleSaveNameClick}
                className="w-full sm:w-auto"
              >
                Salvar
              </Button>
            </div>
          ) : (
            <Button
              variant="secondary"
              onClick={handleEditNameClick}
              className="w-32 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
              title={totemName}
            >
              {totemName}
            </Button>
          )
        }
      />

      {/* Campo MAC */}
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
                Aqui será o conteúdo do popover! Você pode adicionar mais
                informações ou controles.
              </PopoverContent>
            </Popover>
          </div>
        }
        value={
          editingMac ? (
            <div className="flex flex-col sm:flex-row items-center gap-1.5">
              <Input
                value={macAddress}
                onChange={(e) => setMacAddress(e.target.value)}
                placeholder="Digite o endereço MAC"
                className="w-64 sm:w-64"
              />
              <Button
                variant="secondary"
                onClick={handleSaveMacClick}
                className="w-full sm:w-auto"
              >
                Salvar
              </Button>
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

      {/* Campo Senha */}
      <InformationContainer
        name="Senha"
        value={
          editingPassword ? (
            <div className="flex flex-col sm:flex-row items-center gap-1.5">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha"
                className="w-full sm:w-64"
              />
              <Button
                variant="secondary"
                onClick={handleSavePasswordClick}
                className="w-full sm:w-auto"
              >
                Salvar
              </Button>
            </div>
          ) : (
            <Button
              variant="secondary"
              onClick={handleEditPasswordClick}
              className="w-32 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
              title={password}
            >
              {password}
            </Button>
          )
        }
      />
    </div>
  );
};

export default AddTotem;
