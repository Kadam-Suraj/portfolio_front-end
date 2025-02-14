import React from 'react';

import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Link from 'next/link';

const SocialIcons = () => {
    const socials = [
        {
            name: "LinkedIn",
            element: <FaLinkedin />,
            link: ""
        },
        {
            name: "Instagram",
            element: <AiFillInstagram />,
            link: ""
        },
        {
            name: "Instagram",
            element: <FaSquareXTwitter />,
            link: ""
        }
    ]
    return (
        <div>
            <ul className='flex space-x-5'>
                {
                    socials.map((item, idx) => (
                        <Link key={idx} href={item.link}>
                            <li key={idx} className='w-8 h-8 rounded-full text-white flex items-center justify-center bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]'>
                                {item.element}
                            </li>
                        </Link>
                    ))
                }
            </ul></div>
    )
}

export default SocialIcons