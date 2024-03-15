import React from 'react'
import { Interface } from '../../Constants/interface';
import { urlFor } from '@/app/Constants/imageBuilder';
import { client } from '../../Client/client';
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from 'next/image';
import { Motion } from '../MotionDiv/MotionDiv';
import { delay } from 'framer-motion';

async function getData() {
    const data = await client.fetch(`*[_type == 'development']`);
    return data as Interface;
}

const ProductList = async () => {
    const data = (await getData()) as unknown as Interface[];
    return (
        <div>
            <div className='border-t-2 transition-all duration-700 select-none cursor-pointer'>
                {data.map((item, idx) => {
                    return <div key={idx}>
                        <div className='relative h-28 w-full border-b-2 flex font-bold items-center justify-between text-[3em] bg-gradient-to-r hover:from-[#B16CEA] hover:via-[#FF5E69] hover:to-[#FFA84B] px-4 group'>
                            <h2>{item.name}</h2>
                            <span className='text-[1.2em] md:block hidden group-hover:animate-ping'>
                                <MdOutlineArrowOutward />
                            </span>
                            <Motion
                                initial={{ y: 100, scale: .6, }}
                                whileInView={{ y: 0, scale: 1, }}
                                className='hidden md:group-hover:flex z-1 absolute h-[250%] w-[25%] -top-[70%] right-[25%]'
                            >
                                <Image
                                    src={urlFor(item.image).url()} width={500} height={500}
                                    alt={item.name}
                                    className='rounded-2xl w-full h-full object-cover' draggable={false}>
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
