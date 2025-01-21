import { FunctionComponent, useContext, useState } from "react";
import { IsEditingContext } from "./FieldContainerContexts";
import Backdrop from "../Backdrop";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RotatingLines } from "react-loader-spinner";
import { Check, Settings } from "lucide-react";

export interface FieldContainerInputTextProps {
  value?: string;
  onConfirm?: (newValue: string) => Promise<void>;
  onCancel?: () => void;
  onChange?: (newValue: string) => void;
}

const FieldContainerInputText: FunctionComponent<
  FieldContainerInputTextProps
> = ({ value, onConfirm: onSave, onCancel, onChange }) => {
  const { isEditing, setIsEditing } = useContext(IsEditingContext);

  const [editedValue, setEditedValue] = useState<string>(value ?? "");
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedValue(value ?? "");
  };

  const handleSave = () => {
    if (onSave) {
      setIsLoading(true);
      onSave(editedValue).finally(() => {
        setIsEditing(false);
        setIsLoading(false);
      });
    } else setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedValue(value ?? "");
    if (onCancel) {
      onCancel();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedValue(e.target.value);
    onChange && onChange(e.target.value);
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
      <form
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
            onChange={handleChange}
            autoFocus
            className="w-full"
          />
        ) : (
          <>{value}</>
        )}

        {isEditing ? (
          <Button
            onClick={handleSave}
            className="[&_svg]:size-5 aspect-square"
            size={"icon"}
            variant={"secondary"}
            disabled={isLoading}
            key={"accept-button"}
            type="submit"
          >
            {isLoading ? <RotatingLines strokeColor="white" /> : <Check />}
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
        )}
      </form>
    </>
  );
};

export default FieldContainerInputText;
