// serviceImage.tsx
import React from 'react';
import Image from "next/image";

interface image_info {
  title: string;
  imageurl: string;
  desc: string;
}

const ServiceImage = ({title, imageurl, desc}: image_info) => {
  return (
    <div className='relative w-[33vw] h-[15vw] align-start justify-center pl-[10px]'>
        <Image className="object-center object-fit-cover w-10 object-contain relative" 
            priority
            src={imageurl}
            alt="hero image example"
            // style= {{ objectFit: 'cover'}}
            layout="responsive"
            width={50}
            height={50}
        />
        <h1 className='font-raleway font-bold text-white text-[20px] align-middle pt-[10rem] absolute top-50% bottom-50%'> {title} </h1>
    </div>

    // image grid
    

    );
};

export default ServiceImage;