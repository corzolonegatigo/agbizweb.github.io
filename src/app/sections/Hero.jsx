//Hero.jsx

import Image from "next/image";
import styles from "./heroStyle.module.css";


const { heroContent, heroImage, heroWrapper } = styles;

const HERO_IMAGE = '/images/discussion table.jpg'

const Hero = () => {
    return (
        <div className={heroWrapper} id="home">
            <Image
                className={heroImage}
                priority
                src={HERO_IMAGE}
                fill
                alt="hero image example"
            />

            <div className="items-center justify-items-start pl-[5vw] pt-[26vh] align-middle leading-[1.3] font-onest font-extrabold absolute inset-0 bg-[rgba(0,0,0,0.2)] bg-opacity-50">
                <h1 className="text-[60px] text-black font-medium">We Help You...</h1>
                <h1 className="text-[60px] italic text-green-300 font-bold tracking-wide">Sell</h1>
            </div>



        </div>
    )
}


export default Hero;