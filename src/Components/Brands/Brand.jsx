import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Brand() {
  const url = "https://realauto.limsa.uz/api/brands";
  const [categories, setCategories] = useState([]);
  const imgUrl = "https://realauto.limsa.uz/api/uploads/images";
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
  <div className="bg-[#2D336B]">
    <div className="max-w-[1240px] mx-auto px-5 py-8">
      <h2 className="text-5xl text-white font-medium pb-5">Brand</h2>
    <Swiper
      modules={[Autoplay, Navigation]}
      loop={categories.length > 6} // Slayd yetarli bo'lsa loop yoqiladi
      slidesPerView={Math.min(categories.length, 6)} 
      centeredSlides={false}
      spaceBetween={20}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      breakpoints={{  
        1100: { slidesPerView: 6 },
        1000: { slidesPerView: 5 },
        900: { slidesPerView: 4 },
        600: { slidesPerView: 3 },
        500: { slidesPerView: 2 },
        300: { slidesPerView: 1 },
      }}
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <div className="flex flex-col gap-[18px]">
          <div className="sviperslide w-[100%] h-[210px] flex flex-col justify-center items-center border-[1px] border-gray-500 pb-3">
            <div className="w-[80px] h-[80px] ">
              <img
                className="w-full h-full object-cover rounded-md"
                src={`${imgUrl}/${category.image_src}`}
                alt={category.title}
              />
            </div>
            <h2 className="text-white text-center text-xl font-medium py-3 ">
              {category.title}
            </h2>
          </div>
          <div className="sviperslide w-[100%] h-[210px] flex flex-col justify-center items-center border-[1px] border-gray-500 pb-3">
            <div className="w-[80px] h-[80px] ">
              <img
                className="w-full h-full object-cover rounded-md"
                src={`${imgUrl}/${category.image_src}`}
                alt={category.title}
              />
            </div>
            <h2 className="text-white text-center text-xl font-medium py-3 ">
              {category.title}
            </h2>
          </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  </div>
  );
}

export default Brand;
