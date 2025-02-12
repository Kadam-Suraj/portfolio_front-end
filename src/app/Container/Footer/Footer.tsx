import React from 'react';
import { menu } from '../../Constants/NavMenu';
import Link from 'next/link';
import SocialIcons from '@/app/Components/SocialIcons/SocialIcons';
import Logo from '@/app/Components/Logo/Logo';

const Footer = () => {
    return (
        <footer className='mx-auto border-t w-full px-4 py-5 h-32 pb-8'>
            <div className='flex max-w-7xl mx-auto flex-col gap-2'>
                <div className='flex flex-1 justify-between items-center gap-5'>
                    <Logo />
                    <ul className='flex items-center gap-12'>
                        {menu.map((item, idx) => (
                            <Link key={idx} href={item.link}>
                                <li>{item.name}</li>
                            </Link>
                        ))}
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