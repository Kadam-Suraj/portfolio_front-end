import React from 'react'

const Button = ({ data }) => {
  return (
    <div>
      <button className='text-[1.2em] uppercase py-3 px-6 font-semibold dark:bg-white dark:text-black text-white bg-black rounded-[25px] hover:bg-[#272727] hover:text-white hover:scale-90 transition-all duration-300'>{data}</button>
    </div>
  )
}

export default Button