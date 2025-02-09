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
      className={`relative rounded-lg transition-all duration-300 overflow-visible 
        ${
          isActive
            ? "bg-white scale-100 shadow-xl shadow-black/40 z-10"
            : "bg-white/30 scale-95 shadow-none"
        } 
        ${isBordered ? "animate-border" : ""} 
        flex flex-col h-[250px] p-6 md:p-6 sm:p-3 w-full max-w-[100%]`} // Alterado aqui
    >
      <div className={`flex-1 ${!isActive ? "opacity-30" : ""}`}>{content}</div>
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
  const isMobile = useMediaQuery("(max-width: 540px)");
  const spaceBetween = isMobile ? 20 : -10;
  const slidesPerView = isMobile ? 1.5 : 3; // Aumentado para 1.5 no mobile
  const scale = isMobile ? 1 : 0.85;

  return (
    <div className="relative h-[290px]  -mx-2  overflow-visible">
      <Swiper
        effect="coverflow"
        spaceBetween={spaceBetween}
        autoHeight={false}
        modules={[EffectCoverflow, Autoplay]}
        centeredSlides
        slidesPerView={slidesPerView}
        loop={false}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={750}
        className="pb-16 h-full overflow-visible"
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          scale: scale,
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
            className="h-full cursor-pointer overflow-visible"
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
