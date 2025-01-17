import ElementTitleHeader from "@/components/ElementTitleHeader";
import InformationContainer from "@/components/InformationContainer";
import { Button } from "@/components/ui/button";
import { signOut } from "@/db/auth";
import { CircleUser, KeyRound, LogOut } from "lucide-react";
import { FunctionComponent, Suspense, useState } from "react";
import { toast } from "react-toastify";
import AlertConfiguration from "./AlertConfiguration";
import { Database } from "@/types/database.types";
import WearableRefreshRate from "@/components/Sliders/WearableRefreshRate";
import BatteryAlert from "@/components/Sliders/BatteryAlert";
import pt_BR from "react-phone-number-input/locale/pt-BR";
import { Input } from "@/components/ui/input";
import React from "react";

const PhoneInputComponent = React.lazy(
  () => import("react-phone-number-input")
);

import HorizontalDivider from "@/components/HorizontalDivider";
interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const name = "João da silva";
  const [phone, setPhone] = useState<string | undefined>();
  const [loading] = useState<boolean>(false);

  const handleSignOut = async () => {
    const res = await signOut();

    if (res.error) {
      console.error("Error signing out: ", res.error);
      toast.error("Erro ao sair. Tente novamente.");
      return;
    }
  };

  const handleAlertChange = (
    value: Database["public"]["Enums"]["alert_types"]
  ) => {
    console.log("Alert type changed: ", value);
  };

  return (
    <div className="text-white space-y-4 px-0 sm:px-2">
      <div className="flex-col justify-items-center space-y-2 ">
        <div className="grid grid-cols-7 gap-4 items-center">
          <div className="col-span-1" />
          <div className="col-span-5 justify-items-center">
            <h1 className="text-4xl font-semibold">Meu Perfil</h1>
          </div>

          <div className="col-span-1 flex justify-end">
            <Button variant={"secondary"} size={"sm"} onClick={handleSignOut}>
              Sair <LogOut />
            </Button>
          </div>
        </div>

        <CircleUser className="h-40 w-40" strokeWidth={0.7} />
      </div>

      <div className="space-y-2 md:mx-0">
        <InformationContainer
          name="Nome"
          value={name}
          onEdit={() => {
            alert("Editando nome");
          }}
        />
        <InformationContainer
          name="Email"
          value="joao@hotmail.com"
          onEdit={() => {
            alert("Editando nome");
          }}
        />
        <InformationContainer
          name="Telefone"
          value="(24)9 9983-1283"
          onEdit={() => {
            alert("Editando nome");
          }}
        />
        <InformationContainer
          name="Senha"
          value={
            <Button variant={"secondary"} size={"sm"}>
              Alterar senha
              <KeyRound />
            </Button>
          }
        />
      </div>

      <HorizontalDivider className="sm:-mx-2 mt-8" />

      <ElementTitleHeader
        title="Configuração de alertas"
        description="Defina o tipo de alerta que será enviado quando um evento for detectado pela pulseira."
      />

      <div className="space-y-4 mt-4">
        <AlertConfiguration
          title="Taxa de atualização"
          id="fall-detection"
          onChange={handleAlertChange}
        >
          <div className="py-4 px-6">
            <WearableRefreshRate />
          </div>
        </AlertConfiguration>
        <AlertConfiguration
          id="battery-50"
          title="50% de bateria"
          onChange={handleAlertChange}
        />
        <AlertConfiguration
          title="Bateria baixa"
          id="low-battery"
          onChange={handleAlertChange}
        >
          <div className="py-4 px-6">
            <BatteryAlert />
          </div>
        </AlertConfiguration>
        <AlertConfiguration
          title="Detecção de quedas"
          id="fall-detection"
          onChange={handleAlertChange}
        />
        <AlertConfiguration
          id="out-of-area"
          title="Saiu da área de segurança"
          onChange={handleAlertChange}
        />
      </div>
      <HorizontalDivider className="sm:-mx-2 mt-8" />
      <ElementTitleHeader
        title="Contato de Emergência"
        description="Adicione um número de telefone para realizar uma discagem rápida."
      />
      <div>
        <Suspense fallback={<div>Carregando...</div>}>
          <PhoneInputComponent
            placeholder="(99) 99999-9999"
            value={phone}
            onChange={(phone: string) => setPhone(phone)}
            defaultCountry="BR"
            labels={pt_BR}
            inputComponent={Input}
            className="col-span-3 placeholder-red-200 text-black"
            autoComplete="tel"
            // labels={{ BR: "Brazil" }}
            // international
            disabled={loading}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Profile;
