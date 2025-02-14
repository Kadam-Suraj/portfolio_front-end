"use client"
import React, { useEffect, useState } from 'react'
import { Interface } from '../Constants/interface'
import { urlFor } from '../Constants/imageBuilder';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects } from '../api/sanity';
import { Button } from '@/components/ui/button';
import GradientText from '../Components/GradientText';
import Loader from '@/components/Loader/Loader';

const page = () => {
    const [project, setProject] = useState([] as Interface[]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            const data = await getAllProjects();
            setProject(data);
            setIsLoading(false);
        }
        getData();
    }, []);

    return (
        <div>

            <div className='flex flex-col'>
                <div className='flex flex-col justify-center items-center gap-10'>
                    <div className='flex items-center gap-5 max-sm:flex-col pb-5'>
                        <h1 className='font-bold text-4xl flex-1 self-start'>
                            Have a look at my <GradientText>projects</GradientText>
                        </h1>
                        <p className='flex-1 text-sm font-light'>Explore my diverse range of projects and discover the exceptional craftsmanship and creativity that goes into each one. From innovative designs to meticulous attention to detail, my projects are a testament to quality and excellence. Whether you're seeking inspiration or looking for a unique addition to your space, my collection offers something for everyone. Take a closer look and be captivated by the beauty and ingenuity of my work.</p>
                    </div>
                    <div className='min-h-60'>

                        {
                            isLoading ?
                                <Loader />
                                :
                                project.length ?
                                    <div className='grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center'>
                                        {
                                            project.map((item, idx) => (
                                                <div key={idx} className=''>
                                                    <Link href={`/projects/${item._id}`}>
                                                        <div className='shrink rounded-xl h-full flex flex-col justify-between bg-accent hover:scale-105 duration-300 transition-all p-1'>
                                                            <Image className='aspect-video object-contain rounded-xl w-full pointer-events-none' priority src={urlFor(item.image).url()} alt={item.name} width={800} height={800} draggable={false} />
                                                            <div className='gap-2 flex flex-col p-2'>
                                                                <h2 className='font-medium text-ellipsis line-clamp-2'>{item.name}</h2>
                                                                <div className='flex items-center justify-between gap-2'>
                                                                    <span className='flex-1 text-sm text-muted-foreground line-clamp-1'>{item.tag}</span>
                                                                    <Button >Read more</Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    :
                                    <h2 className='self-center font-bold text-2xl'>No projects yet</h2>
                        }
                    </div>
                    <div className='text-center flex flex-col w-full justify-center items-center gap-4 h-60 p-5 bg-gradient-to-r rounded-b-3xl from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]'>
                        <h2 className='font-bold  text-4xl text-white'>Interested in working with me?</h2>
                        <Link href='/contact'>
                            <Button >Get in touch</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page