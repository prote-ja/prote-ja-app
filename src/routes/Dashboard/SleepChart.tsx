import { FC } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
interface SleepChartProps {
  sleepData: { day: string; hours: number }[];
}

const SleepChart: FC<SleepChartProps> = ({ sleepData }) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <RadarChart width={300} height={250} data={sleepData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="day" />
        <Radar
          name="Horas de Sono"
          dataKey="hours"
          stroke="#7357FF"
          fill="#7357FF"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};

export default SleepChart;
