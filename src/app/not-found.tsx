import React from 'react'
import { image } from './Constants/index';
import Image from 'next/image';
import Button from './Components/Button/primaryButton';
import Link from 'next/link';

const custom404 = () => {
  return (
    <div className='lg:max-w-[1560px] m-auto flex max-sm:flex-col items-center justify-around gap-20'>
      <div className='flex-1'>
        <Image src={image.not_found} className='w-full h-full' priority alt='not-found' />
      </div>
      <div className='flex-1 flex flex-col gap-10 text-center'>
        <h1 className='text-[5em] font-black leading-[.1em]'>404</h1>
        <span className='text-[3em] font-bold'>Page not found</span>
        <div>
          <Link href='/'>
            <Button>Back to homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default custom404