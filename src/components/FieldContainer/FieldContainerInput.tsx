import {
  FunctionComponent,
  InputHTMLAttributes,
  useContext,
  useEffect,
  useState,
} from "react";
import { IsEditingContext } from "./FieldContainerContexts";
import Backdrop from "../Backdrop";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

export interface FieldContainerInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onConfirm?: (newValue: string) => Promise<void>;
  placeholder?: string;
}

const FieldContainerInput: FunctionComponent<FieldContainerInputProps> = ({
  value,
  onConfirm,
  onChange,
  placeholder,

  ...props
}) => {
  const { isEditing, setIsEditing } = useContext(IsEditingContext);

  const [editedValue, setEditedValue] = useState<string>(value ?? "");

  console.log(value);

  useEffect(() => {
    setEditedValue(value ?? "");
  }, [value]);

  const handleSave = () => {
    if (onConfirm) {
      onConfirm(editedValue).finally(() => {
        setIsEditing(false);
      });
    } else setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedValue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <>
      {isEditing && (
        <Backdrop
          onClose={handleSave}
          open={isEditing}
          confirm={value !== editedValue}
        />
      )}
      <div
        className={cn(
          "text-lg flex items-center relative",
          isEditing ? "rounded-md gap-2 z-[20] w-full sm:max-w-xs" : "gap-4"
        )}
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div className="relative flex w-full">
          <Input
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            onFocus={() => {
              setIsEditing(true);
            }}
            onBlur={() => {
              setIsEditing(false);
              handleSave();
            }}
            className={cn("w-full", isEditing ? "pr-10" : "")}
            {...props}
          />

          {isEditing && (
            <>
              <Button
                onClick={handleSave}
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              >
                <Check className="h-4 w-4 horizontal-grow z-10" color="white" />
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FieldContainerInput;
