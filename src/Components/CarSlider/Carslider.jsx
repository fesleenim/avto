import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import car1 from "../../assets/hero-swiper-1.png";
import car2 from "../../assets/hero-swiper-2.png";
import car3 from "../../assets/hero-swiper-3.png";
import car4 from "../../assets/hero-swiper-4.png";

export default function CarSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="relative w-full mx-auto">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          600: {
            slidesPerView: 1,
          },
          601: {
            slidesPerView: 3,
          },
        }}
        className="w-full"
      >
        {[car1, car2, car3, car4].map((car, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={car}
              alt={`Car ${index + 1}`}
              className={`transition-all duration-500 ease-in-out transform ${
                index === activeIndex ? "scale-100" : "scale-65 opacity-80"
              }`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
