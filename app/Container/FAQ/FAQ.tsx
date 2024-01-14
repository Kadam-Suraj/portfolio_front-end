import React from 'react';
import Button from '@/app/Components/Button/primaryButton';
import FaQs from './FaQs';

const FAQ = () => {

    return (
        <div className='py-40'>
            <div className='flex justify-between max-md:flex-col gap-14'>
                <div className='flex flex-col md:w-1/2 gap-8'>
                    <h2 className='text-[4em] font-bold leading-[1.2em]'>Frequently Asked <span className='bg-gradient-to-r text-transparent bg-clip-text from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]'>Questions</span></h2>
                    <span>Answer to the burning questions in your mind.</span>
                    <a href='tel:+917887686442' className='w-fit'>
                        <Button data={'Contact me'} />
                    </a>
                </div>
                <div className='md:w-1/2' >
                    <FaQs />
                </div>
            </div >
        </div >
    )
}

export default FAQ