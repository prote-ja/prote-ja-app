import { FunctionComponent } from "react";
import { Plus } from "lucide-react";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import PremiumCardsCarousel from "./PremiumCardsCarousel";

interface BuyPremiumProps {}

const BuyPremium: FunctionComponent<BuyPremiumProps> = () => {
  const plans = [
    {
      planTitle: "Básico",
      price: "Grátis",
      features: [
        "Monitore 1 dispositivo",
        "Alertas via email",
        "Alertas via notificação",
        "",
        "",
      ],
      showPrefix: false,
    },
    {
      planTitle: "Essencial",
      price: "6,90",
      features: [
        "Até 3 dispositivos",
        "Alertas via email",
        "Alertas via notificação",
        "Alertas via SMS",
        "",
      ],
      showPrefix: true,
    },
    {
      planTitle: "Família",
      price: "9,90",
      features: [
        "Até 6 dispositivos",
        "Alertas via email",
        "Alertas via notificação",
        "Alertas via SMS",
        "Assistente Inteligente",
      ],
      showPrefix: true,
    },
    {
      planTitle: "Saúde Total ",
      price: "14,90",
      features: [
        "Até 10 dispositivos",
        "Alertas via email",
        "Alertas via notificação",
        "Alertas via SMS",
        "Assistente Inteligente",
      ],
      showPrefix: true,
    },
    {
      planTitle: "Comercial",
      price: "99,90",
      features: [
        "Até 100 dispositivos",
        "Alertas via email",
        "Alertas via notificação",
        "Alertas via SMS",
        "Assistente Inteligente",
      ],
      showPrefix: true,
    },
    {
      planTitle: "Exclusivo para Você",
      price: "Fale conosco",
      features: ["", "", "", "", ""],
      showPrefix: false,
    },
  ];

  return (
    <div className="space-y-4 max-w-lg mx-auto py-4">
      {/* Header com Título e Botão */}
      <div className="flex flex-col items-center">
        <ElementTitleHeader
          className="pb-2 text-white"
          title="Planos ProteJá"
          titleAppend={
            <Plus
              className="stroke-white -mx-2 w-5 h-5"
              style={{ strokeWidth: 4 }}
            />
          }
        />
      </div>

      {/* Carrossel de Planos */}
      <div className="p-4">
        <PremiumCardsCarousel cards={plans} />
      </div>
    </div>
  );
};

export default BuyPremium;
