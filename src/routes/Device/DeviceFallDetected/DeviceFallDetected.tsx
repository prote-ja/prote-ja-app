import { FunctionComponent } from "react";
import { MapPin, Clock, Bell, Phone, ShieldAlert, Wifi } from "lucide-react";
import { useParams } from "react-router";
import { useWearable } from "@/hooks/useWearable";
import BentoItem from "@/components/BentoBox";
import BentoTitle from "./BentoTitle";
import BentoUser from "./BentoUser";
import HistoryBar from "./HistoryBar";
import Totem from "@/assets/totem_300.png";
import { Button } from "@/components/ui/button";
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
  const historyData = [
    { time: "13:40", location: "Sala" },
    { time: "13:20", location: "Sala" },
    { time: "13:00", location: "Jardim" },
    { time: "12:40", location: "Jardim" },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 z-10">
      <BentoTitle className="" titleClassName="text-2xl" />

      <BentoUser
        avatarUrl={wearable.avatar_url}
        name={wearable.name}
        heartRate={120}
        className="col-span-1 bg-white/30 text-white "
        avatarClassName="bg-white/30"
        nameClassName="text-white"
      />
      <div className="grid grid-cols-2 gap-4">
        <BentoItem
          title="Histórico"
          className="col-span-1 bg-white/30 text-white "
          icon={<Clock size={20} />}
          bentoBackground="bg-white/30"
          textClassName="text-xl"
        >
          <div className="mt-4">
            {historyData.map((item, index) => (
              <HistoryBar
                key={index}
                time={item.time}
                location={item.location}
              />
            ))}
          </div>
        </BentoItem>
        <BentoItem
          title="Localização"
          className="relative col-span-1 bg-white/30 text-white flex flex-col"
          icon={<MapPin size={20} />}
          bentoBackground="bg-white/30"
          textClassName="text-xl"
        >
          <div className="flex items-center justify-center flex-grow">
            <img
              src={Totem}
              alt="Totem"
              className="w-auto h-auto max-h-[80%] sm:w-[80%] sm:p-4"
            />
          </div>
          {/* Ícone de Wi-Fi alinhado com os ícones de bateria e coração */}
          <div className="absolute bottom-16 right-2">
            <Wifi className="w-8 h-8 text-[#4ADE80]" />
          </div>
          <div className="bg-white p-4 text-center w-full absolute bottom-0 left-0">
            <span className="text-[#624DE2] font-semibold text-xl">Sala</span>
          </div>
        </BentoItem>
        <BentoItem
          title="Ações Rápidas"
          icon={<ShieldAlert size={20} />}
          className="col-span-2 bg-white/30 text-white  "
          bentoBackground="bg-white/30"
          textClassName="text-xl text-center"
        >
          <div className="flex justify-center gap-4">
            <Button variant="secondary">
              <Phone /> Disque Emergência
            </Button>
            <Button variant="secondary">
              <Bell /> Alertar Pulseira
            </Button>
          </div>
        </BentoItem>
      </div>
    </div>
  );
};

export default DeviceFallDetected;
