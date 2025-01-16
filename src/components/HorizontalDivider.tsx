import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface HorizontalDividerProps {
  className?: string;
  disableMarginOffset?: boolean;
}

const HorizontalDivider: FunctionComponent<HorizontalDividerProps> = ({
  className,
  disableMarginOffset,
}) => {
  return (
    <div className={cn(disableMarginOffset ? "" : "-mx-2 md:-mx-4 lg:-mx-6")}>
      <hr className={cn(className, "mt-4")} />
    </div>
  );
};

export default HorizontalDivider;
