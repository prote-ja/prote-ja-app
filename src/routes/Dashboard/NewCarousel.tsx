"use client";

import { FunctionComponent, RefObject, useRef, ReactNode } from "react";
import { Swiper, SwiperRef, SwiperSlide, useSwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const useMediaQuery = (query: string) => {
  if (typeof window === "undefined") return false;
  return window.matchMedia(query).matches;
};

interface CardSlideProps {
  myId: number;
  sliderRef: RefObject<SwiperRef>;
  content: ReactNode;
  isBordered: boolean;
}

const CardSlide: FunctionComponent<CardSlideProps> = ({
  myId,
  sliderRef,
  content,
  isBordered,
}) => {
  const { isActive } = useSwiperSlide();

  return (
    <div
      onClick={() => {
        sliderRef.current?.swiper.slideTo(myId);
      }}
      onMouseEnter={() => {
        if (isActive && sliderRef.current) {
          sliderRef.current.swiper.autoplay.stop();
        }
      }}
      onMouseLeave={() => {
        if (isActive && sliderRef.current) {
          sliderRef.current.swiper.autoplay.start();
        }
      }}
      className={`relative rounded-lg transition-all duration-300 ${
        isActive
          ? "bg-white scale-100 shadow-xl shadow-black/40 z-10"
          : "bg-white/30 scale-95 shadow-none"
      } ${isBordered ? "animate-border" : ""} 
      
      flex flex-col h-full overflow-visible p-6 md:p-6 sm:p-3`}
    >
      <div className="flex-1">{content}</div>
      <div className="absolute inset-x-0 -bottom-20 h-24" />
    </div>
  );
};

interface NewCarouselProps {
  children: ReactNode[];
  borderedCardIndex?: number;
}

const NewCarousel: FunctionComponent<NewCarouselProps> = ({
  children,
  borderedCardIndex,
}) => {
  const sliderRef = useRef<SwiperRef>(null);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const spaceBetween = isMobile ? 50 : -10;

  return (
    <div className="relative h-[300px] -mx-2">
      <Swiper
        effect="coverflow"
        spaceBetween={spaceBetween}
        autoHeight={false}
        modules={[EffectCoverflow, Autoplay]}
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
            <CardSlide
              myId={index}
              sliderRef={sliderRef}
              content={child}
              isBordered={index === borderedCardIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewCarousel;
