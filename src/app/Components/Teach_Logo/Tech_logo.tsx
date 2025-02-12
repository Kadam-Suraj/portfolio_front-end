"use client"

import React, { useEffect, useState } from 'react'
import { urlFor } from '@/app/Constants/imageBuilder'
import Image from 'next/image';
import { getLogos } from '@/app/api/sanity';
import { Interface } from '@/app/Constants/interface';

const Logo = () => {
    const [logos, setLogos] = useState([] as Interface[])

    useEffect(() => {

        const fetchLogo = async () => {
            const data = await getLogos()
            setLogos(data as any)
        }

        fetchLogo();
    }, [])

    return (
        <div className='flex flex-wrap gap-10 w-full justify-center'>
            {logos?.map((item, idx) => (
                <Image key={idx} className='invert opacity-75 dark:invert-0 max-sm:w-10' src={urlFor(item.image).url()} width={45} height={45} alt={item.name} />
            ))}
        </div>
    )
}

export default Logo