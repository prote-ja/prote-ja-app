import type React from "react";
import { useState, type FunctionComponent } from "react";
import BlurredContainer from "./BlurredContainer";
import { Check, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import Backdrop from "./Backdrop";
import { RotatingLines } from "react-loader-spinner";

interface InformationContainerProps {
  onEdit?: (newValue: string) => Promise<void>;
  name: React.ReactNode;
  value?: string;
  tooltip?: React.ReactNode;
  children?: React.ReactNode;
}

const InformationContainer: FunctionComponent<InformationContainerProps> = ({
  onEdit,
  name,
  value,
  tooltip,
  children,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState<string>(value ?? "");
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (onEdit) {
      setIsLoading(true);
      onEdit(editedValue).finally(() => {
        setIsEditing(false);
        setIsLoading(false);
      });
    } else setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedValue(value ?? "");
  };

  return (
    <>
      {isEditing && (
        <Backdrop
          onClose={handleCancel}
          open={isEditing}
          confirm={value !== editedValue}
        />
      )}
      <BlurredContainer border className="relative">
        <div className="flex justify-between items-center text-white py-2 px-3 ">
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
          <div
            className={cn(
              "text-lg flex items-center",
              isEditing ? "rounded-md gap-2 z-[20]" : "gap-4"
            )}
          >
            {isEditing ? (
              <Input
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
              />
            ) : (
              <>
                {value}
                {children}
              </>
            )}
            {onEdit &&
              (isEditing ? (
                <Button
                  onClick={handleSave}
                  className="[&_svg]:size-5 aspect-square"
                  size={"icon"}
                  variant={"positive"}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <RotatingLines strokeColor="white" />
                  ) : (
                    <Check />
                  )}
                </Button>
              ) : (
                <Button
                  onClick={handleEdit}
                  className="[&_svg]:size-5"
                  size={"icon"}
                  variant={"secondary"}
                >
                  <Settings />
                </Button>
              ))}
          </div>
        </div>
      </BlurredContainer>
    </>
  );
};

export default InformationContainer;
