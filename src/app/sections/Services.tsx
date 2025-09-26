// Services.tsx
import React from 'react';
import Image from "next/image";
import { service_info, service_info_2 } from "@data/index.ts";

function HoverAnimation (hovertrue: boolean) {
  if (hovertrue) {
    return 
            }

    return null;
}


const Services = () => {
  return (
    <section id="services" className='relative gap-y-5 pt-[50px]'>
      <h1 className='font-raleway font-bold text-white text-[60px] justify-center align-middle flex flex-col items-center lg:p-8 md:p-6 sm:p-4 bg-[#35322B]'> Our Services </h1>
      
      
      <div className='grid grid-cols-3 lg:grid-cols-4'>
        <div className='flex flex-col justify-center align-middle items-center bg-[#35322B]'>
            <h1 className='font-raleway font-bold text-white lg:text-4xl text-3xl '> Our Services </h1>
        </div>
        
      
        {service_info_2.map((service: any) => (
          <div key={service.id} className={"relative w-full h-[20vh] text-black flex items-center justify-center overflow-hidden  " + service.bg_colour}>
            
            
            <div className={`absolute inset-0 bg-black opacity-0 transition-opacity duration:300 ${ service.hover ? "hover:opacity-20" : "hover:opacity-0"}`}> </div>;
            <span className='p-4 pt-3 pb-3 lg:text-4xl text-3xl font-ubuntu font-bold text-center'> {service.title} </span>
          </div>
          
          
          
        ))}

        <div className='flex flex-col justify-center align-middle items-center bg-[#35322B]'>
            <h1 className='font-raleway font-bold text-white lg:text-4xl text-3xl '> Our Services </h1>
        </div>

        <div className='flex flex-col justify-center align-middle items-center bg-[#35322B] block lg:hidden'>
            <h1 className='font-raleway font-bold text-white lg:text-4xl text-3xl '> Our Services </h1>
        </div>


      </div>

    </section>

    );
};

export default Services;

