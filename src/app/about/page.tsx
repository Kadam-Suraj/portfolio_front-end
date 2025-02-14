import React from 'react';
import SocialIcons from '../Components/SocialIcons/SocialIcons';
import Strip from '../Components/Strip/Strip';
import Education from '../Container/Education/Education';
import Experience from '../Container/Experience/Experience';
import GradientText from '../Components/GradientText';

const page = () => {
    return (
        <div className='flex flex-col gap-20'>
            <div className='justify-center'>
                <div className='flex flex-col gap-10'>
                    <div className='flex justify-between gap-12 md:gap-5 max-md:flex-col items-baseline'>
                        <h1 className='text-4xl font-bold'>Hi, I am <br />
                            <GradientText>
                                Suraj Kadam
                            </GradientText>
                        </h1>
                        <div className='flex flex-col md:w-1/2 gap-5'>
                            <p className='font-light'>I'm a fresher in the tech industry, i've spend lot of time between new technologies</p>
                            <SocialIcons />
                        </div>
                    </div>
                    <div className='flex gap-5 max-sm:flex-col items-center'>
                        <div className='flex flex-col items-center justify-center text-center p-4 sm:basis-1/3 w-2/3'>
                            <GradientText className='font-bold text-5xl'>1+</GradientText>
                            <span>Years of experience in Web Development</span>
                        </div>
                        <div className='flex flex-col items-center justify-center text-center p-4 max-sm:pb-8 basis-1/3 max-sm:border-y sm:border-x w-2/3'>
                            <GradientText className='font-bold text-5xl'>4+</GradientText>
                            <span>Successfully completed projects.</span>
                        </div>
                        <div className='flex flex-col items-center justify-center text-center p-4 basis-1/3 w-2/3'>
                            <GradientText className='font-bold text-5xl'>10+</GradientText>
                            <span>Technologies</span>
                        </div>
                    </div>
                </div>
            </div>
            <Strip />
            <div className='mt-14'>
                <div className='flex justify-between gap-10 max-sm:flex-col'>
                    <div className='flex-1'>
                        <Education />
                    </div>
                    <div className='flex-1'>
                        <Experience />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page