import React from 'react';
import { client } from '@/app/Client/client';
import { Interface } from '@/app/Constants/interface';
import { urlFor } from '../../Constants/imageBuilder';
import Button from '@/app/Components/Button/primaryButton';
import Button2 from '@/app/Components/Button/secondaryButton';
import Image from 'next/image';
import Strip from '@/app/Components/Strip/Strip';
import Logos from '../../Components/Teach_Logo/Tech_logo';
import Link from 'next/link';

async function getData() {
    const data = await client.fetch(`*[_type == 'about']`);
    return data as Interface;
}

const Hero = async () => {

    const data = (await getData()) as unknown as Interface[];
    console.log(data)

    return (<>

        <div>
            <div className='relative pt-14 flex justify-center lg:max-w-[1560px] mx-auto'>
                {data?.map((item) => {
                    return <div key={item._id}>
                        <div className='flex-col md:gap-10 gap-32 px-4 md:px-8 lg:pt-16 pt-44 max-sm:pb-20 items-center flex lg:flex-row justify-center min-h-screen'>
                            <div className="flex flex-col gap-6 w-full lg:w-[48%]">
                                <div className='flex flex-col gap-[1em] m-auto leading-[6em]'>
                                    <h2 className='bg-gradient-to-r bg-clip-text text-transparent from-[#B16CEA] via-[#FF5E69] to-[#FFA84B] font-bold text-[5em]'>Hello,<br />I'm {item.name},</h2>
                                    <span className='text-[4em] font-bold leading-[1.1em]'>{item.about}</span>
                                </div>
                                <p className='text-[1.6em] leading-[1.2em] font-light'>{item.description}</p>
                                <div className='flex gap-3 w-full'>
                                    <Link href={'/Contact'}>
                                        <Button data={'GET IN TOUCH'} />
                                    </Link>
                                    <Link href={'Projects'}>
                                        <Button2 data={'VIEW ALL WORKS'} />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex md:w-[48%] max-md:items-baseline justify-center">
                                <Image className='rounded-2xl h-auto' src={urlFor(item.image).url()} width={450} height={450} alt={item.name} priority></Image>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className='flex flex-col gap-10'>
                <div className='px-5'>
                    <Logos></Logos>
                </div>
                <div>
                    <Strip />
                </div>
            </div>
        </div>
    </>
    )
}

export default Hero