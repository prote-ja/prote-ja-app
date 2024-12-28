import { FunctionComponent } from "react";

interface AnimatedBackgroundProps {}

const AnimatedBackground: FunctionComponent<AnimatedBackgroundProps> = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-[#7F6AFF] to-[#61A9FF]"></div>
  );
  // return (
  //   <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-[#7F6AFF] to-[#61A9FF] animate-gradient"></div>
  // );
};

export default AnimatedBackground;
