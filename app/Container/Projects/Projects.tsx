import React from 'react';
// import { client } from '@/app/Client/client';
// import { urlFor } from '@/app/Constants/imageBuilder';
// import Image from 'next/image';
// import { RxDividerHorizontal } from "react-icons/rx";
import Button from '@/app/Components/Button/primaryButton';
import Button2 from '@/app/Components/Button/secondaryButton';
import ProductList from '../../Components/ProductList/ProductList';
import Link from 'next/link';

const Projects = () => {
    return (
        <div className='lg:max-w-[1560px] flex flex-col gap-24 min-h-screen m-auto px-5 mt-20 py-10'>
            <div className='flex flex-col md:flex-row gap-7 items-center w-full min-h-96 justify-between'>
                <div className='w-full flex md:justify-center items-center'>
                    <h2 className='font-bold text-[3em]'>Design that solves <br />
                        <span className='flex gap-2 pl-[1em]'>
                            <span className='w-[2em] h-[1px] mt-[.6em] bg-white'></span>Problems, One
                        </span>
                        <span className='bg-gradient-to-r bg-clip-text text-transparent from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]'>product at a time</span> </h2>
                </div>
                <div className='flex w-full md:justify-center'>
                    <div className='flex md:flex-row flex-col gap-4'>
                        <Link href={'/Contact'}>
                            <Button data={'GET IN TOUCH'} />
                        </Link>
                        <Link href={'Projects'}>
                            <Button2 data={'VIEW ALL WORKS'} />
                        </Link>
                    </div>
                </div>
            </div>
            <ProductList></ProductList>
        </div>
    )
}

export default Projects