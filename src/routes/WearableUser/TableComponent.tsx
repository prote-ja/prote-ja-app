"use client";

import React from "react";
import BlurredContainer from "@/components/BlurredContainer";

interface TableComponentProps {
  title: string;
  description?: string;
  caption?: string;
  data: { time: string; location: string }[];
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
          {data.map((ping, index) => (
            <BlurredContainer
              className="flex justify-between items-center px-4 py-2"
              key={`containerValues-${index}`}
            >
              <span className="text-white font-semibold">{ping.time}</span>{" "}
              <span className="text-white font-semibold">{ping.location}</span>{" "}
            </BlurredContainer>
          ))}
        </div>
      </div>
    </BlurredContainer>
  );
};

export default TableComponent;
