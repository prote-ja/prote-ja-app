import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface ElementTitleHeaderProps {
  title: string;
  endElement?: React.ReactNode;
  titleAppend?: React.ReactNode;
  className?: string;
  description?: string;
}

const ElementTitleHeader: FunctionComponent<ElementTitleHeaderProps> = ({
  title,
  endElement,
  titleAppend,
  className,
  description,
}) => {
  return (
    <div className={cn("space-y-1", className)}>
      <div className={"flex items-center justify-between"}>
        <div className="flex gap-3 items-center">
          <h2 className="text-3xl font-semibold">{title}</h2>
          {titleAppend}
        </div>
        {endElement}
      </div>
      <p className="text-muted">{description}</p>
    </div>
  );
};

export default ElementTitleHeader;
