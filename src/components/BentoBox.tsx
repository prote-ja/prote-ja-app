import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BentoItemProps {
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  rightContent?: ReactNode;
  rightBackground?: string;
  bentoBackground?: string;
  bentoBackgroundImage?: string;
  bentoBackgroundOverlay?: string;
  descriptionClassName?: string;
  textClassName?: string;
}

const BentoItem: React.FC<BentoItemProps> = ({
  title,
  description,
  className,
  children,
  icon,
  rightContent,
  rightBackground,
  bentoBackground,
  bentoBackgroundImage,
  bentoBackgroundOverlay,
  descriptionClassName,
  textClassName,
}) => {
  return (
    <Card className={cn("p-4 md:p-6 overflow-hidden border-none", className)}>
      {title && (
        <div className="flex items-center gap-2 mb-4">
          {icon && <div className="flex-shrink-0">{icon}</div>}
          <p className={textClassName} style={{ lineHeight: "0.5" }}>
            {title}
          </p>
        </div>
      )}

      <div
        className={`grid ${
          rightContent ? "grid-cols-3" : "grid-cols-1"
        } h-full`}
      >
        <div
          className={`${rightContent ? "col-span-2" : "col-span-1"} p-4`}
          style={{
            backgroundColor: bentoBackgroundImage
              ? "transparent"
              : bentoBackground || "#ffffff",
            backgroundImage: bentoBackgroundImage
              ? `${bentoBackgroundOverlay || ""}, url(${bentoBackgroundImage})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {description && (
            <h3 className={`mt-2 font-semibold ${descriptionClassName}`}>
              {description}
            </h3>
          )}

          {children && <div className="mt-4">{children}</div>}
        </div>

        {rightContent && (
          <div
            className="col-span-1 p-4"
            style={{ backgroundColor: rightBackground || "#624DE2" }}
          >
            {rightContent}
          </div>
        )}
      </div>
    </Card>
  );
};

export default BentoItem;
