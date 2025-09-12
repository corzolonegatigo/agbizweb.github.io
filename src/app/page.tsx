import Image from "next/image";
import Hero from "./sections/Hero.jsx";
import Services from "./sections/Services.tsx";
import AboutUs from "./sections/aboutUs.tsx";
import Testimonial from "./sections/Testimonials.tsx";
import Footer from "./sections/Footer.tsx";
import Header from "./sections/header.tsx";


export default function Home() {
  return (
    <div className="relative flex flex-col overflow-x-hidden">
       <Hero />
       <AboutUs />
       <div className="h-[10vw]"></div>
       <Services />
       <div className="h-[10vw]"></div>
       <Testimonial />
       <div className="h-[10vw]"></div>
       <Footer />
       
        
        
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        </footer>
    </div>

  );
}
