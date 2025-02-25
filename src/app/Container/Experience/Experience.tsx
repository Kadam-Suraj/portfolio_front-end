"use client"

import React, { useEffect, useState } from 'react';
import { client } from '@/app/Client/client';
import { PortableText } from '@portabletext/react';
import { Interface } from '@/app/Constants/interface';
import GradientText from '@/app/Components/GradientText';
import Loader from '@/components/Loader/Loader';
import { Separator } from '@/components/ui/separator';

const Experience = () => {
    const [data, setData] = useState([] as Interface[]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await client.fetch(`*[_type == 'work_experience']`) as Interface[];
            setData(response);
            setIsLoading(false);
        })();

    }, [])

    return (
        <section className='flex flex-col gap-5'>
            <GradientText className='text-4xl font-bold'>
                Experience
            </GradientText>
            <div className='flex-col flex gap-5 items-center min-h-52'>
                {
                    isLoading ?
                        <Loader className='mt-20' />
                        :
                        data.map((item, idx) => (
                            <div key={idx} className='grid w-full gap-2 border-b pb-3'>
                                <h4 className='font-semibold'>{item.company}</h4>
                                <div className='flex justify-between items-center prose prose-sm gap-4 font-light text-muted-foreground text-sm'>
                                    <span >{item.role}</span>
                                    <PortableText value={item.working_period} />
                                </div>
                                <Separator />
                                <span className='text-muted-foreground prose prose-sm dark:prose-invert text-sm'>
                                    <h6 className='font-semibold'>Description:</h6>
                                    <PortableText value={item.description} />
                                </span>
                            </div>
                        ))
                }
            </div>
        </section>
    )
}

export default Experience