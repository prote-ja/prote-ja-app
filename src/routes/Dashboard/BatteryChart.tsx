import { FC } from "react";
import { PieChart, Pie, Cell } from "recharts";

interface BatteryChartProps {
  batteryLevel: number;
}

const BatteryChart: FC<BatteryChartProps> = ({ batteryLevel }) => {
  const data = [
    { name: "Battery", value: batteryLevel },
    { name: "Empty", value: 100 - batteryLevel },
  ];

  const getBatteryColor = (level: number) => {
    if (level > 50) return "#4caf50";
    if (level > 20) return "#ff9800";
    return "#f44336";
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <PieChart width={200} height={100} className="w-full h-full">
        <Pie
          data={data}
          cx="50%"
          cy="100%"
          startAngle={180}
          endAngle={0}
          innerRadius={50}
          outerRadius={80}
          paddingAngle={3}
          dataKey="value"
          fill="transparent"
          stroke="none"
        >
          <Cell key="battery" fill={getBatteryColor(batteryLevel)} />
          <Cell key="empty" fill="#2b2c28" />
        </Pie>
      </PieChart>
      <p className="text-lg font-semibold mt-2">{batteryLevel}%</p>
    </div>
  );
};

export default BatteryChart;
