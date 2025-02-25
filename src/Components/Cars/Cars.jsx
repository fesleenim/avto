import axios from "axios";
import React, { useEffect, useState } from "react";

function Cars() {
  const [getCars, setGetCars] = useState([]);

  useEffect(() => {
    axios.get("https://realauto.limsa.uz/api/cars").then((res) => {
      console.log(res?.data?.data);
      setGetCars(res?.data?.data || []);
    });
  }, []);

  return (
    <div className="max-w-screen mx-auto px-4  bg-[#213555] mb-10">
      {getCars[0] && (
        <div className="block w-full  ">
          <h1 className="text-4xl font-bold text-white text-left  py-10">
            {getCars[0].category?.name_en || "Kategoriya mavjud emas"}
          </h1>
          <div className="flex justify-start">
            <Card car={getCars[0]} />
          </div>
        </div>
      )}
      {getCars.slice(1, 3).length > 0 && (
        <div className="block w-full">
          <h1 className="text-4xl font-bold text-white text-left py-10">
            {getCars[1]?.category?.name_en || "Kategoriya mavjud emas"}
          </h1>
          <div className="flex justify-start gap-6">
            {getCars.slice(1, 3).map((car, index) => (
              <Card key={index} car={car} />
            ))}
          </div>
        </div>
      )}
      {getCars[3] && (
        <div className="block w-full">
          <h1 className="text-4xl font-bold text-white text-left py-10">
            {getCars[3].category?.name_en || "Kategoriya mavjud emas"}
          </h1>
          <div className="flex justify-start">
            <Card car={getCars[3]} />
          </div>
        </div>
      )}
      {getCars.slice(4, 6).length > 0 && (
        <div className="block w-full">
          <h1 className="text-4xl font-bold text-white text-left py-10">
            {getCars[4]?.category?.name_en || "Kategoriya mavjud emas"}
          </h1>
          <div className="flex justify-start gap-6">
            {getCars.slice(4, 6).map((car, index) => (
              <Card key={index} car={car} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
function Card({ car }) {
  return (
    <div className="bg-[#3E5879] px-6 rounded-2xl shadow-lg w-full max-w-[300px]">
      <img
        src={`https://realauto.limsa.uz/api/uploads/images/${car.car_images[0]?.image?.src}`}

        alt={car.title}
        className="w-full h-40 object-cover rounded-xl my-4"
      />
      <h2 className="text-xl font-semibold text-[#D8C4B6]">
        {car.category?.name_en || "Kategoriya mavjud emas"}
      </h2>
      <p className="mt-2 text-[#F5EFE7]">
        Km: {car.deposit || "Ma’lumot yo‘q"}
      </p>
      <p className="mt-2 text-[#F5EFE7]">
        Rangi: {car.color || "Ma’lumot yo‘q"}
      </p>
    </div>
  );
}

export default Cars;
