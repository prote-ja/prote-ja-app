import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface BorderWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const BorderWrapper: FunctionComponent<BorderWrapperProps> = ({
  className,
  children,
}) => {
  return (
    <div className="w-full md:px-4">
      <div
        className={cn(
          className,
          "relative py-6 px-2 md:border md:rounded-md md:py-6 md:px-4 lg:px-6 md:mt-4 md:mb-4 md:max-w-4xl md:mx-auto md:shadow-md"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default BorderWrapper;
