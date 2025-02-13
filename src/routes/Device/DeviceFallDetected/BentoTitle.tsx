import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoTitleProps {
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const BentoTitle: React.FC<BentoTitleProps> = ({
  className,
  iconClassName,
  titleClassName,
  subtitleClassName,
}) => {
  return (
    <div
      className={cn(
        "p-4 md:p-6 text-center bg-white text-[#7357FF] md:-mt-6 md:-mx-6 -mt-6 -mx-4",
        className
      )}
    >
      <p className={cn("text-md font-medium mb-2", subtitleClassName)}>
        Atenção
      </p>

      <div className="flex items-center justify-center gap-2">
        <AlertTriangle
          className={cn(
            "w-8 h-8 text-[#7357FF] transform mt-2 blinking-icon",
            iconClassName
          )}
        />

        <h1 className={cn("text-2xl md:text-4xl font-bold", titleClassName)}>
          Queda Detectada
        </h1>

        <AlertTriangle
          className={cn(
            "w-8 h-8 text-[#7357FF] transform mt-2 blinking-icon",
            iconClassName
          )}
        />
      </div>
    </div>
  );
};

export default BentoTitle;
