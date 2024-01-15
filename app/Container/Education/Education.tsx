import React from 'react';
import { client } from '@/app/Client/client';
import { PortableText } from '@portabletext/react';
import { Interface } from '@/app/Constants/interface';

async function getData() {
    const data = await client.fetch(`*[_type == 'education']`);
    return data as Interface;
}

const Education = async () => {
    const data = (await getData()) as unknown as Interface[];

    return (
        <div>
            <div>
                <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FFA84B] w-fit text-[3em] font-bold pb-14'>Education</h2>
                <div>{data.map((item, idx) => {
                    return <div key={idx} className='flex flex-col gap-5 justify-center border-b py-5 border-gray-400'>
                        <h4 className='font-semibold'>{item.university}</h4>
                        <div className='flex justify-between items-center gap-8'>
                            <span className='font-light text-opacity-80 text-white'>{item.degree}</span>
                            <span className='font-light text-opacity-80 text-white'>
                                <PortableText value={item.passing} />
                            </span>
                        </div>
                    </div>
                })}</div>
            </div>
        </div>
    )
}

export default Education
