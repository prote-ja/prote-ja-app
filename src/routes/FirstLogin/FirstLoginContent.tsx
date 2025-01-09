import { FunctionComponent } from "react";
import ProtejaLogo from "@/assets/proteja_logo.svg";
import { Button } from "@/components/ui/button";

import "./animations.css";

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
  return (
    <div className="relative w-full max-w-screen-xl flex flex-col h-dvh text-white">
      {/* Header */}
      <div className="px-4 pt-8">
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
      <div className="mt-14">
        {showTitleOrnament && <hr className="border-white" />}
        <h1
          className="text-3xl font-bold text-center p-4 title-animation"
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

      {/* Spacer */}
      <div className="flex-1 max-h-80"></div>

      {/* Footer */}
      <div className="h-44">
        {/* Progress */}
        <div>
          <div className="flex justify-center items-center h-12">
            <div className="flex items-center gap-2">
              {[...Array(totalSteps)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentStep === index + 1 ? "bg-white" : "bg-white/30"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {footer}
      </div>
    </div>
  );
};

export default FirstLoginContent;
