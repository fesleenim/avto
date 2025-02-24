import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Question = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is the minimum age requirement to rent a car in Dubai?",
      answer: "You must be at least 21 years old to rent a car in Dubai."
    },
    {
      question: "What do you need for a luxury car rental in Dubai?",
      answer: "A valid driving license, passport, and a credit card are required."
    },
    {
      question: "How much is the insurance limit on luxury car rental Dubai?",
      answer: "The insurance limit depends on the rental company and car model."
    },
    {
      question: "What are the driving licenses that can be used in Arab countries?",
      answer: "International driving permits are accepted along with some national licenses."
    },
    {
      question: "Can anyone else drive the car I rent?",
      answer: "Yes, but they must be registered with the rental company and meet all requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" w-full  bg-[#2D336B] text-[#F5EFE7] overflow-hidden">
       <div className="max-w-2xl mx-auto p-6 ">
      <h2 className="text-3xl font-bold text-center text-[#F5EFE7] mb-6">FAQ</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="mb-4 rounded-xl border  transition p-4 cursor-pointer"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg text-[#F5EFE7] font-semibold">{item.question}</h3>
            <ChevronDown
              className={`text-[#F5EFE7] transform transition-transform ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {activeIndex === index && (
            <p className="mt-2 text-gray-300 text-sm">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Question;
