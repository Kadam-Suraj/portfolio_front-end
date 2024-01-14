import React from 'react'
import { client } from '@/app/Client/client';
import { Interface } from '@/app/Constants/interface';
import { PortableText } from '@portabletext/react';
import { IoChevronDownOutline } from 'react-icons/io5';

async function getData() {
    const data = await client.fetch(`*[_type == 'faq']`);
    return data as Interface;
}

const FaQs = async () => {
    const data = (await getData()) as unknown as Interface[];
    return (
        <div>
            <div>{data.map((item, idx) => {
                return <div key={idx} className={`${idx ? 'pt-4' : 'pt-0'}`}>
                    <div className='flex flex-col gap-5 cursor-pointer border-b pb-4 border-[#737373] group select-none'>
                        <div className='flex items-center justify-between gap-5'>
                            <h3 className='text-[1.5em] font-semibold'>{item.question}</h3>
                            <div
                            >
                                <IoChevronDownOutline className='text-[2em] group-hover:-rotate-180' />
                            </div>
                        </div>
                        <div
                            className={`dark:text-white dark:text-opacity-80 hidden group-hover:block`}>
                            <PortableText value={item.answer}></PortableText>
                        </div>
                    </div>
                </div>
            })}</div>
        </div>
    )
}

export default FaQs