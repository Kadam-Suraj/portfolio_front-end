import React from 'react'
import { motion } from 'framer-motion';
import { menu } from '@/app/Constants/NavMenu';
import Link from 'next/link';
import { IoHome, IoInformation, } from 'react-icons/io5';
import { FaLaptopCode } from 'react-icons/fa';
import { MdContacts } from 'react-icons/md';

const MobileMenu = ({ data, fnc }: { data: boolean, fnc: any }) => {

    const icons = [<IoHome />, <IoInformation />, <FaLaptopCode />, <MdContacts />]
    const mobileMenuOptions = menu.map((item, idx) => ({ ...item, icon: icons[idx] }));

    return (
        <nav className="relative top-14 right-0 overflow-hidden">
            <motion.div
                initial={{ x: 100 }} // Start from the right
                animate={{ x: 0 }} // Move into view
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="border-l border-y fixed bg-background h-screen top-14 right-0 max-[480px]:w-full w-60 px-2 py-5"
            >
                <ul className="flex flex-col gap-5 w-full">
                    {mobileMenuOptions.map((item, idx) => (
                        <Link
                            key={idx}
                            onClick={fnc}
                            href={item.link}
                            className="flex items-center gap-2 text-xl px-4 py-2 hover:bg-accent transition-colors rounded-md"
                        >
                            {item.icon}
                            <li className="text-lg">{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </motion.div>
        </nav>
    )
}

export default MobileMenu