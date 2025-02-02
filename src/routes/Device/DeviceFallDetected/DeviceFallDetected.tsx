import { FunctionComponent } from "react";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import { TriangleAlert, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useWearable } from "@/hooks/useWearable";
import WearableConnectionComponent from "@/components/WearableConnectionComponent";

interface DeviceFallDetectedProps {}

const DeviceFallDetected: FunctionComponent<DeviceFallDetectedProps> = () => {
  const { id } = useParams();
  const { wearable, loading } = useWearable(id);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!wearable) {
    return <div>Pulseira não encontrada</div>;
  }

  return (
    <div className="space-y-4 z-10  ">
      <AnimatedBackground isBlack={true} />
      <div className="flex flex-col items-start text-white z-10 ">
        <div className="flex justify-center w-full">
          <ElementTitleHeader
            className="text-white z-10 px-2 mb-6 mt-6 text-center"
            title="Queda Detectada"
            titleAppend={
              <TriangleAlert className="stroke-black fill-red-600 animate-blink w-8 h-8" />
            }
          />
        </div>
        <div className="w-full z-10">
          <WearableConnectionComponent wearable={wearable} />
        </div>
        <ElementTitleHeader
          className="text-white z-10 mt-6 text-left"
          title="Localização estimada"
          description={`O totem a seguir recebeu o sinal de queda do usuário ${wearable.name}`}
        />
        <div className="h-44 flex gap-3 pb-4 px-2 mt-6">
          {/* {totems.map((totem, index) => (
            <div key={`totem-${index}`} className="justify-center">
              <TotemConnectionComponent
                totem={totem}
              />
            </div>
          ))} */}
        </div>
        <hr className=" z-10 " />
        <ElementTitleHeader
          className="text-white z-10 px-2 mt-6 text-left"
          title="Contato de Emergência"
          description="Dique rápido para o contato de emergência cadastrado"
        />

        <Button
          variant={"secondary"}
          className="px-2 w-44 h-auto z-10 mt-6 mx-auto sm:mx-0 sm:w-64 flex justify-center items-center"
          onClick={() => (window.location.href = "tel:+1234567890")}
        >
          <PhoneCall />
          <span className="sm:block z-10">Discar Agora</span>
        </Button>
      </div>
    </div>
  );
};

export default DeviceFallDetected;
