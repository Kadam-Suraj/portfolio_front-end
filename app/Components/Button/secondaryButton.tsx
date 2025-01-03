import React from 'react'

const secondaryButton = ({ data }) => {
    return (
        <div>
            <button className='uppercase py-2 px-3 font-medium bg-transparent border rounded-full hover:text-background hover:bg-accent-foreground transition-all duration-300 hover:scale-90'>{data}</button>
        </div>
    )
}

export default secondaryButton