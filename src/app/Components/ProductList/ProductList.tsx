"use client"

import React, { useEffect, useState } from 'react'
import { Interface } from '../../Constants/interface';
import { urlFor } from '@/app/Constants/imageBuilder';
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from 'next/image';
import { Motion } from '../MotionDiv/MotionDiv';
import { getTools } from '@/app/api/sanity';

const ProductList = () => {

    const [tools, setTools] = useState([] as Interface[]);

    useEffect(() => {

        const fetchTools = async () => {
            const data = await getTools();
            setTools(data as any);
        }

        fetchTools();

    }, []);

    return (
        <div>
            <div className='border-t-2 transition-all duration-700 select-none cursor-pointer'>
                {tools.map((item, idx) => (
                    <div key={idx}>
                        <div className='relative w-full border-b-2 flex font-semibold py-5 items-center justify-between text-2xl bg-gradient-to-r hover:from-[#B16CEA] hover:via-[#FF5E69] hover:to-[#FFA84B] px-4 group hover:text-white'>
                            <h2>{item.name}</h2>
                            <MdOutlineArrowOutward className='md:block hidden group-hover:animate-pulse' />
                            <Motion
                                initial={{ y: 100, scale: .6, }}
                                whileInView={{ y: 0, scale: 1, }}
                                className='hidden md:group-hover:flex z-10 absolute w-52 -top-20 right-60 bg-background rounded-xl border aspect-square p-1'
                            >
                                <Image
                                    src={urlFor(item.image).url()} width={500} height={500} loading='lazy'
                                    alt={item.name}
                                    className={`rounded-lg w-full h-full object-contain aspect-square ${(item?.name.toLowerCase() == "github" || item?.name.toLowerCase() == "nextjs") && "dark:invert"}`} draggable={false}>
                                </Image>
                            </Motion>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList
