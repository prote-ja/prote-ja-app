"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface LineChartProps {
  title: string;
  description?: string;
  chartData: { time: string; value: number }[];
  chartConfig: ChartConfig;
}
import BlurredContainer from "@/components/BlurredContainer";

const LineChartComponent: React.FC<LineChartProps> = ({
  title,
  description,
  chartData,
  chartConfig,
}) => {
  return (
    <BlurredContainer titleBackground title={title} border>
      <CardHeader>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart data={chartData}>
            <CartesianGrid vertical={false} stroke="rgba(255, 255, 255, 0.2)" />
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
              content={<ChartTooltipContent className="text-white " />}
            />
            <defs>
              <linearGradient id="fillAreaOne" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="white" stopOpacity={0.8} />
                <stop
                  offset="95%"
                  stopColor="hsla(var(--positive))"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillAreaTwo" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="white" stopOpacity={0.8} />
                <stop offset="95%" stopColor="white" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="value"
              type="natural"
              fill="url(#fillAreaOne)"
              fillOpacity={0.4}
              stroke="white"
              stackId="a"
            />
            <Area
              dataKey="valueTwo"
              type="natural"
              fill="url(#fillAreaTwo)"
              fillOpacity={0.4}
              stroke="white"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </BlurredContainer>
  );
};

export default LineChartComponent;
