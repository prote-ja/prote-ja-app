import { FunctionComponent } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  isBlack?: boolean; // Se true, usa fundo preto
}

const AnimatedBackground: FunctionComponent<AnimatedBackgroundProps> = ({
  isBlack,
}) => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-full -z-1",
        isBlack ? "bg-black" : "bg-gradient-to-b from-[#7357FF] to-[#4b33be]"
      )}
    ></div>
  );
};

export default AnimatedBackground;
