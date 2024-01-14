import React from 'react'

const secondaryButton = ({data}) => {
    return (
        <div>
            <button className='text-[1.2em] uppercase py-3 px-6 font-semibold bg-transparent border rounded-[25px] hover:border-slate-300 hover:text-black hover:bg-slate-300 transition-all duration-300 hover:scale-90'>{data}</button>
        </div>
    )
}

export default secondaryButton