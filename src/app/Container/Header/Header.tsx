'use client'
import React, { useState } from 'react'
import Navbar from '@/app/Components/Navbar/Navbar'
import MobileMenu from '@/app/Components/MobileMenu/MobileMenu';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import Link from 'next/link';
import { image } from '../../Constants/index';
import Image from 'next/image';
import Logo from '@/app/Components/Logo/Logo';
import { ModeToggle } from '@/components/ui/theme-mode'
import { Button } from '@/components/ui/button';

const Header = () => {

    // const

    const [menu, setMenu] = useState(false);

    function call() {
        setMenu(!menu)
    }

    return (
        <header className='sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-md'>
            <div className='flex px-3 py-2 justify-between items-center max-w-7xl m-auto w-full'>
                <Logo />
                <div className='flex justify-between gap-3 items-center'>
                    <Navbar />
                    <div className='flex gap-6 items-center'>
                        <Link href="/" className='max-[880px]:hidden'>
                            <Button>Let's talk</Button>
                        </Link>
                        <div className='flex min-[880px]:hidden'>
                            <div className='text-[3.5em] '>
                                <span onClick={call
                                } className={`${menu ? 'hidden' : 'flex'}`}>
                                    <HiOutlineMenuAlt3 />
                                </span>
                                <span onClick={call} className={`${menu ? 'flex' : 'hidden'}`}>
                                    <IoCloseOutline />
                                </span>
                            </div>
                            <MobileMenu data={menu} fnc={call} />
                        </div>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header