import React from 'react';
import { menu } from '../../Constants/NavMenu';
import Link from 'next/link';
import SocialIcons from '@/app/Components/SocialIcons/SocialIcons';
import Logo from '@/app/Components/Logo/Logo';

const Footer = () => {
    return (
        <footer className='mx-auto border-t w-full px-4 py-2'>
            <div className='flex max-w-7xl mx-auto flex-col gap-5'>
                <div className='flex flex-wrap justify-between items-center gap-5'>
                    <Logo />
                    <ul className='flex items-center gap-4'>
                        {menu.map((item, idx) => (
                            <Link key={idx} href={item.link} className='hover:underline hover:text-accent-foreground transition-[color] duration-300 underline-offset-4 text-muted-foreground'>
                                <li>{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className='flex items-center gap-5 justify-between'>
                    <span className='text-xs text-muted-foreground'>© Designed & developed by Suraj Kadam</span>
                    <SocialIcons />
                </div>
            </div>
        </footer>
    )
}

export default Footer