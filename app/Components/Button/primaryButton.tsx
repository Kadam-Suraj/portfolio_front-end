import React from 'react'

const primaryButton = ({ data }) => {
  return (
    <div>
      <button className='text-[1.2em] uppercase py-3 px-6 font-semibold bg-gradient-to-r hover:from-[#FFA84B] hover:via-[#FF5E69] hover:to-[#B16CEA] from-[#B16CEA] via-[#FF5E69] to-[#FFA84B] rounded-[25px] transition-all duration-300 hover:scale-90'>{data}</button>
    </div>
  )
}

export default primaryButton