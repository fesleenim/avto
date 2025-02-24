import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://terra-rentacar.netlify.app/assets/4T-BGQV6HlH.jpg',
  'https://terra-rentacar.netlify.app/assets/3T-BkJVRiBs.webp',
  'https://terra-rentacar.netlify.app/assets/5T-BISrHmDi.jpg',
  'https://terra-rentacar.netlify.app/assets/6T-Bs7OhdEn.webp',
  'https://terra-rentacar.netlify.app/assets/9T-BtgLeMAz.webp',
];

function Instagram() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className=" w-full   bg-gradient-to-r bg-[#213555] text-[#F5EFE7] overflow-hidden">
      <h2 className="text-3xl mt-10 font-bold mb-10 text-center">
        FOLLOW US ON INSTAGRAM
      </h2>

      <div className="flex justify-center gap-4 overflow-x-auto pb-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative w-48 h-48 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-110 ${index === currentIndex ? 'opacity-100' : 'opacity-50'
              }`}
            onClick={() => openModal(image)}
          >
            <img
              src={image}
              alt={`Instagram ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
              whileHover={{ opacity: 1 }}
            >
              <p className="text-sm font-semibold">View More</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-4 gap-2 mb-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-500'
              }`}
          />
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-3xl w-full">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-[#F5EFE7] text-2xl bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center"
              >
                &times;
              </button>
              <motion.img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto rounded-lg shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Instagram;

