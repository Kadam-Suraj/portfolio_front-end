import React from 'react';
import Image from 'next/image'
import { image } from '@/app/Constants';

const Strip = () => {
    return (
        <div className='overflow-x-clip'>
            <div className='relative w-[101%] h-[80px] -right-1 -left-1 bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]'>
                <div>
                    <div className='w-[101%] absolute top-0 left-0 right-0 h-[80px] dark:bg-white dark:text-black bg-black text-white -rotate-3 flex items-center justify-center gap-8'>
                        {['Discover', 'star', 'Develop','star','Discover', 'star', 'Develop','star','Discover', 'star', 'Develop','star','Discover', 'star', 'Develop','star','Discover', 'star', 'Develop','star',].map((item, i) => {
                            if (item === 'star')
                                return <Image key={i} className='dark:invert-0 invert w-8 h-8' src={image.star} width={50} height={50} alt={item} />
                            return <div key={i} className='font-bold uppercase text-2xl'>
                                <span>{item}</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Strip