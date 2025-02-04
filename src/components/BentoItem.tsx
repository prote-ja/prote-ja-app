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
}) => {
  return (
    <Card className={cn("p-0 overflow-hidden border-none", className)}>
      <div
        className={`grid ${
          rightContent ? "grid-cols-3" : "grid-cols-1"
        } h-full`}
      >
        {/* Parte principal com background personalizado */}
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
          <div className="flex justify-between items-start">
            <div className="flex gap-2">
              {icon && <div className="flex-shrink-0">{icon}</div>}
              <div>
                {title && <p className="text-sm opacity-80">{title}</p>}
                {description && (
                  <h3 className={` font-semibold ${descriptionClassName}`}>
                    {description}
                  </h3>
                )}
              </div>
            </div>
          </div>
          {children && <div className="mt-4">{children}</div>}
        </div>

        {/* Parte direita (só aparece se houver rightContent) */}
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
