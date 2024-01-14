import React from 'react';
import { menu } from '../../Constants/Navmenu';
import Link from 'next/link';
import SocialIcons from '@/app/Components/SocialIcons/SocialIcons';
import Logo from '@/app/Components/Logo/Logo';

const Footer = () => {
    return (
        <footer className='lg:max-w-[1560px] mx-auto px-4 pt-20 pb-8 md:pb-5'>
            <div className='h-32 flex flex-col gap-8 border-t border-white border-opacity-50 pt-10'>
                <div className='flex w-full justify-between items-center gap-5'>
                    <div>
                        <Logo/>
                    </div>
                    <ul className='flex items-center gap-12'>

                        {menu.map((item, idx) => {
                            if (item === 'Home') return <Link key={idx} href='/'>
                                <li>{item}</li>
                            </Link>

                            if (item === 'Home' || item === 'About' || item === 'Contact') return <Link key={idx} href={`/${item}`}>
                                <li>{item}</li>
                            </Link>

                        })}
                    </ul>
                </div>
                <div className='flex items-center gap-5 justify-between pb-10'>
                    <span>© Designed by Suraj Kadam</span>
                    <SocialIcons />
                </div>
            </div>
        </footer>
    )
}

export default Footer