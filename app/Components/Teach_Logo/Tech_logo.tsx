import React from 'react'
import { urlFor } from '@/app/Constants/imageBuilder'
import { client } from '@/app/Client/client'
import { Interface } from '../../Constants/interface';
import Image from 'next/image';

async function getData() {
    const data = await client.fetch(`*[_type == 'logos']`)
    return data as Interface;
}

const Logo = async () => {

    const data = (await getData()) as unknown as Interface[];
    return (
        <div>
            <div className='flex flex-wrap gap-14 md:gap-20 items-center justify-center w-full my-10'>{data?.map((item, idx) => {
                return <div key={idx}>
                    <Image className='opacity-70 invert dark:invert-0 w-[4em]' src={urlFor(item.image).url()} width={50} height={50} alt={item.name}></Image>
                </div>
            })}</div>
        </div>
    )
}

export default Logo