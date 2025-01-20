import { FunctionComponent } from "react";
import ProtejaLogo from "@/assets/proteja_logo.svg";
import { Button } from "@/components/ui/button";

import "./animations.css";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";

interface FirstLoginContentProps {
  onSkip?: () => void;
  children?: React.ReactNode;
  totalSteps: number;
  currentStep: number;
  title: string;
  showTitleOrnament?: boolean;
  description?: string;
  footer?: React.ReactNode;
  showLogo?: boolean;
}

const FirstLoginContent: FunctionComponent<FirstLoginContentProps> = ({
  onSkip,
  children,
  totalSteps,
  currentStep,
  title,
  showTitleOrnament,
  description,
  footer,
  showLogo,
}) => {
  const navigate = useNavigate();

  const handleNavigationDot = (index: number) => {
    navigate(`?step=${index}`);
  };

  return (
    <div className="relative w-full max-w-screen-xl flex flex-col max-h-[60rem] h-[calc(100dvh-4rem)] md:h-[calc(100dvh-10rem)] text-white -mx-2 md:mx-0">
      {/* Header */}
      <div className="px-2 md:px-0 ">
        <div className="flex w-full justify-between h-24">
          {/* Skip Button */}
          {onSkip && (
            <Button onClick={onSkip} variant={"outline"}>
              Pular Tutorial
            </Button>
          )}
          {/* Spacer to push logo to the right */}
          <div className="flex-1"></div>
          {/* Logo */}
          {showLogo && (
            <img
              src={ProtejaLogo}
              alt="Proteja"
              className="object-contain max-h-full aspect-square logo-animation"
            />
          )}
        </div>
      </div>

      {/* Title */}
      <div className="mt-14 flex flex-col">
        {showTitleOrnament && <hr className="border-white" />}
        <h1
          className="text-3xl font-bold text-center p-4 title-animation mx-auto"
          key={`tutorial-step-${currentStep}`}
        >
          {title}
        </h1>
        {showTitleOrnament && <hr className="border-white" />}
      </div>

      {/* Content */}
      <div>{children}</div>

      {/* Description */}
      <div className="p-4">
        {description && (
          <div className="p-2 bg-background rounded-md font-medium logo-animation">
            <p
              className="description-animation"
              key={`tutorial-description-${currentStep}`}
            >
              {description}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full flex h-44 flex-col-reverse">
        {/* Progress */}
        <div>
          <div className="flex justify-center items-center h-12 ">
            <div className="flex items-center gap-2">
              {[...Array(totalSteps)].map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2  md:mt-44 rounded-full transition-all duration-100 ",
                    currentStep === index + 1
                      ? "bg-white"
                      : "bg-white/30 hover:bg-white/60 hover:cursor-pointer"
                  )}
                  onClick={() => handleNavigationDot(index + 1)}
                ></div>
              ))}
            </div>
          </div>
          {footer}
        </div>
      </div>
    </div>
  );
};

export default FirstLoginContent;
