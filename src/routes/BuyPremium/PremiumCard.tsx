import React, { useState, useEffect, useMemo } from "react";
import BlurredContainer from "@/components/BlurredContainer";
import { Check } from "lucide-react";

interface PremiumCardProps {
  planTitle: string;
  price: string;
  features: string[];
  isSelected: boolean;
  onCardClick: () => void;
  showPrefix?: boolean;
}

const PremiumCard: React.FC<PremiumCardProps> = ({
  planTitle,
  price,
  features,
  isSelected,
  showPrefix,
  onCardClick,
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const displayPrice = useMemo(
    () => (showPrefix ? price : `${price}`),
    [showPrefix, price]
  );
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BlurredContainer
      title={planTitle}
      titleBackground
      border
      style={{
        width: windowWidth < 768 ? "100%" : "200px",
        border: isSelected ? "2px solid white" : "none",
      }}
      clickable
      onClick={onCardClick}
      className="md:min-h-[400px] flex flex-col justify-between"
    >
      <div className="text-center ">
        <h3 className="text-4xl font-bold mb-2 text-white">
          {showPrefix && <span className="text-sm align-bottom "> R$ </span>}{" "}
          {displayPrice}
        </h3>
        {showPrefix && <p className="text-lg text-gray-200">/mês</p>}
      </div>
      <ul className="mt-4 grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2 p-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-base text-gray-100 "
          >
            <Check
              className={`stroke-white w-5 h-5 mr-2 px-1 ${
                feature.trim() === "" ? "invisible" : ""
              }`}
            />
            {feature}
          </li>
        ))}
      </ul>
      {isSelected && (
        <div className="mt-4 text-center">
          <button
            className="px-6 py-2 bg-white w-full"
            style={{ color: "#4b33be" }}
          >
            Seguir para compra
          </button>
        </div>
      )}
    </BlurredContainer>
  );
};

export default PremiumCard;
