import { FunctionComponent } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface AlertCheckboxProps {
  id: string;
  label: string;
  onChange: (value: boolean) => void;
}

const AlertCheckbox: FunctionComponent<AlertCheckboxProps> = ({
  id,
  label,
  onChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        className="h-5 w-5 bg-background border-border"
        onCheckedChange={(checked) => {
          if (checked === "indeterminate") {
            onChange(true);
            return;
          }
          onChange(checked);
        }}
      />
      <label
        htmlFor={id}
        className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default AlertCheckbox;
