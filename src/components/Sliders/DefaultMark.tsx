import React, { FunctionComponent } from "react";

interface DefaultMarkProps {
  value: React.ReactNode;
  active: boolean;
}

const DefaultMark: FunctionComponent<DefaultMarkProps> = ({
  value,
  active,
}) => {
  return (
    <div className="flex items-center flex-col text-white/50 mt-2 gap-[2px]">
      <div
        className={`h-2 w-2 rounded-full ${
          active ? "bg-white" : "bg-white/50"
        }`}
      />
      <div className={`text-sm ${active ? "font-bold text-white" : ""}`}>
        {value}
      </div>
    </div>
  );
};

export default DefaultMark;
