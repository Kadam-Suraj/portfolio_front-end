import React from 'react'

const GradientText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <span className={`${className} bg-clip-text text-transparent bg-gradient-to-r w-fit from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]`}>
            {children}
        </span>

    )
}

export default GradientText