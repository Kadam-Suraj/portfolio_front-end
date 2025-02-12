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
import GradientText from '@/app/Components/GradientText';

async function getData() {
    const data = await client.fetch(`*[_type == 'about']`);
    return data as Interface;
}

const Hero = async () => {
    const data = (await getData()) as any as Interface[];

    return (
        <div className='flex flex-col gap-20'>
            <div className='flex justify-center'>
                {data?.map((item, idx) => (
                    <div key={idx} className='flex max-sm:flex-col w-full items-center gap-10 justify-between'>
                        <div className="flex flex-col items-start flex-1 gap-2">
                            <div className='flex flex-col m-auto font-bold text-4xl'>
                                <GradientText >
                                    Hello, I'm {item.name}
                                </GradientText>
                                <span>{item.about}</span>
                            </div>
                            <p className='font-light'>{item.description}</p>
                            <div className='flex gap-3 w-full'>
                                <Link href={'/contact'}>
                                    <Button>Get in touch</Button>
                                </Link>
                                <Link href={'/projects'}>
                                    <Button2>View projects</Button2>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <Image className='rounded-2xl w-fit h-96' src={urlFor(item.image).url()} width={500} height={500} quality={100} alt={item.name} loading='lazy' />
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-20'>
                <Logos />
                <Strip />
            </div>
        </div>
    )
}

export default Hero