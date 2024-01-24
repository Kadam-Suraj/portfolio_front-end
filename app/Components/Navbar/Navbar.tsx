import React from 'react'
import { menu } from '../../Constants/Navmenu';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Navbar = () => {

    return (
        <div className='min-[880px]:flex gap-3 hidden self-center'>
            <nav>
                <ul className='gap-12 flex text-[1.1em] group '>
                    {menu.map((item) => {
                        if (item === 'Home') return <Link key={item} href={`/`}>
                            <li key={item} className='font-light rounded-xl'>
                                <Button variant={'link'}>
                                    {item}
                                </Button>
                            </li>
                        </Link>
                        return <Link key={item} href={`/${item}`}>
                            <li className='font-light rounded-xl'>
                                <Button variant={'link'}>
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