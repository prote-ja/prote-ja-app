import { FunctionComponent } from "react";
import AlertComponent from "@/components/AlertComponent";
import ElementTitleHeader from "@/components/ElementTitleHeader";

import { AlertCircle, AlertTriangle } from "lucide-react";
interface AlertPageProps {}

const AlertPage: FunctionComponent<AlertPageProps> = () => {
  return (
    <div className="space-y-4 w-full py-4">
      <div className="flex-col space-y-4 px-2 ">
        <ElementTitleHeader
          title="Alertas"
          description="Aqui você pode ver todos os alertas do sistema."
          className="text-white"
        />
        <AlertComponent
          variant="warning"
          iconTitle={AlertTriangle}
          title="Queda Detectada"
          description="1 hora atrás"
          buttonLabel="Informações"
          buttonRedirectUrl="/dashboard/fall-detected"
          iconButton={AlertCircle}
        />
        <AlertComponent
          variant="default"
          iconTitle={AlertTriangle}
          title="A bateria está acabando"
          description="30 min atrás"
          buttonLabel="Informações"
          buttonRedirectUrl="/dashboard/wearable/wearable-0"
          iconButton={AlertCircle}
        />
        <AlertComponent
          variant="default"
          iconTitle={AlertTriangle}
          title="A bateria está acabando"
          description="1 hora atrás"
          buttonLabel="Informações"
          buttonRedirectUrl="/dashboard/wearable/wearable-0"
          iconButton={AlertCircle}
        />
        <AlertComponent
          variant="sucess"
          iconTitle={AlertTriangle}
          title="A bateria está carregando"
          description="2 hora atrás"
          buttonLabel="Informações"
          buttonRedirectUrl="/dashboard/fall-detected"
          iconButton={AlertCircle}
        />{" "}
        <AlertComponent
          variant="destructive"
          iconTitle={AlertTriangle}
          title="Dispositivo desconectado"
          description="2 dias atrás"
          buttonLabel="Informações"
          buttonRedirectUrl="/dashboard/fall-detected"
          iconButton={AlertCircle}
        />
      </div>
    </div>
  );
};

export default AlertPage;
