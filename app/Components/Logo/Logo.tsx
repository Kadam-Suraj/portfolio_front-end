import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { image } from '@/app/Constants/index';

const Logo = () => {
    return (
        <div className="logo">
            <Link href='/' className='font-bold text-[2.1em] flex items-baseline'><Image src={image.logo} alt='logo' className='w-[2em] invert dark:invert-0'></Image><span className='text-[.7em]'>.dev</span></Link>
        </div>
    )
}

export default Logo