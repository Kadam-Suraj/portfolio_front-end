'use client'
import React, { useState } from 'react'
import Navbar from '@/app/Components/Navbar/Navbar'
import Button from '@/app/Components/Button/Button';
import MobileMenu from '@/app/Components/MobileMenu/MobileMenu';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import Link from 'next/link';
import { image } from '../../Constants/index';
import Image from 'next/image';
import Logo from '@/app/Components/Logo/Logo';

const Header = () => {

    // const

    const [menu, setmenu] = useState(false);

    function call() {
        setmenu(!menu)
    }

    return (
        <div>
            <header className='fixed top-0 w-full bg-white dark:bg-black z-10 backdrop-blur-md bg-opacity-60 border-b border-gray-50 border-opacity-70'>
                <div className='flex px-3 py-4 justify-between items-center lg:max-w-[1560px] m-auto'>

                    <div className='flex gap-12 items-baseline'>
                        <div>
                            <Logo />
                        </div>
                        <Navbar />
                    </div>
                    <div className='flex gap-6 items-center'>
                        <Link href={'/Contact'}>
                            <Button data={"LET'S TALK"} />
                        </Link>
                        <div className='flex sm:hidden'>
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
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header