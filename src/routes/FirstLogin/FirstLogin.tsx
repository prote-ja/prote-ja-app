import { FunctionComponent } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import TutorialHandler from "./TutorialHandler";
import BorderWrapper from "@/components/BorderWrapper";

interface FirstLoginProps {}

const FirstLogin: FunctionComponent<FirstLoginProps> = () => {
  return (
    <>
      <AnimatedBackground />
      <BorderWrapper>
        <TutorialHandler />
      </BorderWrapper>
    </>
  );
};

export default FirstLogin;
