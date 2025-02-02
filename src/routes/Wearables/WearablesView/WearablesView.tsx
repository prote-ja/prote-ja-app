import { FunctionComponent } from "react";
import { ChartConfig } from "@/components/ui/chart";
import LineChartComponent from "./LineChartComponents";
import AlertComponent from "@/components/AlertComponent";
import {
  AlertCircle,
  AlertTriangle,
  Footprints,
  Settings,
  Share2,
  Wifi,
  WifiOff,
} from "lucide-react";
import TableComponent from "./TableComponent";
import { Link, useParams } from "react-router";
import { useWearable } from "@/hooks/useWearable";
import WearableAvatar from "@/components/WearableAvatar";
import HorizontalDivider from "@/components/HorizontalDivider";
import { Button } from "@/components/ui/button";

const pingData = [
  { time: "13:40", location: "Totem da sala" },
  { time: "14:10", location: "Totem do corredor" },
  { time: "15:30", location: "Totem do jardim" },
  // Adicione mais pings aqui
];

const chartData = [
  { time: "09:00", value: 400 },
  { time: "09:15", value: 300 },

  { time: "10:15", value: 186 },
  { time: "11:00", value: 237 },
  { time: "11:15", value: 73 },
  { time: "11:30", value: 209 },

  { time: "11:00", value: 237 },
  { time: "11:15", value: 73 },
  { time: "11:00", value: 200 },
  { time: "12:00", value: 214 },
];

const chartConfig = {
  value: {
    label: "Bateria",
    color: "white",
  },
} satisfies ChartConfig;

interface WearablesViewProps {}

const WearablesView: FunctionComponent<WearablesViewProps> = () => {
  const { id } = useParams();
  const { wearable, loading } = useWearable(id);

  const isConnected = wearable?.status === "active";

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!wearable) {
    return <div>Pulseira não encontrada</div>;
  }

  return (
    <div className="space-y-4 w-full flex flex-col items-center text-white">
      {/* Wearable Profile */}
      <div className="w-full">
        <div className="flex justify-center gap-2 md:gap-4 place-items-center">
          <WearableAvatar
            avatarUrl={wearable.avatar_url}
            name={wearable.name}
          />
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center">
              <h1 className="text-xl line-clamp-2">{wearable.name}</h1>
              <div className="flex gap-1">
                <Link to={`/dashboard/share/${wearable.id}`}>
                  <Button
                    variant={"ghost"}
                    className="w-10 h-10 md:w-auto md:h-auto [&_svg]:size-5"
                  >
                    <Share2 />
                    <span className="hidden md:block">Compartilhar</span>
                  </Button>
                </Link>
                <Link to={`/dashboard/edit-wearable/${wearable.id}`}>
                  <Button
                    variant={"ghost"}
                    className="w-10 h-10 md:w-auto md:h-auto [&_svg]:size-5"
                  >
                    <Settings />
                    <span className="hidden md:block">Editar</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                {isConnected ? (
                  <Wifi className="w-8 h-8 text-positive" />
                ) : (
                  <WifiOff className="w-8 h-8 text-destructive" />
                )}
                <div>
                  <p className="font-medium text-white">
                    {isConnected ? "Conectado" : "Desconectado"}
                  </p>
                  {wearable.timestamp && (
                    <p className="text-sm text-muted">
                      Ultimo ping:{" "}
                      {new Date(wearable.timestamp).toLocaleTimeString()}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1 text-white">
                <Footprints />
                2300
              </div>
            </div>
          </div>
        </div>
        <HorizontalDivider className="mt-4" />
      </div>

      {/* Alert */}
      <div className="w-full">
        <AlertComponent
          variant="warning"
          iconTitle={AlertTriangle}
          title="Queda Detectada"
          description="1 hora atrás"
          buttonLabel="Informações"
          buttonRedirectUrl="/dashboard/fall-detected"
          iconButton={AlertCircle}
        />
      </div>

      {/* Table */}
      <div className="w-full">
        <TableComponent title="Histórico de Pings" data={pingData} />
      </div>

      {/* Battery level */}
      <div className="w-full">
        <LineChartComponent
          title="Status da Bateria"
          chartData={chartData}
          chartConfig={chartConfig}
        />
      </div>
    </div>
  );
};

export default WearablesView;
