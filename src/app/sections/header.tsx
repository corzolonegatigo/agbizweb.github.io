// Header.tsx
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';




const Header = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        let lastScrollY = window.scrollY;
        console.log("scroll")

        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }
            else {
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        }

        window.addEventListener("scroll", controlNavbar)

        return () => window.removeEventListener("scroll", controlNavbar)
    }, [])
    
    return (
       <header className={` flex flex-cols justify-center bg-background p-8 text-black underline font-lexendDeca font-medium lg:gap-x-30 md:gap-x-20 sm:gap-x-10 border-b-2 border-blue-950 z-50 ${ isVisible ? "translate-y-0" : "-translate-y-full"}`}>
            <Link href="#home">
                <h1 className='transition-transform duration-300 hover:scale-110'> Home</h1>
            </Link>

            <Link href="#aboutus">
                <h1 className='transition-transform duration-300 hover:scale-110'> About Us</h1>
            </Link>

            <Link href="#services">
                <h1 className='transition-transform duration-300 hover:scale-110'> Our Services</h1>
            </Link>

            <Link href="#testimonials">
                <h1 className='transition-transform duration-300 hover:scale-110'> Testimonials</h1>
            </Link>
       </header>
    );
};

export default Header;