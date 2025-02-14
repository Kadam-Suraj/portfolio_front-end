import React from 'react';
import Button from '@/app/Components/Button/primaryButton';
import FaQs from './FaQs';
import GradientText from '@/app/Components/GradientText';
import Link from 'next/link';

const FAQ = () => {

    return (
        <div className='flex justify-between max-sm:flex-col gap-10'>
            <div className='flex flex-col flex-1 gap-5'>
                <h2 className='text-4xl font-bold'>Frequently Asked <GradientText>Questions</GradientText></h2>
                <span>Answer to the burning questions in your mind.</span>
                <Link href='tel:+91 7887686442' className='w-fit'>
                    <Button>Contact me</Button>
                </Link>
            </div>
            <div className='flex-1' >
                <FaQs />
            </div>
        </div >
    )
}

export default FAQ