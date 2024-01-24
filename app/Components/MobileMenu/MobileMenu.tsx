import React from 'react'
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import { menu } from '@/app/Constants/Navmenu';
import Link from 'next/link';

const MobileMenu = ({ data , fnc }) => {

    return (
        <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            className={`${data ? 'flex' : 'hidden'} flex-col min-[880px]:hidden absolute top-[101%] right-0 left-0 gap-4`}>
            <nav className='fixed w-full flex flex-col'>
                <ul className='flex flex-col w-full h-screen bg-white dark:bg-black gap-[2em] items-center pt-[4em] text-[2em]'>
                    {menu.map((item, idx) => {
                        if (item === 'Home') return <Link key={idx} href={'/'}>
                            <li
                            onClick={fnc}
                            >{item}</li>
                        </Link>
                        return <Link key={idx} href={`/${item}`}>
                            <li
                             onClick={fnc}
                            >{item}</li>
                        </Link>
                    })}
                </ul>
                {/* <Button data={"LET'S TALK"} /> */}
            </nav>
        </motion.div>
    )
}

export default MobileMenu