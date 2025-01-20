import { FunctionComponent, useMemo } from "react";
import FirstLoginContent from "./FirstLoginContent";
import ProtejaLogo from "@/assets/proteja_logo.svg";
import ProtejaName from "@/assets/proteja_name.svg";
import { Button } from "@/components/ui/button";
import TutorialFooter from "./TutorialFooter";
import Wristband300 from "@/assets/wristband_300.png";
import Totem300 from "@/assets/totem_300.png";
import TotemArea from "@/assets/totem_area.png";
import { CirclePlus } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router";

interface ContentInterface {
  title: string;
  description?: string;
  footerOverride?: React.ReactNode;
  disableSkip?: boolean;
  showTitleOrnaments?: boolean;
  children: React.ReactNode;
  showLogo?: boolean;
}

interface TutorialHandlerProps {}

const TutorialHandler: FunctionComponent<TutorialHandlerProps> = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const step = useMemo(
    () => parseInt(searchParams.get("step") ?? "1"),
    [searchParams]
  );

  const handleNext = () => {
    if (step === 6) {
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
    navigate("?step=6");
  };

  const Content = useMemo<ContentInterface[]>(
    () => [
      {
        title: "Bem-vindo ao",
        children: (
          <div className="flex flex-col items-center py-4">
            <img src={ProtejaLogo} alt="Center Proteja-logo" className="h-40" />
            <img src={ProtejaName} alt="Center Proteja-name" className="h-16" />
          </div>
        ),
        footerOverride: <TutorialFooter handleNext={handleNext} />,
      },
      {
        title: "Sobre o ProteJá",
        description:
          "Criado para garantir a segurança de grupos de risco, como crianças e idosos, ProteJá funciona detectando eventos críticos, como quedas ou afastamento de uma área segura, e envia alertas em tempo real para os responsáveis.",
        children: (
          <div
            className="flex flex-col items-center py-4 animated-container"
            key={`tutorial-children-${step}`}
          >
            <img src={ProtejaLogo} alt="Center Totem" className="h-60" />
          </div>
        ),
        showTitleOrnaments: true,
        showLogo: true,
      },
      {
        title: "Como Funciona",
        description:
          "O sistema Proteja usa uma pulseira inteligente e um totem de monitoramento. A pulseira detecta quedas e saídas da área segura, enviando dados ao totem, que alerta o responsável em tempo real em caso de risco.",
        children: (
          <div
            className="flex flex-col items-center py-4 animated-container"
            key={`tutorial-children-${step}`}
          >
            <img src={TotemArea} alt="Center Totem" className="h-60" />
          </div>
        ),
        showTitleOrnaments: true,
        showLogo: true,
      },
      {
        title: "Totem",
        description:
          "O Totem permite que você estabeleça uma área de segurança. Se um usuário ultrapassar os limites dessa área, você receberá um alerta instantâneo.",
        children: (
          <div
            className="flex flex-col items-center py-4 animated-container"
            key={`tutorial-children-${step}`}
          >
            <img src={Totem300} alt="Center Totem" className="h-60" />
          </div>
        ),
        showTitleOrnaments: true,
        showLogo: true,
      },
      {
        title: "Pulseira",
        description:
          "A Pulseira está conectada ao Totem. O usuário que estiver usando a pulseira será monitorado, e, em caso de quedas, você receberá um alerta imediatamente.",
        children: (
          <div
            className="flex flex-col items-center py-4 animated-container"
            key={`tutorial-children-${step}`}
          >
            <img src={Wristband300} alt="Center Totem" className="h-60" />
          </div>
        ),
        showTitleOrnaments: true,
        showLogo: true,
      },
      {
        title: "Hora de começar",
        description:
          "Cadastre o Totem e associe as Pulseiras. Cada usuário deverá fornecer suas informações pessoais, que serão utilizadas para gerar dicas personalizadas.",
        footerOverride: (
          <div className="flex justify-center flex-col gap-3 ">
            <Link
              to="/dashboard/add-totem?to=/dashboard/add-wearable?to=/dashboard/edit-wearable"
              className="mx-auto"
            >
              <Button
                variant={"default"}
                className="mx-auto bg-white text-primary"
              >
                Adicionar Dispositivo
              </Button>
            </Link>

            <Link to="/dashboard" className="mx-auto">
              <Button variant={"outline"} className="text-white/50">
                Agora não
              </Button>
            </Link>
          </div>
        ),
        disableSkip: true,
        children: (
          <div
            className="flex flex-col items-center py-4 animated-container "
            key={`tutorial-children-${step}`}
          >
            <CirclePlus size={150} />
          </div>
        ),
        showTitleOrnaments: true,
        showLogo: true,
      },
    ],
    [step]
  );

  const ActiveContent = useMemo(() => Content[step - 1], [step]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4">
        <FirstLoginContent
          totalSteps={Content.length}
          currentStep={step}
          title={ActiveContent.title}
          showLogo={ActiveContent.showLogo}
          description={ActiveContent.description}
          onSkip={ActiveContent.disableSkip ? undefined : handleSkip}
          showTitleOrnament={ActiveContent.showTitleOrnaments}
        >
          {ActiveContent.children}
        </FirstLoginContent>
      </div>

      <div className="sticky bottom-0 p-4 shadow-md z-10">
        {ActiveContent.footerOverride ? (
          ActiveContent.footerOverride
        ) : (
          <TutorialFooter handleNext={handleNext} handleBack={handleBack} />
        )}
      </div>
    </div>
  );
};

export default TutorialHandler;
