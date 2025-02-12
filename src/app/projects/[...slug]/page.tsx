"use client"
import React, { useEffect, useState } from 'react'
import { Interface } from '@/app/Constants/interface'
import { urlFor } from '@/app/Constants/imageBuilder';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { MdOutlineChevronLeft } from "react-icons/md";
import { getProject } from '@/app/api/sanity';

const slug = ({ params }: { params: any }) => {
    const [project, setProject] = useState([] as Interface[]);

    useEffect(() => {
        async function getData() {
            const data = await getProject(params.slug[0]);
            setProject(data as any as Interface[]);
        }
        getData();
    }, [])

    return (

        <div>
            {
                project.length ?
                    <div className='min-h-[65vh] py-40 lg:max-w-[1560px] mx-auto px-5'>
                        <div className='pb-10 flex items-center'>
                            <Link href={`/projects`}>
                                <Button>
                                    <span className='pr-3 text-xl'> <MdOutlineChevronLeft></MdOutlineChevronLeft> </span>
                                    Back
                                </Button>
                            </Link>
                        </div>
                        <div>{project.map((item, idx) => {
                            return <div key={item._id}>
                                <div className='flex max-[880px]:flex-col justify-between items-center gap-10'>
                                    <div className='lg:w-1/2 h-full flex justify-center'>
                                        <Image className='rounded-xl pointer-events-none' src={urlFor(item.image).url()} alt={item.caption ? item.caption : 'image'} width={500} height={500} draggable={false}></Image>
                                    </div>
                                    <div className='flex flex-col w-full min-[880px]:w-1/2 max-sm:px-0 max-[880px]:px-14 self-start'>
                                        <h1 className='text-[3em] font-bold text-transparent bg-clip-text w-fit bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]'>{item.name}</h1>
                                        <div className='w-fit'>
                                            <Badge variant={'outline'}>
                                                {item.tag}
                                            </Badge>
                                        </div>
                                        <div className='pt-5'>
                                            <PortableText value={item.description}></PortableText>
                                        </div>
                                        <div className='pt-10 w-fit flex self-end'>
                                            {item.link &&
                                                <Link href={`${item.link ? item.link : ''}`} target={`${item.link ? '_blank' : ''}`}>
                                                    <Button>View live version</Button>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}</div>

                    </div>
                    :
                    <div className='text-center flex flex-col items-center gap-4 py-32 px-10 bg-gradient-to-r rounded-b-3xl from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]'>
                        <h2 className='font-bold text-[3em]'>No projects yet</h2>
                    </div>
            }
        </div>
    )
}

export default slug
