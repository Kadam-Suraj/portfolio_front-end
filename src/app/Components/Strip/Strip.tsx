import React from 'react';
import Image from 'next/image'
import { image } from '@/app/Constants';
import { MotionDiv } from '../MotionDiv';

const Strip = () => {
    const items = ['Discover', 'star', 'Develop', 'star'];
    const stripeItems = Array(20).fill(items).flat();

    return (
        <div className='overflow-x-clip'>
            <div className='absolute overflow-x-clip h-14 right-0 left-0 bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]'>
                <div>
                    <div className='absolute -left-1 -right-1 h-14 bg-foreground text-background -rotate-3 flex items-center justify-center gap-8'>
                        <div className="overflow-hidden whitespace-nowrap w-full py-4">
                            <MotionDiv
                                className="flex items-center gap-4"
                                animate={{ x: ["-50%", "0%", "-50%"] }} // Left → Right → Left
                                transition={{
                                    repeat: Infinity, // Infinite loop
                                    repeatType: "mirror",
                                    duration: 30,
                                    ease: "easeInOut",
                                }}
                            >
                                {stripeItems.map((item, i) => (
                                    item === "star" ? (
                                        <Image
                                            key={i}
                                            className="dark:invert-0 invert w-5 h-5"
                                            src={image.star} // Replace with your image path
                                            width={50}
                                            height={50}
                                            alt="Star"
                                        />
                                    ) : (
                                        <div key={i} className="font-bold uppercase text-lg">
                                            <span>{item}</span>
                                        </div>
                                    )
                                ))}
                            </MotionDiv>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Strip