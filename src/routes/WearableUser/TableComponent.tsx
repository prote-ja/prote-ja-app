"use client";

import React from "react";
import BlurredContainer from "@/components/BlurredContainer";

interface TableComponentProps {
  title: string;
  description?: string;
  caption?: string;
  data: { time: string; location: string }[]; // Ajuste nos dados
}

const TableComponent: React.FC<TableComponentProps> = ({
  title,

  caption,
  data,
}) => {
  return (
    <BlurredContainer titleBackground title={title} border>
      <div className="p-2 md:p-4 lg:p-6">
        {caption && <p className="text-sm text-muted">{caption}</p>}
        <div className="space-y-4">
          {" "}
          {/* Espaçamento entre os containers */}
          {data.map((ping, index) => (
            <BlurredContainer
              className="flex justify-between items-center px-4 py-2" // Layout flex para separar os valores
              key={`containerValues-${index}`}
            >
              <span className="text-white font-semibold">{ping.time}</span>{" "}
              {/* Alinhado à esquerda */}
              <span className="text-white font-semibold">
                {ping.location}
              </span>{" "}
              {/* Alinhado à direita */}
            </BlurredContainer>
          ))}
        </div>
      </div>
    </BlurredContainer>
  );
};

export default TableComponent;
