import React from 'react';
import { GrFormNext } from 'react-icons/gr';
import { NavLink } from 'react-router';

function Dubai() {
  return (
    <div className="relative w-full  bg-[#213555] text-[#F5EFE7] overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 gap-10">
        <div className="w-full md:w-1/2 rounded-xl shadow-2xl overflow-hidden">
          <iframe
            className="w-full h-72 md:h-[450px] rounded-xl"
            src="https://www.youtube.com/embed/rsHmvxJ86PA"
            title="Supercar Rental Dubai"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

        </div>

        {/* Description */}
        <div className="w-full md:w-1/2 md:pl-10  md:mt-0">
          <h2 className="text-4xl md:text-start text-center md:text-5xl font-bold  mb-6  text-[#F5EFE7] drop-shadow-lg">
            SUPERCAR RENTAL IN DUBAI
          </h2>
          <p className="text-sm md:text-xl mb-4 leading-relaxed text-[#F5EFE7]">
            Terra L L C a Car is a Top Luxury Car Rental Dubai based company, We offer sports car rental, and supercar rental in Dubai. The best luxury car rental process provided by our fleet . We own a diverse range of luxury supercar rental and sports car rental Dubai style , including Rolls Royce, Lamborghini, Maserati, Ferrari, Mercedes Benz, Porsche, and Range Rover, to name a few. Rent a car with the best car rental company in Dubai.
          </p>
          <p className="text-sm md:text-xl mb-6 leading-relaxed text-[#F5EFE7]">
            Bizda Rolls Royce, Lamborghini, Maserati, Ferrari, Mercedes Benz, Porsche va Range Rover kabi brendlar mavjud.
          </p>
          <NavLink to="/cars" rel="stylesheet" href="/service" > <button className="bg-gradient-to-r  text-[#F5EFE7] flex items-center gap-2 ">
            Learn More <GrFormNext className='mt-1 text-2xl' />
          </button></NavLink>
        </div>
      </div>

    </div>
  );
}

export default Dubai;
