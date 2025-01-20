import { FunctionComponent, useEffect } from "react";
import { Database } from "@/types/database.types";
import { ChartConfig } from "@/components/ui/chart";
import LineChartComponent from "./LineChartComponents";
import AlertComponent from "@/components/AlertComponent";
import { AlertCircle, AlertTriangle } from "lucide-react";
import WearableConnectionComponent from "../Dashboard/WearableConnectionComponent";
import { getAllWearables } from "@/db/wearables";
import TableComponent from "./TableComponent";
import { useParams } from "react-router";
type WearablesType = {
  name: string;
  wearableStatus: Database["public"]["Enums"]["wearable_status"];
  avatarUrl: string;
  batteryLevel: number;
  lastPingTime: Date;
  pedometer: number;
};
const pingData = [
  { time: "13:40", location: "Totem da sala" },
  { time: "14:10", location: "Totem do corredor" },
  { time: "15:30", location: "Totem do jardim" },
  // Adicione mais pings aqui
];
const wearables: WearablesType[] = [
  {
    name: "Joana Santa Maria",
    wearableStatus: "inactive",
    avatarUrl:
      "https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",
    batteryLevel: 40,
    lastPingTime: new Date(),
    pedometer: 23827,
  },
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
  useEffect(() => {
    getAllWearables();
  }, []);
  const params = useParams<{ id: string }>();
  console.log(params);
  return (
    <div className="space-y-4 w-full py-4 flex flex-col items-center">
      {/* Wearable Profile */}
      <div className="w-full">
        {wearables.map((wearable, index) => (
          <div key={`wearable-${index}`} className="flex justify-center mb-4">
            <WearableConnectionComponent
              name={wearable.name}
              wearableStatus={wearable.wearableStatus}
              avatarUrl={wearable.avatarUrl}
              batteryLevel={wearable.batteryLevel}
              lastPingTime={wearable.lastPingTime}
              pedometer={wearable.pedometer}
            />
          </div>
        ))}
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
