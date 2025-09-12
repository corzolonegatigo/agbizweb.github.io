// Testimonial.tsx
import React from 'react';
import Image from "next/image";
import { testimonials } from "@data/index.ts";
import test from 'node:test';



const Testimonial = () => {
  return (
    <section id="testimonials" className='relative gap-y-7 pt-[50px] '>
        <h1 className='font-raleway font-bold text-black text-[60px] justify-center align-middle flex flex-col items-center'> Customer Testimonials </h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-10 p-10'>
            


            {testimonials.map((testimonial: any) => (
                 
                      
                    
            <div key={testimonial.id} className='text-black bg-[#E9E2D6] p-12 border-2 border-black rounded-2xl shadow-xl'>
                <h1 className='font-lexendDeca font-medium lg:text-[16px] md:text-[12px] sm:text-[8px] align-top pl-3' > 
                    <span className='text-5xl align-left text-left'>"</span> 
                        <p className='text-left justify-center mx-auto'> 
                            {testimonial.quote} "</p>
                </h1>
                <div className='flex flex-row gap-x-5 relative items-middle justify-start pl-3 pt-10'>
                    <div className='relative w-5 h-5 sm:w-4 sm:h-4 md:w-8 md:h-8 lg:w-12 lg:h-12'>
                        <Image
                            src={testimonial.icon}
                            alt="hi"
                            layout=""
                            className="object-cover h-auto rounded-full"
                            fill
                            
                        />
                    </div>
                    <div className='align-middle justify-center items-center'>
                        <h3 className='font-lexendDeca text-xl font-bold'> {testimonial.name} </h3>
                        <h3 className='font-lexendDeca text-xl'> {testimonial.title} </h3>
                    </div>
                </div>
                
            </div>

            ))}
        </div>
    </section>

    );
};

export default Testimonial;