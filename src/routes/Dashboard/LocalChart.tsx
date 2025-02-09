import { FC } from "react";
import { BarChart, Bar, XAxis, Cell, LabelList } from "recharts";

interface LocalChartProps {
  data: { name: string; users: number }[];
}

const LocalChart: FC<LocalChartProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <BarChart
        width={200} // Faz o gráfico ocupar toda a largura disponível
        height={200} // Ajusta a altura do gráfico para uma altura razoável
        data={data}
        barSize={40}
      >
        <XAxis
          dataKey="name"
          tick={{ fontSize: 14, fill: "#333" }}
          axisLine={false}
          tickLine={false}
        />
        <Bar dataKey="users" fill="#7357FF" radius={8}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} />
          ))}
          <LabelList
            dataKey="users"
            position="insideTop"
            fill="white"
            fontSize={14}
            fontWeight="bold"
          />
        </Bar>
      </BarChart>
    </div>
  );
};

export default LocalChart;
