"use client";

import { FunctionComponent, RefObject, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
interface CardSlideProps {
  myId: number;
  sliderRef: RefObject<SwiperRef>;
}

const CardSlide: FunctionComponent<CardSlideProps> = ({ myId, sliderRef }) => {
  const imActive = useSwiperSlide().isActive;

  return (
    <div
      onClick={() => {
        sliderRef.current?.swiper.slideTo(myId);
      }}
      className="relative"
    >
      <div>
        {/* Substitua este conteúdo pelo seu componente ChapterCard */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-semibold">Capítulo 1</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 -bottom-20 h-24 bg-[radial-gradient(50%_30%_at_50%_50%,_#fff_-700%,_rgba(0,0,0,0)_100%)]" />
    </div>
  );
};

interface NewChaptersCarouselProps {}

const NewChaptersCarousel: FunctionComponent<
  NewChaptersCarouselProps
> = ({}) => {
  const isExtraSmallScreen = window.matchMedia("(max-width: 640px)").matches;
  const isSmallScreen = window.matchMedia(
    "(min-width: 641px) and (max-width: 768px)"
  ).matches;
  const isMediumScreen = window.matchMedia(
    "(min-width: 769px) and (max-width: 1024px)"
  ).matches;
  const isLargeScreen = window.matchMedia(
    "(min-width: 1025px) and (max-width: 1280px)"
  ).matches;
  const sliderRef = useRef<SwiperRef>(null);
  const myChapters = [
    {
      title: "Capítulo 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Capítulo 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Capítulo 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        effect={"coverflow"}
        spaceBetween={
          isExtraSmallScreen
            ? 5
            : isSmallScreen
            ? -50
            : isMediumScreen
            ? -80
            : -150
        }
        autoHeight
        modules={[Pagination, EffectCoverflow]}
        centeredSlides={true}
        slidesPerView={
          isExtraSmallScreen
            ? 1
            : isSmallScreen || isMediumScreen
            ? 1.7
            : isLargeScreen
            ? 3
            : 3.5
        }
        rewind={true}
        preventClicksPropagation={false}
        preventClicks={false}
        speed={750}
        className="pb-16"
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          scale: 0.7,
          depth: 0,
          modifier: isExtraSmallScreen ? 0 : 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        ref={sliderRef}
      >
        {myChapters.map((post, index) => (
          <SwiperSlide key={"slider_" + index}>
            <CardSlide myId={index} sliderRef={sliderRef} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(50%_30%_at_50%_50%,_#fff_-500%,_rgba(0,0,0,0)_100%)]" />

      <div className="absolute inset-x-0 bottom-4 flex justify-center">
        <div className="flex justify-between w-full max-w-[90%]">
          <Button
            aria-label="carrossel anterior"
            size="sm"
            className="z-10"
            onClick={() => {
              sliderRef.current?.swiper.slidePrev();
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            aria-label="próximo carrossel"
            size="sm"
            className="z-10"
            onClick={() => {
              sliderRef.current?.swiper.slideNext();
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewChaptersCarousel;
