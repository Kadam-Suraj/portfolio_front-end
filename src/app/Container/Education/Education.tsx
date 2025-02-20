"use client"

import React, { useEffect, useState } from 'react';
import { client } from '@/app/Client/client';
import { PortableText } from '@portabletext/react';
import { Interface } from '@/app/Constants/interface';
import GradientText from '@/app/Components/GradientText';
import Loader from '@/components/Loader/Loader';

const Education = () => {
    const [data, setData] = useState([] as Interface[]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await client.fetch(`*[_type == 'education']`) as Interface[];
            setData(response);
            setIsLoading(false);
        })();
    }, [])

    return (
        <section className='flex flex-col gap-5'>
            <GradientText className='text-4xl font-bold'>
                Education
            </GradientText>
            <div className='flex flex-col gap-5 items-center min-h-52'>
                {
                    isLoading ?
                        <Loader className='mt-20' />
                        :
                        data.map((item, idx) => (
                            <div key={idx} className='grid w-full gap-1 border-b pb-3'>
                                <h4 className='font-semibold'>{item.university}</h4>
                                <div className='flex justify-between items-center gap-4 font-light text-muted-foreground text-sm'>
                                    <span className=''>{item.degree}</span>
                                    <PortableText value={item.passing} />
                                </div>
                            </div>
                        ))
                }
            </div>
        </section>
    )
}

export default Education
