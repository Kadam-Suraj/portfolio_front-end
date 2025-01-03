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
        <div>
            <div className='flex flex-wrap gap-14 md:gap-20 items-center justify-center w-full my-10 min-h-16'>
                {logos?.map((item, idx) => {
                    return <div key={idx}>
                        <Image className='invert opacity-75 dark:invert-0 w-[4em]' src={urlFor(item.image).url()} width={50} height={50} alt={item.name} />
                    </div>
                })}</div>
        </div>
    )
}

export default Logo