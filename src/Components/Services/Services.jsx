import React from 'react';
import { GrFormNext } from "react-icons/gr";
import { NavLink } from 'react-router';

const services = [
  {
    title: 'Ride a buggy in Dubai and have fun',
    description: 'Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now!',
    image: 'https://terra-rentacar-sales.vercel.app/assets/uslug-1-Dm8nxdJt-Dm8nxdJt.jpg',
  },
  {
    title: 'Photoshoot with luxury car rental in Dubai',
    description: 'Professional car photoshoot as an additional service at Terra Car Rental.',
    image: 'https://terra-rentacar-sales.vercel.app/assets/uslug-2-LkBjqsZl-LkBjqsZl.jpg',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 bg-[#2D336B] text-[#F5EFE7]">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-t-lg w-full h-100 object-cover"
              />
              <div className="py-2">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[#F5EFE7] mb-4">{service.description}</p>

                <NavLink to="/service" rel="stylesheet" href="/service" > <button className="bg-gradient-to-r  text-[#F5EFE7] flex items-center gap-2 ">
                  Learn More <GrFormNext className='mt-1 text-2xl' />
                </button></NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
