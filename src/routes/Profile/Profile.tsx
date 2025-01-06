import ElementTitleHeader from "@/components/ElementTitleHeader";
import InformationContainer from "@/components/InformationContainer";
import { Button } from "@/components/ui/button";
import { signOut } from "@/db/auth";
import { KeyRound, LogOut } from "lucide-react";
import { FunctionComponent } from "react";
import { toast } from "react-toastify";
import AlertConfiguration from "./AlertConfiguration";
import { Database } from "@/types/database.types";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const name = "João da silva";
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
    <div className="text-white max-w-md mx-auto space-y-4 py-4">
      <ElementTitleHeader
        className="px-2"
        title="Meu perfil"
        endElement={
          <Button variant={"secondary"} size={"sm"} onClick={handleSignOut}>
            Sair <LogOut />
          </Button>
        }
      />

      <div className="space-y-2">
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

      <hr className="mt-4" />

      <ElementTitleHeader className="px-2" title="Configuração de alertas" />

      <div className="px-2">
        <div className="space-y-4 mt-4">
          <AlertConfiguration
            title="Detecção de quedas"
            onChange={handleAlertChange}
          />
          <AlertConfiguration
            title="Saiu da área de segurança"
            onChange={handleAlertChange}
          />
          <AlertConfiguration
            title="50% de bateria"
            onChange={handleAlertChange}
          />
          <AlertConfiguration
            title="5% de bateria"
            onChange={handleAlertChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
