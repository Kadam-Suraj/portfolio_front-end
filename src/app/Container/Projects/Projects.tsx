import React from 'react';
import Button from '@/app/Components/Button/primaryButton';
import Button2 from '@/app/Components/Button/secondaryButton';
import ProductList from '../../Components/ProductList/ProductList';
import Link from 'next/link';
import GradientText from '@/app/Components/GradientText';
import { Separator } from '@/components/ui/separator';

const Projects = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex max-sm:flex-col gap-7 items-center w-full justify-between'>
                <div className='w-full flex justify-between items-center'>
                    <h2 className='font-bold text-3xl w-full'>Design that solves
                        <span className='flex gap-2 items-center w-full'>
                            <Separator className='w-1/4' />
                            problems, One
                        </span>
                        <GradientText>product at a time</GradientText>
                    </h2>
                </div>
                <div className='w-full sm:justify-items-end'>
                    <div className='flex gap-4'>
                        <Link href={'/contact'}>
                            <Button>Get in touch</Button>
                        </Link>
                        <Link href={'/projects'}>
                            <Button2>View projects</Button2>
                        </Link>
                    </div>
                </div>
            </div>
            <ProductList />
        </div>
    )
}

export default Projects