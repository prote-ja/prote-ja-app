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

/**
 * This component is deprecated and should not be used. You should use FieldContainer instead.
 * @deprecated
 */
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
    setEditedValue(value ?? "");
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
        <div
          className={cn(
            "flex justify-between items-center gap-2 text-white py-2 px-3",
            isEditing ? "flex-col items-start sm:flex-row sm:items-center" : ""
          )}
        >
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
              isEditing ? "rounded-md gap-2 z-[20] w-full sm:max-w-xs" : "gap-4"
            )}
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            {isEditing ? (
              <Input
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
                autoFocus
                className="w-full"
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
                  key={"accept-button"}
                  type="submit"
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
                  key={"edit-button"}
                  type="button"
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
