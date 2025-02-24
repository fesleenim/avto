import React from "react";
import CarSlider from "../CarSlider/Carslider";
import { MdNavigateNext } from "react-icons/md";
import { HiMiniArrowLongRight } from "react-icons/hi2";

function Hero() {
  return (
    <>
      <div className="">
        <div className="container h-[100vh] flex flex-col px-4 justify-around">
          <div className="">
            <h1 className=" pb-8 text-center text-4xl font-medium text-white max-[500px]:text-3xl">
              TOP LUXURY CAR RENTAL IN THE EMIRATES №1
            </h1>
            <p className="text-center text-white pb-8 max-[500px]:text-sm">
              Best sports car & supercar rental in the Emirates. Exclusive
              offers on luxury car rentals at affordable prices.
            </p>
            <button className="flex gap-2 hover:gap-7 transition-all cursor-pointer duration-500 items-center mx-auto group hover:text-red-500">
              <p className="text-white max-[500px]:text-sm font-medium group-hover:text-red-500">
                RENT A CAR EMIRATES CATALOG
              </p>
              <div className="border-2 p-1 border-white rounded-full group-hover:border-red-500">
                <MdNavigateNext className="text-white max-[500px]:text-sm group-hover:text-red-500" />
              </div>
            </button>
          </div>
          <CarSlider />
          <div className=" flex justify-center mt-[-80px] gap-100">
            <HiMiniArrowLongRight className="text-5xl cursor-pointer text-white rotate-180" />
            <HiMiniArrowLongRight className="text-5xl cursor-pointer text-white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
