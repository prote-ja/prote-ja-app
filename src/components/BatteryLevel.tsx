"use client";

import { Battery } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

interface BatteryChartProps {
  batteryLevel: number;
  colorChart?: string; // Novo parâmetro para a cor do gráfico
}

const chartConfig = {
  battery: { label: "Battery", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

const BatteryChart: React.FC<BatteryChartProps> = ({
  batteryLevel,
  colorChart = "var(--color-battery)", // Valor padrão caso não seja passado
}) => {
  const chartData = [
    { name: "Battery", value: batteryLevel, max: 100 }, // Valor máximo de 100 para o gráfico
  ];

  return (
    <div className="flex flex-col items-center gap-2">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square w-full max-w-[250px]"
      >
        <RadialBarChart
          data={chartData}
          startAngle={180}
          endAngle={0}
          innerRadius={80}
          outerRadius={130}
        >
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) =>
                viewBox && "cx" in viewBox && "cy" in viewBox ? (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      fill="black"
                      className="text-3xl font-bold"
                    >
                      {batteryLevel}%
                    </tspan>
                  </text>
                ) : null
              }
            />
          </PolarRadiusAxis>
          <RadialBar
            dataKey="value" // Certifique-se de que o dataKey está correto
            cornerRadius={30}
            fill={colorChart} // Usando o parâmetro colorChart
            className="stroke-[12px] [stroke:hsl(var(--background))]"
            max={100} // Adicionando o valor máximo explicitamente
          />
        </RadialBarChart>
      </ChartContainer>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Battery className="h-6 w-6" />
        <span>Média das Baterias</span>
      </div>
    </div>
  );
};

export default BatteryChart;
