import React, { FunctionComponent } from "react";
import BlurredContainer from "./BlurredContainer";
import { Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";

interface InformationContainerProps {
  onEdit?: () => void;
  name: React.ReactNode;
  value: React.ReactNode;
  tooltip?: React.ReactNode;
}

const InformationContainer: FunctionComponent<InformationContainerProps> = ({
  onEdit,
  name,
  value,
  tooltip,
}) => {
  return (
    <BlurredContainer border>
      <div className="flex justify-between items-center text-white py-2 px-3">
        <div className="text-lg font-medium">
          {tooltip ? (
            <Tooltip>
              <TooltipTrigger disabled>{name}</TooltipTrigger>
              <TooltipContent className="max-w-[200px]">
                {tooltip}
                <TooltipArrow className="stroke-white fill-white" />
              </TooltipContent>
            </Tooltip>
          ) : (
            <>{name}</>
          )}
        </div>
        <div className="text-lg flex gap-4 items-center">
          {value}
          {onEdit && (
            <Button
              onClick={onEdit}
              className="[&_svg]:size-5"
              size={"icon"}
              variant={"secondary"}
            >
              <Settings />
            </Button>
          )}
        </div>
      </div>
    </BlurredContainer>
  );
};

export default InformationContainer;
