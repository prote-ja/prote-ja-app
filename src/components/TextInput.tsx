import { FunctionComponent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  errorMessage?: string;
  onSave?: () => void;
  valid?: boolean;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  maxLength?: number;
  required?: boolean;
  minLength?: number;
}

const TextInput: FunctionComponent<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  className,
  errorMessage,
  onSave,
  valid,
  type = "text",
  name,
  maxLength,
  required,
  minLength,
}) => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="relative flex">
      <Tooltip open={valid === false && !editing && value.length > 0}>
        <TooltipTrigger type="button">
          <Input
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            placeholder={placeholder}
            className={cn("w-52", className)}
            onFocus={() => {
              setEditing(true);
            }}
            onBlur={() => {
              setEditing(false);
            }}
            type={type}
            name={name}
            maxLength={maxLength}
            required={required}
            minLength={minLength}
          />
        </TooltipTrigger>
        <TooltipContent>
          {!valid && (
            <span className="text-red-500 text-sm mt-2">{errorMessage}</span>
          )}
          <TooltipArrow className="stroke-white fill-white " />
        </TooltipContent>
      </Tooltip>

      {editing && (
        <>
          <Button
            onClick={() => {
              setEditing(false);
              if (onSave) onSave();
            }}
            disabled={!valid}
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
  );
};
export default TextInput;
