import { FunctionComponent, useState } from "react";
import BlurredContainer from "../BlurredContainer";
import React from "react";

import { cn } from "@/lib/utils";
import { IsEditingContext } from "./FieldContainerContexts";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";

interface FieldContainerProps {
  tooltip?: React.ReactNode;
  children?: React.ReactNode;
  title?: React.ReactNode;
}

const FieldContainer: FunctionComponent<FieldContainerProps> = ({
  tooltip,
  children,
  title,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <IsEditingContext.Provider value={{ isEditing, setIsEditing }}>
      <BlurredContainer border className="relative">
        <div
          className={cn(
            "flex justify-between items-center gap-2 text-white py-2 px-3",
            isEditing ? "flex-col items-start sm:flex-row sm:items-center" : ""
          )}
        >
          <div className="text-lg font-medium">
            {tooltip ? (
              <Tooltip>
                <TooltipTrigger disabled>{title}</TooltipTrigger>
                <TooltipContent className="max-w-[200px]">
                  {tooltip}
                  <TooltipArrow className="stroke-white fill-white" />
                </TooltipContent>
              </Tooltip>
            ) : (
              <>{title}</>
            )}
          </div>

          {children}
        </div>
      </BlurredContainer>
    </IsEditingContext.Provider>
  );
};

export default FieldContainer;
