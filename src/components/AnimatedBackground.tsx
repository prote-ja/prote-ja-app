import { FunctionComponent } from "react";

interface AnimatedBackgroundProps {}

const AnimatedBackground: FunctionComponent<AnimatedBackgroundProps> = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-lvh -z-1 bg-gradient-to-b from-[#7357FF] to-[#4b33be]"></div>
  );
  // return (
  //   <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-[#7357FF] to-[#61A9FF] animate-gradient"></div>
  // );
};

export default AnimatedBackground;
