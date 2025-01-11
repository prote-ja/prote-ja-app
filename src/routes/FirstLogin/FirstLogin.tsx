import { FunctionComponent } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import TutorialHandler from "./TutorialHandler";

interface FirstLoginProps {}

const FirstLogin: FunctionComponent<FirstLoginProps> = () => {
  return (
    <>
      <AnimatedBackground />
      <div className="max-w-lg mx-auto">
        <TutorialHandler />
      </div>
    </>
  );
};

export default FirstLogin;
