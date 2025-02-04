"use client";

import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, Tooltip } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface HeartRateData {
  time: string;
  [person: string]: number | string;
}

interface Person {
  id: string;
  name: string;
  color: string;
}

interface HeartRateChartProps {
  data: HeartRateData[];
  people: Person[];
  className?: string;
  style?: React.CSSProperties;
  chartHeight?: number;
  chartWidth?: number;
  lineStrokeWidth?: number;
  showGrid?: boolean;
}

const HeartRateChart: React.FC<HeartRateChartProps> = ({
  data,
  people,
  className,
  style,
  chartHeight = 300,
  chartWidth = 600,
  lineStrokeWidth = 2,
  showGrid = true,
}) => {
  const chartConfig: ChartConfig = people.reduce((config, person) => {
    config[person.id] = {
      label: person.name,
      color: person.color,
    };
    return config;
  }, {} as ChartConfig);

  console.log("ChartConfig:", chartConfig); // Verifique a configuração do gráfico para ver se as cores e labels estão corretas

  return (
    <div className={className} style={style}>
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={data}
          width={chartWidth}
          height={chartHeight}
          margin={{
            left: 12,
            right: 12,
            top: 12,
            bottom: 12,
          }}
        >
          {showGrid && <CartesianGrid vertical={false} />}
          <XAxis
            dataKey="time"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 5)} // Para garantir que o eixo X seja legível
          />
          <Tooltip cursor={false} content={<ChartTooltipContent />} />
          {people.map((person) => {
            console.log(`Rendering Line for ${person.id}`); // Verifique se cada linha está sendo configurada corretamente
            return (
              <Line
                key={person.id}
                dataKey={person.id} // Garantindo que o dataKey corresponda à chave no `data`
                type="monotone"
                stroke={person.color}
                strokeWidth={lineStrokeWidth}
                dot={false}
              />
            );
          })}
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default HeartRateChart;
