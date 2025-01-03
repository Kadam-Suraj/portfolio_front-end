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
                {tools.map((item, idx) => {
                    return <div key={idx}>
                        <div className='relative h-28 w-full border-b-2 flex font-bold items-center justify-between text-[3em] bg-gradient-to-r hover:from-[#B16CEA] hover:via-[#FF5E69] hover:to-[#FFA84B] px-4 group'>
                            <h2>{item.name}</h2>
                            <span className='text-6xl md:block hidden group-hover:animate-pulse'>
                                <MdOutlineArrowOutward />
                            </span>
                            <Motion
                                initial={{ y: 100, scale: .6, }}
                                whileInView={{ y: 0, scale: 1, }}
                                className='hidden md:group-hover:flex z-1 absolute w-60 -top-[70%] right-[25%] bg-background rounded-xl border aspect-square p-2'
                            >
                                <Image
                                    src={urlFor(item.image).url()} width={500} height={500}
                                    alt={item.name}
                                    className={`rounded-2xl w-full h-full object-contain aspect-square ${item?.name.toLowerCase() == "github" && "dark:invert"}`} draggable={false}>
                                </Image>
                            </Motion>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProductList
