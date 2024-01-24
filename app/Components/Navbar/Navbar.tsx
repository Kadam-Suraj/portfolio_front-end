import React from 'react'
import { menu } from '../../Constants/Navmenu';
import Link from 'next/link';
import Button from '../Button/Button';

const Navbar = () => {

    return (
        <div className='min-[880px]:flex gap-3 hidden'>
            <nav>
                <ul className='gap-12 flex text-[1.5em] group'>
                    {menu.map((item) => {
                        if (item === 'Home') return <Link key={item} href={`/`}>
                            <li key={item} className='font-light active:border-b rounded-xl pb-2 px-4'>{item}</li>
                        </Link>
                        return <Link key={item} href={`/${item}`}>
                            <li className='font-light active:border-b rounded-xl pb-2 px-4'>{item}</li>
                        </Link>
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar