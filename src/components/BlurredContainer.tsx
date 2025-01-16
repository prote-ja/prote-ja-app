import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface BlurredContainerProps {
  title?: string;
  preIcon?: React.ReactNode;
  postIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  titleBackground?: boolean;
  border?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  cornerType?: "rounded" | "square" | "auto-md";
}

const BlurredContainer: FunctionComponent<BlurredContainerProps> = ({
  title,
  children,
  preIcon,
  postIcon,
  className = "",
  titleBackground,
  border,
  clickable,
  onClick,
  cornerType,
}) => {
  const calculateCornerType = (): string => {
    switch (cornerType) {
      case "square":
        return "";
      case "rounded":
        return "rounded-md";
      case "auto-md":
        return "md:rounded-md";
    }
    return "rounded-md";
  };

  const colSpan =
    preIcon && postIcon
      ? "col-span-6"
      : preIcon || postIcon
      ? "col-span-8"
      : "col-span-10";

  return (
    <div
      className={cn(
        "dashboard-item backdrop-blur bg-background ",
        className,
        border ? "border" : "",
        clickable
          ? "transition-all cursor-pointer hover:shadow-md hover:scale-[1.01] active:scale-[1] active:shadow-inner active:opacity-60"
          : "",
        calculateCornerType()
      )}
      onClick={onClick}
    >
      {title && (
        <div
          className={cn(
            "grid grid-cols-10 items-center p-2 rounded-t-lg",
            `${titleBackground ? "bg-background" : ""}`
          )}
        >
          <div className="col-span-2">{preIcon && <div>{preIcon}</div>}</div>
          <div className={colSpan}>
            <h2 className="text-xl font-medium text-white text-center line-clamp-1 ">
              {title}
            </h2>
          </div>
          {postIcon && (
            <div className="col-span-2 justify-end flex">
              {<div>{postIcon}</div>}
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default BlurredContainer;
