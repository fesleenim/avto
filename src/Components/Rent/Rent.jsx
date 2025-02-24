import React from 'react';
import { motion } from 'framer-motion';

function Rent() {
  return (
    <div className="relative w-full h-[400px] md:min-h-[50vh] bg-gradient-to-r from-gray-900 via-black to-gray-800 text-[#F5EFE7] overflow-hidden">
      <div
        className="absolute h-[280px] sm:h-[70vh] top-0 left-0 w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://w0.peakpx.com/wallpaper/358/662/HD-wallpaper-sky-white-clouds-top-view-nature.jpg')",
        }}
      ></div>

      <div className="absolute md:h-1/4 sm:h-[200px] h-[150px] bottom-0 left-0 w-full bg-[#213555]"></div>

      <motion.img
        src="https://orientrentcar.uz/wp-content/uploads/2023/11/W3qgNYdB9KMV-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-1.png"
        alt="Car"
        className="absolute  sm:top-15 top-45 w-3/4  mx-auto left-0 right-0 object-contain"
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        transition={{ duration: 3, ease: 'easeOut' }}
      />

      <div className="absolute top-25 md:top-36 w-full text-center text-[#F5EFE7] px-4">
        <h1 className="text-3xl md:text-xl lg:text-5xl font-bold  mb-2">
          SUPERCAR RENTAL IN DUBAI
        </h1>
      </div>
    </div>
  );
}

export default Rent;
