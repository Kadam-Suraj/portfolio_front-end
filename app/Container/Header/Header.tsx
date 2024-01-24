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
import { ModeToggle } from '../../../components/ui/theme-mode'

const Header = () => {

    // const

    const [menu, setmenu] = useState(false);

    function call() {
        setmenu(!menu)
    }

    return (
        <div>
            <header className='fixed top-0 left-0 w-full bg-white dark:bg-[#00000093] bg-opacity-40
             z-10 backdrop-blur-md border-b dark:border-gray-50 border-black border-opacity-70 items-center'>
                <div className='flex px-3 py-3 justify-between items-center lg:max-w-[1560px] m-auto'>

                    <div className='flex gap-12 items-end'>
                        <div>
                            <Logo />
                        </div>
                        <Navbar />
                    </div>
                    <div className='flex gap-6 items-center'>
                        <div className='max-[880px]:hidden'>
                            <Link href={'/Contact'}>
                                <Button>{"LET'S TALK"}</Button>
                            </Link>
                        </div>
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
                        <div className='relative right-0'>
                            <ModeToggle></ModeToggle>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header