"use client";

import { LineChart, Line, CartesianGrid, XAxis } from "recharts";
import { CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface MutipleLineChartComponentProps {
  title: string;
  description?: string;
  chartData: {
    time: string;
    value: number;
    valueTwo: number;
    valueThree: number;
  }[];
  chartConfig: ChartConfig;
  width?: number;
  height?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}

const MutipleLineChartComponent: React.FC<MutipleLineChartComponentProps> = ({
  chartData,
  chartConfig,
}) => {
  return (
    <div>
      <CardHeader></CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart data={chartData}>
            <CartesianGrid vertical={false} stroke="rgba(255, 255, 255, 0.5)" />
            <XAxis
              dataKey="time"
              tickLine={true && { stroke: "white" }}
              axisLine={false}
              tickMargin={4}
              tickFormatter={(value) => {
                return value;
              }}
              tick={{ fill: "white", fontSize: 12 }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="white " />}
            />
            <Line
              dataKey="value"
              type="natural"
              stroke="black"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="valueTwo"
              type="natural"
              stroke="#F96900"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="valueThree"
              type="natural"
              stroke="hsla(var(--positive))"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
};

export default MutipleLineChartComponent;
