import React from 'react'

const secondaryButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <button className='py-1 px-3 font-medium bg-transparent border rounded-full hover:text-background hover:bg-accent-foreground transition-all duration-300 hover:scale-90'>{children}</button>
        </div>
    )
}

export default secondaryButton