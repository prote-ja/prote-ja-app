import { FunctionComponent, useState } from "react";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import Backdrop from "../Backdrop";
import { cn } from "@/lib/utils";

interface FieldContainerInputSelectProps {
  closedSize?: "xs" | "sm" | "md" | "lg";
  placeholder?: string;
  children: React.ReactNode;

  onValueChange?: (value: string) => void;
}

const FieldContainerInputSelect: FunctionComponent<
  FieldContainerInputSelectProps
> = ({ closedSize, placeholder, children, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const getClosedSize = () => {
    switch (closedSize) {
      case "xs":
        return "";
      case "sm":
        return "w-56";
      case "md":
        return "w-72";
      case "lg":
        return "w-96";
      default:
        return "";
    }
  };

  return (
    <>
      {isOpen && (
        <Backdrop
          onClose={() => setIsOpen(false)}
          open={isOpen}
          //   confirm={value !== editedValue}
        />
      )}

      <Select
        onOpenChange={setIsOpen}
        open={isOpen}
        onValueChange={(e) => {
          onValueChange && onValueChange(e);
        }}
      >
        <SelectTrigger
          className={cn(isOpen ? "z-[20] w-full sm:max-w-xs" : getClosedSize())}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        {children}
      </Select>
    </>
  );
};

export default FieldContainerInputSelect;
