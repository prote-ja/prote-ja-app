import { FunctionComponent } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import { TriangleAlert, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

import WearableConnectionComponent from "../Dashboard/WearableConnectionComponent";
import { useParams } from "react-router";
import { useWearable } from "@/hooks/useWearable";

interface OutOfRangeProps {}

const OutOfRange: FunctionComponent<OutOfRangeProps> = () => {
  const { id } = useParams();
  const { wearable, loading } = useWearable(id);
  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!wearable) {
    return <div>Pulseira não encontrada</div>;
  }
  return (
    <div className="relative w-full max-w-screen-xl flex flex-col h-[calc(100dvh-4rem)] mx-auto text-white ">
      <AnimatedBackground isBlack={true} />
      <ElementTitleHeader
        className="text-white z-10 px-2 mb-6 mt-6"
        title="Fora de Área"
        titleAppend={
          <TriangleAlert className="stroke-black fill-red-600 animate-blink w-8 h-8" />
        }
      />
      <div className="grid px-2 gap-3 w-full max-w-screen-xl mx-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <WearableConnectionComponent wearable={wearable} />
      </div>
      <ElementTitleHeader
        className="text-white z-10 px-2 mt-6"
        title="Localização estimada"
        description={`O totem a seguir não conseguiu localizar o usuário ${wearable.name}`}
      />
      <div className="h-44 flex gap-3 pb-4 px-2 mt-6">
        {/* {totems.map((totem, index) => (
          <div key={`totem-${index}`} className="justify-center">
            <TotemConnectionComponent />
          </div>
        ))} */}
      </div>
      <hr className=" z-10 " />
      <ElementTitleHeader
        className="text-white z-10 px-2 mt-6"
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
  );
};

export default OutOfRange;
