"use client"
import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { menu } from '@/app/Constants/NavMenu';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className='md:flex gap-3 hidden self-center'>
            <nav>
                <ul className='flex items-center gap-3'>
                    {menu.filter(item => item.name != "Contact").map((item, idx) => (
                        <Link key={idx} href={item.link} >
                            <li>
                                <Button variant={"ghost"} className={`${pathname === item.link ? "text-accent-foreground bg-accent rounded-full" : "text-muted-foreground"} duration-300`}>
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