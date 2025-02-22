import React from 'react';
import { menu } from '../../Constants/NavMenu';
import Link from 'next/link';
import SocialIcons from '@/app/Components/SocialIcons/SocialIcons';
import Logo from '@/app/Components/Logo/Logo';
import Button from "@/app/Components/Button/primaryButton"
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Separator } from "@/components/ui/separator"

const Footer = () => {
    return (
        <footer className='mx-auto border-t w-full px-4 py-2'>
            <div className='max-w-7xl mx-auto flex-col flex gap-5'>
                <div className='flex gap-2 mt-2 items-center justify-between flex-wrap'>
                    <h4 className='font-bold text-3xl'>Lets Connect there</h4>
                    <Link href="/contact">
                        <Button className='flex gap-2 items-center self-end'>Hire me  <MdOutlineArrowOutward /></Button>
                    </Link>
                </div>
                <Separator />
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-wrap justify-between items-center gap-5'>
                        <Logo />
                        <ul className='flex items-center flex-wrap gap-4'>
                            {menu.map((item, idx) => (
                                <Link key={idx} href={item.link} className='hover:underline text-sm hover:text-accent-foreground transition-[color] duration-300 underline-offset-4 text-muted-foreground'>
                                    <li>{item.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <p className='text-sm text-muted-foreground md:w-1/2'>Aiming to build solutions that inspire and empower. Every project is a step toward the future—where creativity meets innovation. Let’s make it happen!</p>
                    <div className='flex items-center gap-5 justify-between'>
                        <div className='flex flex-col'>
                            <span className='text-xs text-muted-foreground'>© Designed & developed by Suraj Kadam</span>
                            <span className='text-xs text-muted-foreground'>2024 - {new Date().getFullYear()}</span>
                        </div>
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer