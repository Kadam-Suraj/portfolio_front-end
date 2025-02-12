import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { menu } from '@/app/Constants/NavMenu';

const Navbar = () => {

    return (
        <div className='md:flex gap-3 hidden self-center'>
            <nav>
                <ul className='flex items-center gap-3'>
                    {menu.map((item, idx) => (
                        <Link key={idx} href={item.link}>
                            <li>
                                <Button variant={"ghost"}>
                                    {item.name}
                                </Button>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar