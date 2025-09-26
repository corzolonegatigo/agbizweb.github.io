import { about, vision, mission } from '@data/index';
import Image from 'next/image';
import React from 'react';


const AboutUs = () => {
  return (

     //gap-y-[5vw], blue - 48536B
    <section id="aboutus" className='relative flex flex-col pt-[6vw] ' > 
      
      

      <div className='justify-center items-center grid grid-cols-2 gap-[7.5vw] bg-[#E4CB9E] p-25'>
        <div className='align-middle gap-y-[20rem] text-black mx-auto'>
          <h1 className='text-5xl lg:pb-5 md:pb-3 sm:pb-1 font-raleway font-bold '>About Us</h1>
          <p className='lg:text-[16px] md:text-[16px] w-[40vw] font-lexendDeca'> {about} </p>
        </div>
        <Image
          src="/images/shake hands.jpeg"
                alt="hi"
                layout="relative"
                sizes="33vw"
                className="object-contain w-[90%] max-w-5xl h-auto rounded-xl hidden md:block"
                width = {600}
                height={300}

        />

      </div>
      <div className='grid grid-rows-2 align-middle justify-center'>
        <div className='grid sm:grid-cols-[20%_0.5%_68.5%] grid-cols-[25%_0.5%_68.5%] align-middle justify-center text-black bg-[#E0BF85] mx-auto w-[100vw] lg:p-15 md:p-12 sm:p-8 p-6 items-center gap-5'>
          <h1 className='lg:text-5xl text-3xl font-raleway font-bold text-center sm:text-left'> Mission </h1>
          <div className="w-1 bg-black opacity-70" style={{ height: '75%' }}></div>
          <p className='lg:text-[20px] md:text-[16px] sm:text-[10px] text-[10px] w-[50vw] font-lexendDeca mx-auto text-left font-medium'> {mission} </p>
        </div>
        <div className='grid grid-cols-[69%_1%_20%] align-middle justify-center text-black bg-[#D9B370] mx-auto w-[100vw] p-15 items-center gap-5'>
          <p className='lg:text-[20px] md:text-[16px] sm:text-[10px] text-[10px] w-[50vw] font-lexendDeca mx-auto text-right'> {vision} </p>
          <hr className='bg-black opacity-70 size-1 h-[80%] items-center align-middle justify-center'></hr>
          <h1 className='lg:text-5xl text-4xl font-raleway font-bold text-center'> Vision </h1>
          
          
        </div>
      </div>
      <div className='h-20 bg-background'></div>
      <div className=' justify-center flex mx-auto bg-[#D6AC63] rounded-4xl border-2 border-black p-15'>
        <h1 className='font-raleway text-black font-bold text-4xl'>Learn More About Us.</h1>
      </div>
      
    </section>

    

    );
};

export default AboutUs;