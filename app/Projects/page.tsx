import React from 'react'
import { Interface } from '../Constants/interface'
import { client } from '../Client/client'
import { urlFor } from '../Constants/imageBuilder';
import Image from 'next/image';
import Button from '../Components/Button/Button';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';

async function getData() {
    const data = await client.fetch(`*[_type == 'projects']`);
    return data as Interface;
}

const page = async () => {
    const data = (await getData()) as unknown as Interface[];

    return (
        <div>
            <div className='lg:max-w-[1560px] flex flex-col gap-24 min-h-screen m-auto px-5 mt-40 py-10'>
                <div className='flex flex-col gap-32'>
                    <div className='flex items-center gap-20 max-md:flex-col pb-20'>
                        <h1 className='font-bold text-[4.5em] md:w-1/2 self-start leading-[1.1em]'>
                            Have a look at my <span className='bg-gradient-to-r bg-clip-text text-transparent from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]'>projects.</span>
                        </h1>
                        <p className='text-[1.2em] md:w-1/2 text-opacity-60 text-black dark:text-slate-300'>Explore my diverse range of projects and discover the exceptional craftsmanship and creativity that goes into each one. From innovative designs to meticulous attention to detail, my projects are a testament to quality and excellence. Whether you're seeking inspiration or looking for a unique addition to your space, my collection offers something for everyone. Take a closer look and be captivated by the beauty and ingenuity of my work.</p>
                    </div>
                    <div className='flex flex-wrap gap-16 justify-center'>
                        {data.map((item, idx) => {
                            if (item.name === 'Personal Portfolio')
                                return <div key={idx}>
                                    <div className='max-w-[25em] rounded-xl bg-[#f1f1f1] dark:bg-[#1d1d1d] hover:scale-105 duration-300 transition-all group'>
                                        <Image className='rounded-t-xl w-full h-full pointer-events-none' src={urlFor(item.image).url()} alt={item.name} width={800} height={800} draggable={false}/>
                                        <div className='p-5'>
                                            <h2 className='font-bold text-[1.7em]'>{item.name}</h2>
                                            <span>{item.tag}</span>
                                        </div>
                                    </div>
                                </div>

                            return <div key={idx}>
                                <Link href={`/Projects/${item._id}`}>
                                    <div className='max-w-[25em] rounded-xl bg-[#f1f1f1] dark:bg-[#1d1d1d] hover:scale-105 duration-300 transition-all'>
                                        <Image className='rounded-t-xl w-full h-full pointer-events-none' src={urlFor(item.image).url()} alt={item.name} width={800} height={800} draggable={false} />
                                        <div className='p-5'>
                                            <h2 className='font-bold text-[1.7em]'>{item.name}</h2>
                                            <div className='flex items-center justify-between ga'>
                                                <span className='w-2/3'>{item.tag}</span>
                                                <Button >{'Read more'}</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        })}
                    </div>
                    <div className='text-center flex flex-col items-center gap-4 py-32 px-10 bg-gradient-to-r rounded-b-3xl from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]'>
                        <h2 className='font-bold text-[3em]'>Interested in working with me?</h2>
                        <Link href='/Contact'>
                            <Button >{'Get in touch'}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page