import React from 'react'
import { Interface } from '../Constants/interface'
import { client } from '../Client/client'
import { urlFor } from '../Constants/imageBuilder';
import Image from 'next/image';
import Button from '../Components/Button/Button';
import Link from 'next/link';

async function getData() {
    const data = await client.fetch(`*[_type == 'projects']`);
    return data as Interface;
}

getData()

const page = async () => {
    const data = (await getData()) as unknown as Interface[];

    return (
        <div>
            <div className='lg:max-w-[1560px] flex flex-col gap-24 min-h-screen m-auto px-5 mt-40 py-10'>
                <div className='flex flex-col gap-32'>
                    <div className='flex items-center gap-20 max-md:flex-col pb-20'>
                        <h1 className='font-bold text-[3.3em] md:w-1/2'>
                            Have a look at my <span className='bg-gradient-to-r bg-clip-text text-transparent from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]'>projects.</span>
                        </h1>
                        <p className='md:w-1/2 text-opacity-60 text-black dark:text-slate-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem distinctio voluptatibus itaque quisquam libero et tempore quae. Quasi, vitae doloremque doloribus dolore harum fugit! Minus ipsum quaerat ea, reiciendis perspiciatis vel cupiditate accusamus, molestias veniam doloribus consequatur nostrum. Cupiditate, consequatur.</p>
                    </div>
                    <div className='flex flex-wrap gap-16 justify-center'>
                        {data.map((item, idx) => {
                            return <div key={idx}>
                                <div>
                                    <div className='max-w-[25em] rounded-xl bg-[#f1f1f1] dark:bg-[#1d1d1d]'>
                                        <Image className='rounded-t-xl w-full h-full' src={urlFor(item.image).url()} alt={item.name} width={800} height={800} />
                                        <div className='p-5'>
                                            <h2 className='font-bold text-[1.7em]'>{item.name}</h2>
                                            <span>{item.description}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className='text-center flex flex-col items-center gap-4 p-32 bg-gradient-to-r rounded-b-3xl from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]'>
                        <h2 className='font-bold text-[3em]'>Interested in working with me?</h2>
                        <Link href='/Contact'><Button data='Get in touch' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page