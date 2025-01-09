import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface TutorialFooterProps {
  handleNext?: () => void;
  handleBack?: () => void;
}

const TutorialFooter: FunctionComponent<TutorialFooterProps> = ({
  handleNext,
  handleBack,
}) => {
  return (
    <div
      className={cn(
        "flex px-4",
        handleBack && handleNext ? "justify-between" : "justify-end"
      )}
    >
      {handleBack && (
        <Button onClick={handleBack} variant={"secondary"} borderless>
          Anterior
        </Button>
      )}
      {handleNext && (
        <Button onClick={handleNext} variant={"secondary"} borderless>
          Próximo
        </Button>
      )}
    </div>
  );
};

export default TutorialFooter;
