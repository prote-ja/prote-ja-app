import { FunctionComponent, useMemo } from "react";
import FirstLoginContent from "./FirstLoginContent";
import ProtejaLogo from "@/assets/proteja_logo.svg";
import ProtejaName from "@/assets/proteja_name.svg";
import { Button } from "@/components/ui/button";
import TutorialFooter from "./TutorialFooter";
import Wristband300 from "@/assets/wristband_300.png";
import Totem300 from "@/assets/totem_300.png";
import { CirclePlus } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router";

interface TutorialHandlerProps {}

const TutorialHandler: FunctionComponent<TutorialHandlerProps> = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const step = useMemo(
    () => parseInt(searchParams.get("step") ?? "1"),
    [searchParams]
  );

  const handleNext = () => {
    if (step === 4) {
      return;
    }
    navigate(`?step=${step + 1}`);
  };

  const handleBack = () => {
    if (step === 1) {
      return;
    }
    navigate(`?step=${step - 1}`);
  };

  const handleSkip = () => {
    navigate("?step=4");
  };

  if (step === 1)
    return (
      <FirstLoginContent
        totalSteps={4}
        currentStep={1}
        title="Bem-vindo ao"
        onSkip={handleSkip}
        footer={<TutorialFooter handleNext={handleNext} />}
      >
        <div className="flex flex-col items-center py-4">
          <img src={ProtejaLogo} alt="Center Proteja-logo" className="h-40" />
          <img src={ProtejaName} alt="Center Proteja-name" className="h-16" />
        </div>
      </FirstLoginContent>
    );

  if (step === 2)
    return (
      <FirstLoginContent
        totalSteps={4}
        currentStep={2}
        showLogo
        title="Totem"
        description="O Totem permite que você estabeleça uma área de segurança. Se um usuário ultrapassar os limites dessa área, você receberá um alerta instantâneo."
        onSkip={handleSkip}
        showTitleOrnament
        footer={
          <TutorialFooter handleNext={handleNext} handleBack={handleBack} />
        }
      >
        <div
          className="flex flex-col items-center py-4 animated-container"
          key={`tutorial-children-${step}`}
        >
          <img src={Totem300} alt="Center Totem" className="h-60" />
        </div>
      </FirstLoginContent>
    );

  if (step === 3)
    return (
      <FirstLoginContent
        totalSteps={4}
        currentStep={3}
        showLogo
        title="Pulseira"
        description="A Pulseira está conectada ao Totem. O usuário que estiver usando a pulseira será monitorado, e, em caso de quedas, você receberá um alerta imediatamente."
        onSkip={handleSkip}
        showTitleOrnament
        footer={
          <TutorialFooter handleNext={handleNext} handleBack={handleBack} />
        }
      >
        <div
          className="flex flex-col items-center py-4 animated-container"
          key={`tutorial-children-${step}`}
        >
          <img src={Wristband300} alt="Center Totem" className="h-60" />
        </div>
      </FirstLoginContent>
    );

  return (
    <FirstLoginContent
      totalSteps={4}
      currentStep={4}
      showLogo
      title="Hora de começar"
      description="Cadastre o Totem e associe as Pulseiras. Cada usuário deverá fornecer suas informações pessoais, que serão utilizadas para gerar dicas personalizadas."
      showTitleOrnament
      footer={
        <div className="flex justify-center flex-col gap-3">
          <Link to="/add-totem?first_setup=true" className="mx-auto">
            <Button
              onClick={() => console.log("Next")}
              variant={"default"}
              className="mx-auto bg-white text-primary"
            >
              Adicionar Dispositivo
            </Button>
          </Link>

          <Link to="/dashboard" className="mx-auto">
            <Button onClick={() => console.log("Next")} variant={"outline"}>
              Agora não
            </Button>
          </Link>
        </div>
      }
    >
      <div
        className="flex flex-col items-center py-4 animated-container"
        key={`tutorial-children-${step}`}
      >
        <CirclePlus size={150} />
      </div>
    </FirstLoginContent>
  );
};

export default TutorialHandler;
