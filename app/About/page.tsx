import React from 'react';
import SocialIcons from '../Components/SocialIcons/SocialIcons';
import Strip from '../Components/Strip/Strip';
import Education from '../Container/Education/Education';
import Experience from '../Container/Experience/Experience';

const page = () => {
    return (
        <div className='min-h-screen'>
            <div className='justify-center lg:max-w-[1560px] mx-auto mt-48 mb-28 px-4'>
                <div className='flex flex-col gap-20'>
                    <div className='flex justify-between gap-12 md:gap-5 max-md:flex-col items-baseline'>
                        <h1 className='text-[5em] font-bold leading-[1.2em] md:w-1/2'>Hi, I am <br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FFA84B] w-fit'>Suraj Kadam</span></h1>
                        <div className='flex flex-col md:w-1/2 gap-5'>
                            <p className='font-light text-[1.2em]'>I'm a fresher in the tech industry, i've spend lot of time between new technologies</p>
                            <SocialIcons />
                        </div>
                    </div>
                    <div className='flex gap-5 max-sm:flex-col items-center max-md:lex-wrap'>
                        <div className='flex flex-col items-center justify-center text-center p-4 sm:basis-1/3 w-2/3'>
                            <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FFA84B] text-[3em] font-bold'>1+</h2>
                            <span>Years of experience in Web Development</span>
                        </div>
                        <div className='flex flex-col items-center justify-center text-center p-4 max-sm:pb-8 basis-1/3 max-sm:border-y sm:border-x border-gray-500 w-2/3'>
                            <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FFA84B] text-[3em] font-bold'>4+</h2>
                            <span>Successfully completed projects.</span>
                        </div>
                        <div className='flex flex-col items-center justify-center text-center p-4 basis-1/3 w-2/3'>
                            <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FFA84B] text-[3em] font-bold'>14+</h2>
                            <span>Global customers</span>
                        </div>
                    </div>
                </div>
            </div>
            <Strip />
            <div className='justify-center lg:max-w-[1560px] mx-auto mt-48 mb-28 px-4'>
                <div className='flex justify-between lg:gap-32 gap-14 max-sm:flex-col'>
                    <div className='md:w-1/2'>
                        <Education />
                    </div>
                    <div className='md:w-1/2'>
                        <Experience />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page