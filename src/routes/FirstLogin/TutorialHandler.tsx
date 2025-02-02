import { FunctionComponent, useMemo } from "react";
import FirstLoginContent from "./FirstLoginContent";
import ProtejaLogo from "@/assets/proteja_logo.svg";
import ProtejaName from "@/assets/proteja_name.svg";
import { Button } from "@/components/ui/button";
import TutorialFooter from "./TutorialFooter";
import TotemArea from "@/assets/totemPulseira.png";
import PulseiraRegistra from "@/assets/pulseiraRegistra.png";
import PulseiraEdita from "@/assets/pulseiraEdita.png";
import PulseiraPerfil from "@/assets/pulseiraPerfil.png";
import TotemRegistra from "@/assets/totemRegistra.png";
import TotemEdita from "@/assets/totemEdita.png";
import DashboardImg from "@/assets/dashboard.png";
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
    if (step === 10) {
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
    navigate("?step=10");
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
          "Criado para garantir a segurança dos usuários, ProteJá funciona detectando eventos críticos, como quedas ou afastamento de uma área segura, e envia alertas em tempo real para os responsáveis.",
        children: (
          <div
            className="flex flex-col items-center py-4 animated-container"
            key={`tutorial-children-${step}`}
          >
            <img src={ProtejaLogo} alt="Sobre" className="h-60" />
          </div>
        ),
        showTitleOrnaments: true,
        showLogo: true,
      },
      {
        title: "Como Funciona",
        description:
          "O sistema Proteja usa uma Pulseira inteligente e um Totem de monitoramento. A Pulseira detecta quedas e saídas da área segura, enviando dados ao Totem, que alerta o responsável em tempo real em caso de risco.",
        children: (
          <div
            className="flex flex-col items-center py-4 animated-container"
            key={`tutorial-children-${step}`}
          >
            <img src={TotemArea} alt="Funciona" className="h-60" />
          </div>
        ),
        showTitleOrnaments: true,
        showLogo: true,
      },
      {
        title: "Totem",
        description:
          "O Totem permite que você estabeleça uma área de segurança. Para adicionar um Totem, toque em Registrar.",
        children: (
          <div
            className="flex flex-col items-center py-4 animated-container"
            key={`tutorial-children-${step}`}
          >
            <img
              src={TotemRegistra}
              alt="Registra Totem"
              className="md:h-60 w-full h-40"
            />
          </div>
        ),
        showTitleOrnaments: true,
        showLogo: true,
      },
      {
        title: "Informações Totem",
        description:
          "Preencha as informações de MAC e Senha, esses dados são encontrados na parte inferior do Totem e na caixa do produto. Para salvar, clique em Confirmar",
        children: (
          <div
            className="flex flex-col items-center py-4 animated-container"
            key={`tutorial-children-${step}`}
          >
            <img
              src={TotemEdita}
              alt="Edita Totem"
              className="md:h-80 w-full"
            />
          </div>
        ),
        showTitleOrnaments: true,
        showLogo: true,
      },

      {
        title: "Pulseira",
        description:
          "A Pulseira é usada pelo usuário, ela detecta quedas e saídas da área segura. Para adicionar uma Pulseira, toque em Registrar.",
        children: (
          <div
            className="flex flex-col items-center py-4 animated-container"
            key={`tutorial-children-${step}`}
          >
            <img
              src={PulseiraRegistra}
              alt="Registra Pulseira"
              className="md:h-60 w-full h-40"
            />
          </div>
        ),
        showTitleOrnaments: true,
        showLogo: true,
      },
      {
        title: "Informações Pulseira",
        description:
          "Preencha as informações de MAC e Senha, esses dados são encontrados na caixa do produto. Para salvar, clique em Confirmar.",
        children: (
          <div
            className="flex flex-col items-center py-4 animated-container"
            key={`tutorial-children-${step}`}
          >
            <img
              src={PulseiraEdita}
              alt="Edita Pulseira"
              className="md:h-80 w-full h-40"
            />
          </div>
        ),
        showTitleOrnaments: true,
        showLogo: true,
      },
      {
        title: "Perfil do Usuário",
        description:
          "Após adiconar a Pulseira, é necessário associar o usuário a ela. Para isso, preencha as informações do usuário e toque em Salvar.",
        children: (
          <div
            className="flex flex-col items-center py-4 animated-container"
            key={`tutorial-children-${step}`}
          >
            <img
              src={PulseiraPerfil}
              alt="Usuario"
              className="md:h-80 w-full h-40"
            />
          </div>
        ),
        showTitleOrnaments: true,
        showLogo: true,
      },
      {
        title: "Dashboard",
        description:
          "Agora que você cadastrou o Totem e associou a Pulseira, você pode acessar o Dashboard para visualizar os perfis cadastrados e as informações de segurança.",
        children: (
          <div
            className="flex flex-col items-center py-4 animated-container"
            key={`tutorial-children-${step}`}
          >
            <img
              src={DashboardImg}
              alt="Dashboard"
              className="md:h-80 w-full h-40"
            />
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
              to="/dashboard/add-device?to=/dashboard/add-device?to=/dashboard/edit-wearable"
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
