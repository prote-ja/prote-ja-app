import React, { useState } from "react";
import PremiumCard from "./PremiumCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PremiumCardsCarouselProps {
  cards: {
    planTitle: string;
    price: string;
    features: string[];
    showPrefix?: boolean;
  }[];
}

const PremiumCardsCarousel: React.FC<PremiumCardsCarouselProps> = ({
  cards,
}) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div>
      {/* Layout no Mobile */}
      <div className="block md:hidden space-y-4">
        {cards.map((card, index) => (
          <PremiumCard
            key={index}
            planTitle={card.planTitle}
            price={card.price}
            features={card.features}
            isSelected={selectedCard === index}
            showPrefix={card.showPrefix}
            onCardClick={() => setSelectedCard(index)}
          />
        ))}
      </div>

      {/* Carrossel no Desktop */}
      <div className="hidden md:block relative">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-2">
                  <PremiumCard
                    planTitle={card.planTitle}
                    price={card.price}
                    features={card.features}
                    isSelected={selectedCard === index}
                    showPrefix={card.showPrefix}
                    onCardClick={() => setSelectedCard(index)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <CarouselPrevious className="text-white hover:text-gray-300" />
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <CarouselNext className="text-white hover:text-gray-300" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PremiumCardsCarousel;
