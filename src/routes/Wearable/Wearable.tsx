import { FunctionComponent } from "react";
import { ChartConfig } from "@/components/ui/chart";
import LineChartComponent from "./LineChartComponents";
import AlertComponent from "@/components/AlertComponent";
import { AlertCircle, AlertTriangle } from "lucide-react";
import WearableConnectionComponent from "../Dashboard/WearableConnectionComponent";
import TableComponent from "./TableComponent";
import { useParams } from "react-router";
import { useWearable } from "@/hooks/useWearable";

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

interface WearableUserProps {}

const WearableUser: FunctionComponent<WearableUserProps> = () => {
  const { id } = useParams();
  const { wearable, loading } = useWearable(id);

  const params = useParams<{ id: string }>();
  console.log(params);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!wearable) {
    return <div>Pulseira não encontrada</div>;
  }

  return (
    <div className="space-y-4 w-full py-4 flex flex-col items-center">
      {/* Wearable Profile */}
      <div className="w-full">
        <div className="flex justify-center mb-4">
          <WearableConnectionComponent wearable={wearable} />
        </div>

        <hr className="w-full" />
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

export default WearableUser;
