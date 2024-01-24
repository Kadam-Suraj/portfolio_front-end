import React from 'react'

const Button = ({ children }) => {
  return (
    <div>
      <button className='text-[.8em] uppercase py-2 px-5 font-semibold dark:bg-white dark:text-black text-white bg-black rounded-[25px] hover:bg-[#272727] hover:text-white hover:scale-90 transition-all duration-300'>{children}</button>
    </div>
  )
}

export default Button