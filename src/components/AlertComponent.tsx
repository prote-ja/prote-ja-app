import { FC } from "react";
import { LucideIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface AlertComponentProps {
  variant?: "default" | "destructive" | "warning" | "sucess";
  iconTitle?: LucideIcon;
  title: string;
  description?: string;
  buttonLabel?: string;
  buttonRedirectUrl?: string;
  iconButton?: LucideIcon;
  className?: string;
  buttonClassName?: string;
  onClick?: () => void;
}

const AlertComponent: FC<AlertComponentProps> = ({
  variant = "warning",
  iconTitle: IconTitle,
  title,
  description,
  buttonLabel,
  buttonRedirectUrl,
  iconButton: IconButton,
  className,
  buttonClassName,
  onClick,
}) => {
  return (
    <Alert
      variant={variant}
      onClick={onClick}
      className={`flex justify-between items-center text-white min-h-[28px] py-3 px-4 gap-4 ${className}`}
    >
      <div className="flex items-center gap-4">
        {IconTitle && (
          <IconTitle className="h-7 w-7 flex-shrink-0 stroke-white" />
        )}
        <div className="flex flex-col justify-center">
          <AlertTitle className="text-lg font-semibold">{title}</AlertTitle>
          {description && (
            <AlertDescription className="text-sm">
              {description}
            </AlertDescription>
          )}
        </div>
      </div>
      {buttonLabel && buttonRedirectUrl && (
        <Link to={buttonRedirectUrl}>
          <Button
            variant="outline"
            className={`text-white border-white hover:bg-black/10 flex items-center ${buttonClassName}`}
          >
            {buttonLabel}
            {IconButton && (
              <IconButton className="h-5 w-5 flex-shrink-0 stroke-white" />
            )}
          </Button>
        </Link>
      )}
    </Alert>
  );
};

export default AlertComponent;
