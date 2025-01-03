import React from 'react';

import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const SocialIcons = () => {
    return (
        <div><div className='flex space-x-5'>
            {
                [<FaLinkedin />, <AiFillInstagram />, <FaSquareXTwitter />]
                    .map((item, idx) => {
                        return <span key={idx} className='w-10 h-10 text-[1.5em] rounded-full flex items-center justify-center bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]'>{item}</span>
                    })}
        </div></div>
    )
}

export default SocialIcons