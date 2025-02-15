import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { menu } from '@/app/Constants/NavMenu';
import Link from 'next/link';
import { IoHome, IoInformation, } from 'react-icons/io5';
import { FaLaptopCode } from 'react-icons/fa';
import { MdContacts } from 'react-icons/md';
import { usePathname } from 'next/navigation';

const MobileMenu = ({ state, fnc }: { state?: boolean, fnc: any }) => {
    const pathname = usePathname();

    const icons = [<IoHome />, <IoInformation />, <FaLaptopCode />, <MdContacts />]
    const mobileMenuOptions = menu.map((item, idx) => ({ ...item, icon: icons[idx] }));

    return (
        <AnimatePresence>
            {state && (
                <div key="menu-wrapper" className="fixed top-14 right-0 z-50 max-w-72 w-full">
                    <motion.nav
                        key="mobile-menu"
                        initial={{ x: 100, opacity: 0 }}  // Start off-screen
                        animate={{ x: 0, opacity: 1 }}    // Animate in
                        exit={{ x: 100, opacity: 0 }}     // Animate out when menu closes
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="border-l border-t bg-background h-[calc(100vh-3.46rem)] px-2 py-5 shadow-lg"
                    >
                        <ul className="flex flex-col gap-5 w-full">
                            {mobileMenuOptions.map((item, idx) => (
                                <Link
                                    key={idx}
                                    onClick={fnc}
                                    href={item.link}
                                    className={`${pathname == item.link && "bg-accent"} flex items-center gap-2 text-xl px-4 py-2 hover:bg-accent transition-colors rounded-md`}
                                >
                                    {item.icon}
                                    <li className="text-lg">{item.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </motion.nav>
                </div>
            )}
        </AnimatePresence>
    )
}

export default MobileMenu