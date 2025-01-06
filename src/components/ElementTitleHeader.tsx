import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface ElementTitleHeaderProps {
  title: string;
  endElement?: React.ReactNode;
  titleAppend?: React.ReactNode;
  className?: string;
}

const ElementTitleHeader: FunctionComponent<ElementTitleHeaderProps> = ({
  title,
  endElement,
  titleAppend,
  className,
}) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex gap-3 items-center">
        <h2 className="text-3xl font-semibold">{title}</h2>
        {titleAppend}
      </div>
      {endElement}
    </div>
  );
};

export default ElementTitleHeader;
