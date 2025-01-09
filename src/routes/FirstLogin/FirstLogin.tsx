import { FunctionComponent } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import TutorialHandler from "./TutorialHandler";

interface FirstLoginProps {}

const FirstLogin: FunctionComponent<FirstLoginProps> = () => {
  return (
    <>
      <AnimatedBackground />
      <TutorialHandler />
    </>
  );
};

export default FirstLogin;
