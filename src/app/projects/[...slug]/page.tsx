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
import Loader from '@/components/Loader/Loader';
import GradientText from '@/app/Components/GradientText';
import { PiLinkBold } from 'react-icons/pi';

const slug = ({ params }: { params: any }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [project, setProject] = useState({} as Interface);
    const { slug }: { slug: string } = React.use(params);

    useEffect(() => {
        async function getData() {
            const [data] = await getProject(slug) as any as Interface[];
            setProject(data);
            setIsLoading(false);
        }
        getData();
    }, []);

    return (

        <div className='flex justify-center projects-center'>
            {
                isLoading ?
                    <Loader />
                    :
                    <div className="flex flex-col gap-5">
                        <Link href={`/projects`}>
                            <Button>
                                <MdOutlineChevronLeft />
                                Back
                            </Button>
                        </Link>
                        <div>
                            <div className='flex max-md:flex-col justify-between projects-center gap-10'>
                                <div className='flex-1 flex items-center justify-center'>
                                    <Image className='rounded-xl pointer-events-none aspect-auto w-auto h-auto' src={urlFor(project.image).url()} alt={project.caption ? project.caption : 'project_image'} width={500} height={500} priority draggable={false} />
                                </div>
                                <div className='flex flex-1 flex-col gap-2 self-start'>
                                    <GradientText className='font-bold text-4xl'>
                                        {project.name}
                                    </GradientText>
                                    <Badge variant={'outline'} className='w-fit font-light'>
                                        {project.tag}
                                    </Badge>
                                    <span className='prose-sm prose'>
                                        <PortableText value={project.description} />
                                    </span>
                                    {project.link &&
                                        <Link href={project.link ? project.link : ''} target={project.link ? '_blank' : ''} className='w-fit self-end'>
                                            <Button className='flex projects-center gap-2 text-xs'><PiLinkBold size={14} /> View live version</Button>
                                        </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            }
            {/* <div className='text-center flex flex-col projects-center gap-4 py-32 px-10 bg-gradient-to-r rounded-b-3xl from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]'>
                <h2 className='font-bold text-[3em]'>No projects yet</h2>
            </div> */}
        </div >
    )
}

export default slug
