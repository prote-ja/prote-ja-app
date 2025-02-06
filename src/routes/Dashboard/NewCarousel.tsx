"use client";

import { FunctionComponent, RefObject, useRef, ReactNode } from "react";
import { Swiper, SwiperRef, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const useMediaQuery = (query: string) => {
  if (typeof window === "undefined") return false;
  return window.matchMedia(query).matches;
};

interface CardSlideProps {
  myId: number;
  sliderRef: RefObject<SwiperRef>;
  content: ReactNode;
}

const CardSlide: FunctionComponent<CardSlideProps> = ({
  myId,
  sliderRef,
  content,
}) => {
  const { isActive } = useSwiperSlide();

  return (
    <div
      onClick={() => {
        sliderRef.current?.swiper.slideTo(myId);
      }}
      className={`relative rounded-lg shadow-md p-4 transition-all duration-300 ${
        isActive ? "bg-white scale-100" : "bg-white/20 scale-100"
      } flex flex-col h-full overflow-visible`}
    >
      <div className="flex-1">{content}</div>{" "}
      {/* Use flex-1 para ocupar o espaço restante */}
      <div className="absolute inset-x-0 -bottom-20 h-24 " />
    </div>
  );
};
interface NewCarouselProps {
  children: ReactNode[];
}

const NewCarousel: FunctionComponent<NewCarouselProps> = ({ children }) => {
  const sliderRef = useRef<SwiperRef>(null);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const spaceBetween = isMobile ? 50 : -10;

  return (
    <div className="relative h-[300px]">
      {" "}
      {/* Defina uma altura fixa ou use min-height */}
      <Swiper
        effect="coverflow"
        spaceBetween={spaceBetween}
        autoHeight={false}
        modules={[Pagination, EffectCoverflow, Autoplay]}
        centeredSlides
        slidesPerView={isMobile ? 1.3 : 3}
        loop={false}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={750}
        className="pb-16 h-full"
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          scale: isMobile ? 1 : 0.85,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        ref={sliderRef}
      >
        {children.map((child, index) => (
          <SwiperSlide
            key={`slider_${index}`}
            className="h-full cursor-pointer"
          >
            <CardSlide myId={index} sliderRef={sliderRef} content={child} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-x-0 bottom-0 h-48 " />
    </div>
  );
};

export default NewCarousel;
