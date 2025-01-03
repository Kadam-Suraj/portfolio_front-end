import React from 'react'
import { menu } from '../../Constants/Navmenu';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Navbar = () => {

    return (
        <div className='md:flex gap-3 hidden self-center'>
            <nav>
                <ul className='flex items-center '>
                    {menu.map((item) => {
                        if (item === 'Home') return <Link key={item} href={`/`}>
                            <li key={item} className=''>
                                <Button variant={'ghost'}>
                                    {item}
                                </Button>
                            </li>
                        </Link>
                        return <Link key={item} href={`/${item}`}>
                            <li className=''>
                                <Button variant={'ghost'}>
                                    {item}
                                </Button></li>
                        </Link>
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar