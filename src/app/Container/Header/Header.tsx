'use client'
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '@/app/Components/Navbar/Navbar'
import MobileMenu from '@/app/Components/MobileMenu/MobileMenu';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import Link from 'next/link';
import Logo from '@/app/Components/Logo/Logo';
import { ModeToggle } from '@/components/ui/theme-mode'
import { Button } from '@/components/ui/button';

const Header = () => {


    const [menu, setMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    function toggleMenu() {
        setMenu((prev) => !prev);
    }

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenu(false); // Close menu if clicked outside
            }
        }

        if (menu) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menu]);

    return (
        <header className='fixed top-0 z-50 w-full border-b bg-background/60 backdrop-blur-md'>
            <div className='flex px-3 py-2 justify-between items-center max-w-7xl m-auto w-full'>
                <Logo />
                <div className='flex justify-between gap-3 items-center'>
                    <Navbar />
                    <div className='flex gap-6 items-center'>
                        <Link href="/contact" className='max-md:hidden'>
                            <Button>Let's talk</Button>
                        </Link>
                        <ModeToggle />
                        <div ref={menuRef} className='flex md:hidden flex-col overflow-x-hidden'>
                            <span onClick={toggleMenu}>
                                {
                                    menu ?
                                        <IoCloseOutline size={30} />
                                        :
                                        <HiOutlineMenuAlt3 size={30} />
                                }
                            </span>
                            {
                                menu &&
                                <MobileMenu data={menu} fnc={toggleMenu} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header