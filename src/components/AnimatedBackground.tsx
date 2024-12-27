import { FunctionComponent } from "react";

interface AnimatedBackgroundProps {}

const AnimatedBackground: FunctionComponent<AnimatedBackgroundProps> = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-r from-[#8168FF] to-[#679FFF] animate-gradient"></div>
  );
};

export default AnimatedBackground;
