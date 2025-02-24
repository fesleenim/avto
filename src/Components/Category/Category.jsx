import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const LocationCityCards = () => {
  const [data, setData] = useState([]);

  const getLocation = async () => {
    try {
      const response = await axios.get("https://realauto.limsa.uz/api/locations");
      const responseData = response.data.data;
      if (Array.isArray(responseData)) {
        setData(responseData.slice(0, 4)); 
      } else {
        console.error("API dan kutilgan formatda ma'lumot kelmadi.");
      }
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="bg-[#213555]">
      <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <NavLink to="/cars" key={index}>
              <div className="relative rounded-3xl overflow-hidden transition-transform transform hover:-translate-y-2 duration-300">
                <img
                  src={`https://realauto.limsa.uz/api/uploads/images/${item.image_src}`}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-lg font-bold text-white">{item.name}</span>
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <p className="text-center text-white">Ma'lumot topilmadi</p>
        )}
      </div>
    </div>
  );
};

export default LocationCityCards;