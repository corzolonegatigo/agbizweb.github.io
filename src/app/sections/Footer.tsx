// Footer.tsx
import React from 'react';
import Image from "next/image";
import { industries_served } from '@data/index';




const Footer = () => {
  return (
        <section id="#footer" className='pl-30 bg-[#E9E2D6] p-10 grid grid-cols-2 gap-x-12 '>
          <div>
            <h1 className='font-raleway font-semibold text-black text-xl lg:pb-3 md:pb-2 sm:pb-1 justify-center align-left'> Industries We Serve </h1>


              {industries_served.map((industry: any) => (
              
                  <div key={industry.id} className='font-lexendDeca text-blue-950 text-md underline'>
                    <ul className='list-none'>{industry.title}</ul>

                    </div>
                  
                        
                ))}
          </div>
          <div className='justify-center align-left'>
              <h1 className='font-raleway font-semibold text-black text-xl lg:pb-3 md:pb-2 sm:pb-1 justify-center align-left'> Contact Us: </h1>
              <div className='flex flex-cols gap-x-8'>
                <div>
                  <h2 className='font-lexendDeca font-medium text-black text-lg'> Email </h2>
                  <p className='font-lexendDeca font-normal text-blue-950 text-md underline'> gmail@gmail.com </p>

                </div>

                <div className=''>
                  <h2 className='font-lexendDeca font-medium text-black text-lg'> Phone Number </h2>
                  <p className='font-lexendDeca font-normal text-blue-950 text-md underline'> +65 1234 5678 </p>

                </div>
              </div>
              

          </div>
        </section>

    );
};

export default Footer;