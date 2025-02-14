import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { image } from '@/app/Constants/index';

const Logo = () => {
    return (
        <div className="logo w-fit pt-1">
            <Link href='/' className='font-bold text-3xl flex items-baseline'><Image src={image.logo} alt='logo' className='w-[1em] invert dark:invert-0'></Image><span className='text-sm'>.dev</span></Link>
        </div>
    )
}

export default Logo