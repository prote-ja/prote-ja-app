import { FC } from "react";
import { LucideIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface AlertComponentProps {
  variant?: "default" | "destructive" | "warning" | "sucess";
  iconTitle?: LucideIcon;
  title: string;
  description: string;
  buttonLabel?: string;
  buttonRedirectUrl?: string;
  iconButton?: LucideIcon;
  className?: string;
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
}) => {
  return (
    <Alert
      variant={variant}
      className={`flex justify-between items-center text-white py-2 px-4 gap-4 ${className}`} // Aplicando a classe customizada
    >
      <div className="flex items-center gap-4">
        {IconTitle && (
          <IconTitle className="h-7 w-7 flex-shrink-0 stroke-white" />
        )}
        <div>
          <AlertTitle className="text-lg font-semibold">{title}</AlertTitle>
          <AlertDescription className="text-sm">{description}</AlertDescription>
        </div>
      </div>
      {buttonLabel && buttonRedirectUrl && (
        <Link to={buttonRedirectUrl}>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-black/10 flex items"
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
